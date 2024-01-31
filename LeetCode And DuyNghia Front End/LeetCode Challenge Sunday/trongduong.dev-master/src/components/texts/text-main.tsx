import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const textMainVariants = cva("text-[3.5rem] font-bold leading-normal	", {
  variants: {},
  defaultVariants: {},
});

export interface TextMainProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const TextMain = ({
  children,
  className,
  asChild,
  ...props
}: TextMainProps) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp {...props} className={textMainVariants({ className })}>
      {children}
    </Comp>
  );
};

export default TextMain;
