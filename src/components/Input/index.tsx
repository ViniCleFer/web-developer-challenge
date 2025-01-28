import { Control, Controller } from 'react-hook-form';

import { ErrorMessage } from '@/components/ErrorMessage';

import { Container, StyledInput, StyledInputContent } from './styles';

export interface InputControlledProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  control: Control;
  name: string;
}

export const Input = ({ control, name, ...rest }: InputControlledProps) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, value, onBlur, ref },
          fieldState: { error },
        }) => (
          <StyledInputContent>
            <StyledInput
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              ref={ref}
              error={!!error}
              {...rest}
            />
            {error && error.message && <ErrorMessage message={error.message} />}
          </StyledInputContent>
        )}
      />
    </Container>
  );
};
