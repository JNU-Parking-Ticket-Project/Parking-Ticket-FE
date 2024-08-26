import { type PropsWithChildren } from 'react';
import './LoginLoadText.css';

interface LoginLoadTextProps extends PropsWithChildren {}
const LoginLoadText = ({ children }: LoginLoadTextProps) => {
  return <div className="font-bold loading-animation">{children}</div>;
};

export default LoginLoadText;
