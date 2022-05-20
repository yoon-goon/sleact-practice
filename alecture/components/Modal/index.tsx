import { CloseModalButton, CreateModal } from '@components/Modal/styles';
import React, { FC, useCallback } from 'react';

interface Props { //props 는 부모 컴포넌트가 자식 컴포넌트에게 주는 값 자식 컴포넌트에서는 props 를 받아오기만하고, 받아온 props 를 직접 수정 할 수 없음
  show: boolean;
  onCloseModal: () => void;
}
//FC<Props> 프롭스를 통해 이 메뉴에 프롭스가 연결이 됨 뒤에 show boolean 타입이 뜨는 이유
const Modal: FC<Props> = ({ show, children, onCloseModal }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) {
    return null;
  }
  return (
    <CreateModal onClick={onCloseModal}>
      <div onClick={stopPropagation}>
        <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>
        {children}
      </div>
    </CreateModal>
  );
};

export default Modal;
