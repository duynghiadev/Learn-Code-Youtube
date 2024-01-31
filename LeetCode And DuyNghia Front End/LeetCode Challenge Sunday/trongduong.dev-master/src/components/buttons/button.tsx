import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  clsx(
    "inline-flex items-center justify-center",
    "text-sm font-medium h-[50px] min-w-[100px] px-3 py-5"
  ),
  {
    variants: {
      rounded: {
        base: ["rounded-3xl"]
      },
      color: {
        base: ["bg-gray-950 text-gray-50 dark:bg-white dark:text-gray-950"]
      }
    },
    defaultVariants: {
      rounded: "base",
      color: "base"
    }
  }
);

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button: FC<ButtonProps> = ({
                                   asChild,
                                   className,
                                   rounded,
                                   color,
                                   ...props
                                 }) => {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      {...props}
      className={buttonVariants({ className, color, rounded })}
    />
  );
};

export default Button;
