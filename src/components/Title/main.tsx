import type React from "react";

type TitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  text: string;
};

export function Title({ text, ...props }: TitleProps): React.ReactNode {
  return <h1 {...props}>{text}</h1>;
}
