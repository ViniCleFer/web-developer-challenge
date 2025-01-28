import { css, styled } from 'styled-components';

interface StyledInputProps {
  error?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const StyledInputContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const StyledInput = styled.input<StyledInputProps>`
  width: 100%;
  padding: 0.625rem 0.75rem;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['gray-400']};
  font-size: 0.875rem;

  border: 1px solid ${(props) => props.theme['gray-400']};

  border-radius: 8px;

  &:focus {
    border-color: ${(props) => props.theme['gray-100']};
  }

  &::placeholder {
    color: ${(props) => props.theme['gray-200']};
    font-size: 0.875rem;
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${props.theme['red-500']};
    `};
`;
