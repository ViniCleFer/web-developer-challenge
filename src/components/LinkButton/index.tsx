import { Container } from './styles';

export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const LinkButton = ({ ...rest }: LinkButtonProps) => {
  return <Container {...rest} />;
};
