import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes } from "react";

export const containerVariants = cva("w-full px-6", {
  variants: {
    variant: {
      base: "max-w-[1140px] mx-auto"
    }
  },
  defaultVariants: {
    variant: "base"
  }
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
}

const Container: FC<ContainerProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={containerVariants({ className })}>
      {props.children}
    </div>
  );
};

export default Container;
