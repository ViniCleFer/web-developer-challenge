import { Container } from './styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isValid: boolean;
}

export const Button = ({ isValid, ...rest }: ButtonProps) => {
  return <Container isValid={isValid} {...rest} />;
};
