import React, { ReactNode } from 'react'
import * as S from './styled'
import { theme } from '@/style/theme'
import { CloseIcon } from '../Icon'

interface ModalProps {
  isOpen: boolean
  redirect?: () => void
  onClose: () => void
  children: ReactNode
}

export default function ModalBase({
  isOpen,
  onClose,
  children,
}: ModalProps) {

  React.useEffect(() => {
    if (isOpen) {
      const handleOutsideClick = (event: MouseEvent) => {
        const modalContainer = document.querySelector('.modal-container');
        if (modalContainer && !modalContainer.contains(event.target as Node)) {
          onClose();
        }
      };
      document.addEventListener('mousedown', handleOutsideClick);
      return () => {
        document.removeEventListener('mousedown', handleOutsideClick);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <S.Wrapper>
      <S.Container className="modal-container">
        <S.BoxTitle>
          <S.Title>Pedido</S.Title>
          <button onClick={onClose} style={{ cursor: 'pointer' }}>
            <CloseIcon size={24} color={theme.color.gray.gray300} />
          </button>
        </S.BoxTitle>
        <S.Divider />
        {children}
      </S.Container>
    </S.Wrapper>
  )
}
