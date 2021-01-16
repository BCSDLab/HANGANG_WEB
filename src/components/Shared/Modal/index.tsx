import React from 'react';
import PortalWithBackground from '@components/Shared/PortalWithBackground';
import * as S from './Modal.style';

interface IProps {
  visible: boolean;
  title?: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  closableBackground?: boolean;
  onClose?: (e: React.MouseEvent<HTMLDivElement>) => void;
  noSSR?: boolean;
}

const useNoSSR = (noSSR: boolean) => {
  const [mounted, setMounted] = React.useState(noSSR);
  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
};

const Modal: React.FC<IProps> = ({
  visible,
  title,
  confirmText,
  cancelText,
  onConfirm,
  onCancel,
  onClose,
  children,
  noSSR = false,
}) => {
  const mounted = useNoSSR(noSSR);
  if (!mounted) return null;
  const handleConfirmButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onConfirm?.(e);
  };
  const handleCancelButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    onCancel?.(e);
  };
  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    onClose?.(e);
  };

  return (
    <PortalWithBackground visible={visible} onClick={handleClose}>
      <S.Dialog>
        {title ? (
          <S.Title>{ title }</S.Title>
        ) : null}
        <S.Content>
          { children }
        </S.Content>
        <S.Footer>
          {confirmText ? (
            <S.ConfirmButton onClick={handleConfirmButton}>
              {confirmText}
            </S.ConfirmButton>
          ) : null}
          {cancelText ? (
            <S.CancelButton onClick={handleCancelButton}>
              {cancelText}
            </S.CancelButton>
          ) : null}
        </S.Footer>
      </S.Dialog>
    </PortalWithBackground>
  );
};

export default Modal;
