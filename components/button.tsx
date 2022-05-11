import { cls } from "../libs/utils";

interface ButtonProps {
  large?: boolean;
  text: string;
  [key: string]: any;
}

export default function Button({
  large = false,
  onClick,
  text,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={cls(
        "w-full font-bold text-sm bg-blue-400 text-white py-2 rounded-md border-transparent shadow-sm focus:outline-none hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-400",
        large ? "py-3 text-base" : "py-2 text-sm"
      )}
      {...rest}
    >
      {text}
    </button>
  );
}
