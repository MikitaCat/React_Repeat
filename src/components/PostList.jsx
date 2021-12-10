import React from 'react';
import PostItem from '../components/PostItem';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

function PostList({ posts, title, remove }) {
  if (!posts.length) {
    return <h2 style={{ textAlign: 'center' }}>There aren't any posts</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post, index) => {
          return (
            <CSSTransition key={post.id} timeout={500} classNames="post">
              <PostItem remove={remove} number={index + 1} post={post} />
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
