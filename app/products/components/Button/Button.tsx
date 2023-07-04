interface Props {
  action: string;
}

const Button = ({ action }: Props) => {
  return (
    <button className="rounded-full bg-red-600 text-white h-8 w-8">
      {action}
    </button>
  );
};

export default Button;
