import './Modal.scss';
import React from 'react';
import closeIcon from '../../assets/close.svg';

interface ModalProps {
  children?: React.ReactNode,
  closeModal?: () => void,
  bodyClassName?: string,
  modalClassName?: string,
  title?: string,
}

function Modal({
  children,
  closeModal,
  bodyClassName,
  modalClassName,
  title,
}: ModalProps) {
  return (
    <div
      role="dialog"
      className="Modal-wrapper"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          if (closeModal) {
            closeModal();
          }
        }
      }}
    >
      <div className={['Modal', modalClassName || ''].join(' ')}>
        <div className="Modal-head">
          <div className="Modal-title">
            {title}
          </div>
          <button className="Modal-close" onClick={() => closeModal && closeModal()}>
            <img src={closeIcon} alt="Close"/>
          </button>
        </div>

        <div className={['Modal-body', bodyClassName || ''].join(' ')}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
