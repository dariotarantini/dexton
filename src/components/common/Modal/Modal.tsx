import './Modal.scss';
import React from 'react';
import closeIcon from '../../../assets/close.svg';

interface ModalProps {
  children?: React.ReactNode,
  closeModal?: () => void,
  bodyClassName?: string,
  modalClassName?: string,
  title?: React.ReactNode,
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
      className="modal-wrapper"
      onClick={(event) => {
        if (event.currentTarget === event.target) {
          if (closeModal) {
            closeModal();
          }
        }
      }}
    >
      <div className={['modal', modalClassName || ''].join(' ')}>
        <div className="modal__head">
          <div className="modal__title">
            {title}
          </div>
          <button className="modal__close" onClick={() => closeModal && closeModal()}>
            <img src={closeIcon} alt="Close"/>
          </button>
        </div>

        <div className={['modal__body', bodyClassName || ''].join(' ')}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
