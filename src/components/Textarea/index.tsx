import { Control, Controller } from 'react-hook-form';

import { ErrorMessage } from '@/components/ErrorMessage';

import { Container, StyledTextarea, StyledTextareaContent } from './styles';

export interface TextareaControlledProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control;
  name: string;
}

export const Textarea = ({
  control,
  name,
  ...rest
}: TextareaControlledProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, onBlur, ref },
          fieldState: { error },
        }) => (
          <StyledTextareaContent>
            <StyledTextarea
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              error={!!error}
              {...rest}
            />
            {error && error.message && <ErrorMessage message={error.message} />}
          </StyledTextareaContent>
        )}
      />
    </Container>
  );
};
