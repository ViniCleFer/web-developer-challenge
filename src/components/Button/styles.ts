import { css, styled } from 'styled-components';

import { ButtonProps } from '.';

export const Container = styled.button<ButtonProps>`
  background-color: ${(props) => props.theme['gray-300']};
  border-radius: 8px;
  border: none;

  width: 6rem;
  height: 2.75rem;

  color: ${(props) => props.theme['gray-100']};
  font-size: 0.875rem;

  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-400']};

    cursor: pointer;
  }

  ${(props) =>
    props.isValid &&
    css`
      border-color: ${props.theme['green-500']};
    `};
`;
