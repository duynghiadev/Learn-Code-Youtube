import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { HTMLAttributes } from "react";

const textLegendVariants = cva("text-lg font-semibold uppercase", {
  variants: {},
  defaultVariants: {},
});

export interface TextLegendProps extends HTMLAttributes<HTMLElement> {
  asChild?: boolean;
}

const TextLegend = ({
  children,
  className,
  asChild,
  ...props
}: TextLegendProps) => {
  const Comp = asChild ? Slot : "p";
  return (
    <Comp {...props} className={textLegendVariants({ className })}>
      {children}
    </Comp>
  );
};

export default TextLegend;
