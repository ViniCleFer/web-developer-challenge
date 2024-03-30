import { styled } from 'styled-components';

export const Container = styled.button`
  text-decoration: underline;
  border: none;
  background: transparent;
  font-size: 0.875rem;

  cursor: pointer;

  color: ${(props) => props.theme['gray-300']};

  transition: color 0.2s;

  &:hover {
    color: ${(props) => props.theme['gray-100']};

    cursor: pointer;
  }
`;
