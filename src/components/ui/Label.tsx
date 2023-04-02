import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

export default function Label({ children, ...props }: ILabelProps) {
  return (
    <div className="mb-1">
      <label {...props}>{children}</label>
    </div>
  );
}
