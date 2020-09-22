import React, { useEffect } from 'react';
// import scrollbar from 'react-scrollbar';

const BlogView = ({ post }) => {
  useEffect(() => {});
  return (
    <>
      <div className="blogViewContainer__blogPost">
        <h5>Authored by : {post.ownerEmail}</h5>
        <div>{post.description}</div>
      </div>
    </>
  );
};

export default BlogView;
