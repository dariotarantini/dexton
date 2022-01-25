import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { RootState } from '../../store';

export type CloseModal = () => void;

export type OpenModalCallback =
  (props: { closeModal: CloseModal; }) => React.ReactNode;

export interface ModalsState {
  active: Map<number, OpenModalCallback>,
}

let lastModalId = 0;

const initialState: ModalsState = {
  active: new Map<number, OpenModalCallback>(),
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<OpenModalCallback>) => {
      state.active.set(lastModalId, action.payload);

      lastModalId += 1;
    },
    closeModal: (state, action: PayloadAction<number>) => {
      state.active.delete(action.payload);
    },
    popModal: (state) => {
      const all = Array.from(state.active.entries());

      if (all.length) {
        const last = all[all.length - 1];

        state.active.delete(last[0]);
      }
    },
  },
});

const {
  openModal,
  closeModal,
  popModal,
} = modalsSlice.actions;

export function useActiveModals() {
  return useSelector((state: RootState) => state.modals.active);
}

export function useOpenModal() {
  const dispatch = useDispatch();

  return (modal: OpenModalCallback) => {
    dispatch(openModal(modal));
  };
}

export function useCloseModal() {
  const dispatch = useDispatch();

  return (id: number) => {
    dispatch(closeModal(id));
  };
}

export function usePopModal() {
  const dispatch = useDispatch();

  return () => {
    dispatch(popModal());
  };
}

export default modalsSlice.reducer;
