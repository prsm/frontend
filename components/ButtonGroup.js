import Button from './Button';

export default function ButtonGroup({ buttons }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
      {buttons.map((button, index) => (
        <Button {...button} key={index} />
      ))}
    </div>
  );
}
