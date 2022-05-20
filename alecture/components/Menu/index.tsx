import React, { CSSProperties, FC, useCallback } from 'react';
import { CloseModalButton, CreateMenu } from './styles';

interface Props {
  show: boolean;
  onCloseModal: (e: any) => void;
  style: CSSProperties;
  closeButton?: boolean;
}//FC<Props> 프롭스를 통해 이 메뉴에 프롭스가 연결이 됨 뒤에 show boolean style CSS 타입이 뜨는 이유
const Menu: FC<Props> = ({ children, style, show, onCloseModal, closeButton }) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  if (!show) return null;

  return ( //코드의 부모부분에 onCloseModal을 눌러 배경을 누르면 창이 닫히게 구현
    <CreateMenu onClick={onCloseModal}> 
      <div style={style} onClick={stopPropagation}>
        {closeButton && <CloseModalButton onClick={onCloseModal}>&times;</CloseModalButton>}
        {children}
      </div>
    </CreateMenu>
  );
};
Menu.defaultProps = {
  closeButton: true,
};

export default Menu;
