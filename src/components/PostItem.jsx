import React from 'react';
import MyButton from './UI/Button/MyButton';

function PostItem(props) {
  const { id, title, body } = props.post;
  const { number, remove, post } = props;

  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={() => remove(post)}>Delete</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
