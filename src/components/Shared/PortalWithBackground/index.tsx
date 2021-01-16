import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

interface IBackgroundProps {
  visible: boolean;
  backgroundColor: string;
  zIndex: number;
}

const Background = styled.div<IBackgroundProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${(props) => props.backgroundColor};
  opacity: ${(props) => (props.visible ? '1' : '0')};
  z-index: ${(props) => props.zIndex};
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
`;

function isClient() {
  return typeof window !== 'undefined' && !!window.document;
}

interface IProps {
  visible: boolean;
  backgroundColor?: string;
  clickable?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  zIndex?: number;
}

const PortalWithBackground: React.FC<IProps> = ({
  visible,
  backgroundColor = 'rgba(0, 0, 0, 0.5)',
  children,
  clickable = true,
  zIndex = 1000,
  onClick,
}) => {
  React.useEffect(() => {
    if (isClient()) {
      document.body.style.cssText = visible ? 'overflow:hidden;' : '';
    }
    return () => {
      if (isClient()) {
        document.body.style.cssText = '';
      }
    };
  }, [visible]);

  if (!isClient()) return null;

  return ReactDOM.createPortal((
    <Background
      visible={visible}
      zIndex={zIndex}
      backgroundColor={backgroundColor}
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </Background>
  ), document.body);
};

export default PortalWithBackground;
