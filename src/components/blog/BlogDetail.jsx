import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogData"; // Importing the centralized blog data
import ReactMarkdown from 'react-markdown';
import './BlogDetail.css'; // Import the specific CSS for blog detail

const BlogDetail = () => {
  const { title } = useParams();

  const blogPost = blogPosts.find(post => post.title.toLowerCase().replace(/\s+/g, '-') === title);

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="blog-detail__container">
      <div className="blog-detail section">
        <h2 className="blog-detail__title">{blogPost.title}</h2>
        <span className="blog-detail__date">{blogPost.date}</span>
        <div className="blog-detail__content">
          <ReactMarkdown>{blogPost.content}</ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
