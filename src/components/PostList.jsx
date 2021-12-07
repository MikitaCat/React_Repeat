import React from 'react';
import PostItem from '../components/PostItem';
import { useState } from 'react';

function PostList({ posts, title }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
