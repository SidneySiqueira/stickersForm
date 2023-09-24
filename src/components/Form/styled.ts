import { theme } from "@/style/theme";
import styled from "styled-components";

interface Props {
  background?: string;
  success?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 1.25rem 0;

  background-color: ${theme.color.white.white100};
  border-radius: 0.5rem;
  box-shadow: 0.625rem 1.375rem 2.125rem 0 ${theme.color.black.blackOpacity3};
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 550px;
    margin: 1.25rem auto;
  }
`;

export const Header = styled.div<Props>`
  width: 100%;
  height: 187px;
  padding: 1.438rem 2.25rem;
  margin-bottom: 1rem;

  background-image: url(${(props) => props.background});
  background-size: cover;
  background-position: 100% center;
`;

export const Title = styled.h1`
  color: ${theme.color.white.white0};
  font-size: ${theme.font.size.font23};
  font-weight: ${theme.font.weight.light};
  line-height: ${theme.font.lineHeight.lineHeight28};
  text-align: left;

  span {
    font-weight: ${theme.font.weight.semiBold};
    font-size: ${theme.font.size.font24};
    line-height: ${theme.font.lineHeight.lineHeight35};
    text-align: left;
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.063rem;

  padding: 0 2rem;
  margin-bottom: 2.063rem;
`;

export const Fieldset = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  font-size: ${theme.font.size.font18};
  font-weight: ${theme.font.weight.regular};
`;

export const BoxCheckbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TextError = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  color: ${theme.color.red.red200};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 140px;
  padding: 1rem;

  background: ${theme.color.gray.gray200};
  border: 0.063rem solid ${theme.color.blue.blue100};
  border-radius: 0.5rem;
  
  font-size: ${theme.font.size.font14};

  color: ${theme.color.black.black200};
  
  resize: none;
`;

export const Footer = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.success ? "space-between" : "flex-end")};

  padding: 2rem;

  background: ${theme.color.gray.gray200};
`;

export const TextSuccess = styled.p`
  font-size: ${theme.font.size.font18};
  line-height: ${theme.font.lineHeight.lineHeight21};
  text-align: left;

  color: ${theme.color.green.green100};
`;

export const SubmitButton = styled.button<Props>`
  background: ${(props) => (props.disabled ? theme.color.gray.gray100 : theme.color.blue.blue100)};
  border: 0.125rem solid ${(props) => (props.disabled ? theme.color.gray.gray300 : theme.color.blue.blue100)};
  border-radius: 0.5rem;

  color: ${(props) => (props.disabled ? theme.color.gray.gray300 : theme.color.white.white0)};

  font-size: ${theme.font.size.font18};
  text-transform: uppercase;
  font-weight: ${theme.font.weight.bold};

  padding: 0.5rem 2rem;

  cursor: ${(props) => (props.disabled ? "default" : "pointer")};

  &:hover {
    border: 0.125rem solid ${(props) => (props.disabled ? theme.color.gray.gray300 : theme.color.blue.blue100)};
    background: ${(props) => (props.disabled ? theme.color.gray.gray100 : theme.color.blue.blue200)};
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap:1rem;

  width: 100%;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    width: 350px;
  }
`

export const TextRequests = styled.p`
  font-size: ${theme.font.size.font18};
  font-weight: ${theme.font.weight.regular};
`
export const Thanks = styled.p`
  font-size: ${theme.font.size.font24};
  font-weight: ${theme.font.weight.regular};

  text-align: end;
`