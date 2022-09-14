import { forwardRef, InputHTMLAttributes } from 'react';
import { InputStyleContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return <InputStyleContainer {...props} ref={ref} />;
});
export default Input;
