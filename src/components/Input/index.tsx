import { FieldError } from 'react-hook-form';

import { StyledInput, StyledInputContent, ErrorMessage } from './styles';

export interface InputControlledProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error: FieldError | undefined;
}

export const Input = ({ error, ...rest }: InputControlledProps) => {
  return (
    <StyledInputContent>
      <StyledInput error={!!error} {...rest} />
      {error && <ErrorMessage>{error?.message}</ErrorMessage>}
    </StyledInputContent>
  );
};
