import React from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "./BlogData"; // Importing the centralized blog data

const BlogDetail = () => {
  const { title } = useParams();

  const blogPost = blogPosts.find(post => post.title.toLowerCase().replace(/\s+/g, '-') === title);

  if (!blogPost) {
    return <p>Blog post not found.</p>;
  }

  return (
    <section className="blog-detail section">
      <h2 className="section__title">{blogPost.title}</h2>
      <span className="section__subtitle">{blogPost.date}</span>
      <p className="blog-detail__content">{blogPost.content}</p>
      <div className="blog-detail__tags">
        {blogPost.tags.map((tag, index) => (
          <span key={index} className="blog-detail__tag" style={{ backgroundColor: tag.color }}>
            {tag.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default BlogDetail;
