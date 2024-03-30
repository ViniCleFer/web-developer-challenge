import { styled, css } from 'styled-components';

interface StyledTextareaProps {
  error?: boolean;
}

export const Container = styled.div`
  width: 100%;
  margin-bottom: 15px;
`;

export const StyledTextareaContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  margin-bottom: 15px;
  border-radius: 8px;
`;

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  width: 100%;
  padding: 0.625rem 0.75rem;
  min-height: 80px;
  background-color: ${(props) => props.theme['gray-400']};
  color: ${(props) => props.theme['gray-100']};
  resize: none;
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

export const ErrorMessage = styled.span`
  width: 100%;
  margin-top: 5px;
  color: ${(props) => props.theme['red-500']};
  font-size: 0.75rem;
`;
