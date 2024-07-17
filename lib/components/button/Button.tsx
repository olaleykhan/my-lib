import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Button: FC<Props> = ({ children }) => {
  return (
    <button className=" bg-slate-400 px-6 py-1.5 rounded-md hover:bg-slate-500">
      log {children}
    </button>
  );
};

export default Button;
