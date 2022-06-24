
import { FocusEventHandler, InputHTMLAttributes, KeyboardEventHandler } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  className?: string;
  label?: string;
  name: string;
  readOnly?: boolean;
  value?: string;
  defaultValue?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  onKeyUp?: KeyboardEventHandler<HTMLInputElement>;
  id?: string;
  isError: boolean;
  errorMessage?: string;

  clear?: boolean;
  type?: string;
  size?: 'block' | any;
  error?: boolean;
  disabled?: boolean;
  autoComplete?: string;
  tooltip?: string;
  transform?: 'capitalize' | 'lowercase' | 'uppercase';
}

export type TitleProps = {
  isInvalid: boolean;
}
