import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  //Algorithm for dynamic class insertion
  const rootClasses = [cl.myModal];
  if (visible === true) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')}>
      <div className={cl.myModalContent}>{children}</div>
    </div>
  );
};

export default MyModal;
