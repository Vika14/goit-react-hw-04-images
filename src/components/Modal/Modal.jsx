import css from './modal.module.css';
import React, { useEffect } from 'react';

export const Modal = ({ src, alt, modalClose }) => {
  useEffect(() => {
    document.addEventListener('keydown', handleClose);
    return () => {
      document.removeEventListener('keydown', handleClose);
    };
  });

  const handleClose = e => {
    if (e.code === 'Escape') {
      modalClose();
    }
  };

  const BackModalClose = e => {
    if (e.currentTarget === e.target) {
      modalClose();
    }
  };
  return (
    <div onClick={BackModalClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={src} alt={alt} />
      </div>
    </div>
  );
};
