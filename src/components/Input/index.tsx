import { InputHTMLAttributes } from 'react';
import { InputStyleContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <InputStyleContainer {...props} />;
};

export default Input;
