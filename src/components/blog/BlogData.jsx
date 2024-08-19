// src/components/blog/BlogData.js
import spiceworks_1 from '../../assets/spiceworks_1.png';
import spiceworks_2 from '../../assets/spiceworks_2.png'
export const blogPosts = [
  {
    id: 1,
    title: "Automating Ticket Management with Python: A Deep Dive",
    date: "August 15, 2024",
    subtitle: "In this post, I’ll walk you through how I developed a Python script to automate ticket management in Spiceworks.",
    content: `
## Introduction

In this post, I’ll walk you through how I developed a Python script to automate ticket management in Spiceworks. This involved analyzing the requests and responses using Burp Suite, extracting CSRF tokens, managing sessions, and ultimately creating and editing tickets via the API.

### Step 1: Understanding the Authentication Process

The first step in automating ticket management was to understand how Spiceworks handles authentication. Using Burp Suite, I intercepted the login request to see how the client and server interact. I found that Spiceworks uses a CSRF token, which is required for the login POST request.

#### Analyzing the Initial GET Request

I initiated a login request to \`https://accounts.spiceworks.com/sign_in\` and intercepted it using Burp Suite. By inspecting the HTML body in the response, I discovered that the CSRF token was embedded in a \`<meta>\` tag.

![Burp Suite capture showing the CSRF token in the HTML response of the initial GET request.](${spiceworks_1})

### Step 2: Extracting the CSRF Token

To automate the login process, I wrote a function in Python to extract the CSRF token from the HTML response. This token is then used in subsequent POST requests to authenticate the user.

\`\`\`python
def get_csrf_token(response):
    soup = BeautifulSoup(response.text, 'html.parser')
    csrf_token = soup.find('meta', {'name': 'csrf-token'})
    return csrf_token['content'] if csrf_token else None
\`\`\`

### Step 3: Managing Sessions with Cookies

Once I had the CSRF token, the next step was to handle the session cookies. Spiceworks requires these cookies to maintain an authenticated session. By analyzing the login request in Burp Suite, I saw that upon successful login, the server returns session cookies that must be retained for subsequent requests.

![Burp Suite capture showing the cookies returned after a successful login.](${spiceworks_2})

To implement this I used sessions from the requests library to keep cookies upon subsequent requests.

### Step 4: Automating Ticket Actions

With the session established and the CSRF token in hand, I moved on to automating ticket management. This involved creating and editing tickets via POST requests to the Spiceworks API. Again, I used Burp Suite to analyze the structure of these requests.

#### Creating a Ticket

By examining the network activity when manually creating a ticket, I identified the endpoint \`https://on.spiceworks.com/api/main/tickets\`. The request required various headers, including the CSRF token and cookies. Below is the Python code that performs this action:

\`\`\`python
def create_ticket(title, description, csrf_token):
    final_url = "https://on.spiceworks.com/api/main/tickets"
    final_headers = {
        # Headers with CSRF token and session cookies
    }
    json_data = {
        # JSON data structure for ticket creation
    }
    response = session.post(final_url, headers=final_headers, json=json_data)
    print("Final POST request status code: ", response.status_code)
\`\`\`

![Burp Suite capture showing the POST request structure for creating a new ticket.](path_to_image3.jpg)

### Step 5: Editing a Ticket

Similarly, to add a comment to an existing ticket, I identified the endpoint \`https://on.spiceworks.com/api/tickets/{ticket_number}/comments\`. This required a similar setup with headers and JSON data. The Python function to do this looks like:

\`\`\`python
def add_comment(ticket_number, message, csrf_token):
    comment_url = f"https://on.spiceworks.com/api/tickets/{ticket_number}/comments"
    # Function code
\`\`\`

![Burp Suite capture showing the POST request for adding a comment to a ticket.](path_to_image4.jpg)

### Step 6: Categorizing Tickets Based on Keywords

In addition to automating ticket creation and commenting, I implemented a feature to categorize tickets based on specific keywords. This is particularly useful for quickly sorting and prioritizing tickets based on their content.

#### Analyzing Ticket Content

Using Burp Suite, I examined how ticket information is sent and retrieved via the Spiceworks API. When a ticket is created or viewed, the description and other details are part of the JSON payload. By parsing these details, I could identify keywords that indicate the nature of the issue.

For example, keywords like "network," "server," or "login" might suggest different categories such as "Network Issues," "Server Maintenance," or "User Login Problems."

#### Implementing Keyword-Based Categorization

Here’s how I approached the problem:

1. **Define Keyword Categories**: I created a dictionary in Python where each category is associated with a list of relevant keywords.
2. **Analyze Ticket Description**: When a ticket is created or retrieved, the description is scanned for these keywords.
3. **Assign Category**: Based on the first matching keyword, the ticket is assigned to a specific category.

Here’s a simplified version of the code:

\`\`\`python
# Define categories and associated keywords
categories = {
    "Network Issues": ["network", "connectivity", "DNS", "ping"],
    "Server Maintenance": ["server", "downtime", "reboot", "maintenance"],
    "User Login Problems": ["login", "credentials", "password", "authentication"]
}

# Function to categorize ticket based on description
def categorize_ticket(description):
    for category, keywords in categories.items():
        for keyword in keywords:
            if keyword.lower() in description.lower():
                return category
    return "Uncategorized"

# Example usage
description = "The server is down and needs a reboot."
category = categorize_ticket(description)
print("Ticket Category:", category)
\`\`\`

#### Integrating Categorization into Ticket Creation

I integrated this categorization logic directly into the ticket creation process. This means that every time a ticket is created via the script, it is automatically categorized based on the description provided.

\`\`\`python
def create_ticket(title, description, csrf_token):
    # Determine the category
    category = categorize_ticket(description)
    
    final_url = "https://on.spiceworks.com/api/main/tickets"
    final_headers = {
        # Headers with CSRF token and session cookies
    }
    
    json_data = {
        "ticket": {
            "summary": title,
            "description": description,
            "ticket_category_id": category_id_mapping[category]  # Map category to ID
            # Other fields
        }
    }
    
    response = session.post(final_url, headers=final_headers, json=json_data)
    print("Final POST request status code: ", response.status_code)
    print("Assigned Category:", category)
\`\`\`

#### Determining Category IDs

Spiceworks likely assigns specific IDs to categories, so the script would need to map the category name to its corresponding ID in the system. This can be done by retrieving the list of categories via the API or manually determining the IDs.

![Burp Suite capture showing the JSON payload with the category field during ticket creation.](path_to_image5.jpg)

## Conclusion

By leveraging the power of Burp Suite for analyzing web traffic, I was able to reverse-engineer the API calls made by Spiceworks. This allowed me to automate ticket management tasks using Python. I hope this guide helps others who are looking to automate similar workflows.

    `,
    tags: [
      { name: "Python", color: "#9575CD" },
      { name: "Automation", color: "#7E57C2" },
      { name: "Spiceworks", color: "#FF7043" },
    ],
  },

    {
      id: 2,
      title: "Journey into XSS",
      date: "August 10, 2024",
      subtitle: "This is the sub of the second blog post.",
      tags: [
        { name: "Cybersecurity", color: "#673AB7" }, // Deep Purple
        { name: "Bug Bounty", color: "#AB47BC" } // Light Purple
      ]
    },
    {
      id: 3,
      title: "Forensic Analysis of iRobot's Roomba ",
      date: "August 5, 2024",
      subtitle: "yer",
      tags: [
        { name: "Cybersecurity", color: "#673AB7" }, // Deep Purple
        { name: "Digital Forensics", color: "#9575CD" } // Soft Purple
      ]
    },
    {
      id: 4,
      title: "Fourth Blog Post",
      date: "July 30, 2024",
      subtitle: "ttttt",
      tags: [
        { name: "Node.js", color: "#7E57C2" } // Medium Purple
      ]
    }
  ];
  