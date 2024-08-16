// src/components/blog/Blog.jsx

import React from "react";
import "./Blog.css"; // You can create a separate CSS file for styling the blog

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "First Blog Post",
      date: "August 15, 2024",
      content: "This is the content of the first blog post."
    },
    {
      id: 2,
      title: "Second Blog Post",
      date: "August 10, 2024",
      content: "This is the content of the second blog post."
    },
    // Add more blog posts here
  ];

  return (
    <section className="blog section">
      <h2 className="section__title">Blog</h2>
      <span className="section__subtitle">My latest blog posts</span>

      <div className="blog__container container grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog__post">
            <h3 className="blog__title">{post.title}</h3>
            <span className="blog__date">{post.date}</span>
            <p className="blog__content">{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Blog;
