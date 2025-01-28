import { Content } from './styles';

export interface SpanControlledProps {
  message: string;
}

export const ErrorMessage = ({ message }: SpanControlledProps) => {
  return <Content>{message}</Content>;
};
