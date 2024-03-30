import styled, { css } from 'styled-components';
import { Trash } from '@phosphor-icons/react';

interface ImageContainerProps {
  error: boolean;
}

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['gray-700']};
  width: 30rem;
  flex-direction: column;
  padding: 1.25rem;
`;

export const DropzoneContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  height: 5rem;
  width: 5rem;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${(props) => props.theme['gray-300']};

  border-radius: 25px;

  margin-bottom: 1rem;

  cursor: pointer;

  transition: border 0.2s, background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme['gray-600']};
    border: 2px solid ${(props) => props.theme['gray-500']};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${props.theme['red-500']};
    `};
`;

export const ImagePreview = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 25px;
`;

export const TrashButton = styled(Trash)`
  position: absolute;
  color: ${(props) => props.theme['red-500']};

  left: 6.5rem;

  cursor: pointer;

  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.7);
  }
`;

export const FormFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  gap: 2rem;
`;
