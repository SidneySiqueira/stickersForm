import { theme } from '@/style/theme';
import styled from 'styled-components'

interface Props {
    disabled: boolean;
    error?: boolean;
  }

export const Counter = styled.div`
  display: flex;
  align-items: center;

  height: 42px;
`;

export const CounterButton = styled.button<Props>`
  display: flex;
  align-items: center;

  border: none;

  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
`;

export const CounterInput = styled.input<Props>`
  width: 60px;
  height: 100%;
  margin: 0 0.5rem;

  background: ${(props) => (props.error ? theme.color.red.red100 : theme.color.gray.gray200)};
  border: 0.063rem solid ${(props) => (props.error ? theme.color.red.red200 : theme.color.blue.blue100)};
  border-radius: 0.438rem;

  font-size: ${theme.font.size.font20};
  font-weight: ${theme.font.weight.bold};
  text-align: center;
`;