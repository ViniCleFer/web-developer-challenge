import { FieldError } from 'react-hook-form';

import { StyledTextarea, StyledTextareaContent, ErrorMessage } from './styles';

export interface TextareaControlledProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error: FieldError | undefined;
}

export const Textarea = ({ error, ...rest }: TextareaControlledProps) => {
  return (
    <StyledTextareaContent>
      <StyledTextarea error={!!error} {...rest} />
      {error && <ErrorMessage>{error.message}</ErrorMessage>}
    </StyledTextareaContent>
  );
};
