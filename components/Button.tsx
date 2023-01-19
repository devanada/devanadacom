import { FC, ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const Button: FC<Props> = ({ label, ...props }) => {
  return (
    <button
      className="rounded-lg bg-dark-2/60 p-2 text-white duration-500 hover:bg-dark-2"
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
