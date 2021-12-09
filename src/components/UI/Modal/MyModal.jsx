import React from 'react';
import cl from './MyModal.module.css';

const MyModal = ({ children, visible, setVisible }) => {
  //Algorithm for dynamic class insertion
  const rootClasses = [cl.myModal];
  if (visible === true) {
    rootClasses.push(cl.active);
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
