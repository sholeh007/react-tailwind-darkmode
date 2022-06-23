import { ReactNode } from "react";

interface propTypes {
  children: ReactNode;
}

export default function FormControl({ children }: propTypes) {
  return <div className="w-[80vw] md:w-[50vw]">{children}</div>;
}
