import './Loader.css';

interface LoaderProps {
  color?: string;
}

const Loader = ({ color = '#FFF' }: LoaderProps) => {
  return (
    <div className={`lds-roller text-[${color}]`}>
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
