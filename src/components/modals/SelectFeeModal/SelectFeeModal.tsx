import React from 'react';
import Modal from '../../common/Modal/Modal';
import { CloseModal } from '../../../store/features/modals/modalsSlice';
import FeeCard from '../../cards/SelectCommisionCard/FeeCard';
import './SelectFeeModal.scss';

interface SelectFeeModalProps {
  closeModal: CloseModal;
  onChange: (amount: number) => void;
  active: number;
}

function SelectFeeModal({
  closeModal,
  onChange,
  active,
}: SelectFeeModalProps) {
  return (
    <Modal title="Select fee" closeModal={closeModal} modalClassName="select-fee-modal">
      <FeeCard
        amount={0.01}
        checkIcon={active === 0.01}
        editIcon={false}
        onClick={() => {
          onChange(0.01);
          closeModal();
        }}
      />
      <FeeCard
        amount={0.05}
        checkIcon={active === 0.05}
        editIcon={false}
        onClick={() => {
          onChange(0.05);
          closeModal();
        }}
      />
      <FeeCard
        amount={0.5}
        checkIcon={active === 0.5}
        editIcon={false}
        onClick={() => {
          onChange(0.5);
          closeModal();
        }}
      />
      <FeeCard
        amount={1}
        checkIcon={active === 1}
        editIcon={false}
        onClick={() => {
          onChange(1);
          closeModal();
        }}
      />
    </Modal>
  );
}

export default SelectFeeModal;
