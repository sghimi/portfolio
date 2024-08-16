import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Blog.css";
import { blogPosts } from "./BlogData";

const Blog = () => {
  const [selectedTags, setSelectedTags] = useState([]);

  // Extract all unique tags with their colors
  const allTags = [...new Map(blogPosts.flatMap(post => post.tags.map(tag => [tag.name, tag.color]))).entries()];

  // Toggle the selection of a tag
  const toggleTag = (tag) => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    );
  };

  // Filter posts based on selected tags
  const filteredPosts = selectedTags.length === 0
    ? blogPosts
    : blogPosts.filter(post =>
        selectedTags.every(tag => post.tags.map(t => t.name).includes(tag))
      );

  return (
    <section className="blog section">
      <h2 className="section__title">Blog</h2>
      <span className="section__subtitle">My latest blog posts</span>

      {/* Tag Filter */}
      <div className="blog__tags-filter">
        {allTags.map(([tagName, color]) => (
          <span
            key={tagName}
            onClick={() => toggleTag(tagName)}
            className={`blog__tag-filter ${selectedTags.includes(tagName) ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
          >
            {tagName}
          </span>
        ))}
      </div>

      {/* Blog Posts */}
      <div className="blog__container">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={`/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
            className="blog__post"
          >
            <h3 className="blog__title">{post.title}</h3>
            <span className="blog__date">{post.date}</span>
            <p className="blog__content">{post.content}</p>
            <div className="blog__tags">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="blog__tag"
                  style={{ backgroundColor: tag.color }}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleTag(tag.name);
                  }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Blog;
