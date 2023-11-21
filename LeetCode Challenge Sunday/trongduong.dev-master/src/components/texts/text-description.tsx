import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const textDescriptionVariants = cva("text-xl font-normal leading-normal", {
  variants: {},
  defaultVariants: {}
});

export interface TextDescriptionProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const TextDescription = ({
                           children,
                           className,
                           asChild,
                           ...props
                         }: TextDescriptionProps) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp {...props} className={textDescriptionVariants({ className })}>
      {children}
    </Comp>
  );
};

export default TextDescription;
