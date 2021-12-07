import React from 'react';
import PostItem from '../components/PostItem';
import { useState } from 'react';

function PostList() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Great Language' },
    { id: 2, title: 'Python', body: 'BackEnd Language' },
    { id: 3, title: 'C#', body: 'Language for .NET, Unity' },
    { id: 4, title: 'C#', body: 'Language for .NET, Unity' },
  ]);
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>All Posts</h1>
      {posts.map((post) => {
        return <PostItem post={post} key={post.id} />;
      })}
    </div>
  );
}

export default PostList;
