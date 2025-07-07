import './Loader.css';

interface LoaderProps {
  color?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Loader = ({ color = '#FFF', size = 'md' }: LoaderProps) => {
  return (
    <div
      className={`lds-roller lds-roller--${size}`}
      style={{ color } as React.CSSProperties}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
