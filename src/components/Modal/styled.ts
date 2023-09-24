import { theme } from '@/style/theme'
import styled from 'styled-components'

interface Props {
  isConfirm?: boolean
}

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background: ${theme.color.black.blackOpacity1};

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background: ${theme.color.white.white0};
  padding: 1.5rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.625rem ${theme.color.black.blackOpacity2};
  z-index: 1000;
`

export const BoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`

export const Title = styled.h4`
  font-size: ${theme.font.size.font20};
  font-weight: ${theme.font.weight.semiBold};
  line-height: ${theme.font.lineHeight.lineHeight32};
  letter-spacing: -0.5px;
  text-align: left;
`
export const Divider = styled.div`
  width: 100%;
  border-bottom: 1px solid ${theme.color.gray.gray200};
`
