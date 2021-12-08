import React, { useState } from 'react';
import MyInput from './UI/Input/MyInput';
import MyButton from './UI/Button/MyButton';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (event) => {
    event.preventDefault();
    create(post);
    setPost({ title: '', body: '' });
    console.log(post);
  };

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(event) => setPost({ ...post, title: event.target.value })}
        type="text"
        placeholder="Post Title"
      />

      <MyInput
        value={post.body}
        onChange={(event) => setPost({ ...post, body: event.target.value })}
        placeholder="Post Text"
      />
      <MyButton onClick={addNewPost}>Create Post</MyButton>
    </form>
  );
};

export default PostForm;
