import { theme } from '@/style/theme';
import styled from 'styled-components'


interface Props {
    disabled: boolean;
    success: boolean;
    error: boolean;
  }

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CheckboxInput = styled.input<Props>`
  all: unset;

  width: 24px;
  height: 24px;

  background-color: ${(props) => (props.disabled ? theme.color.gray.gray100 : props.error ? theme.color.red.red100 : theme.color.blue.blue100)};
  border-radius: 0.25rem;
  color: ${theme.color.white.white0};

  position: relative;

  cursor: ${(props) => props.success || props.disabled ? 'default' : 'pointer'};

  &:hover {
    background-color: ${(props) => (props.disabled ? theme.color.gray.gray100 : props.error ? theme.color.red.red100 : theme.color.blue.blue100)};
  }

  &:checked::before {
    content: "✔";
    position: absolute;

    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 12px;
    height: 12px;

    border-radius: 50%;
  }
`;