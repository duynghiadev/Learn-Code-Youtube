import clsx from "clsx";
import React, { FC, HTMLAttributes } from "react";

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

const Divider: FC<DividerProps> = ({ className, ...props }) => {
  return (
    <div
      {...props}
      className={clsx(className, "w-full h-[1px] bg-gray-200 dark:bg-gray-800")}
    ></div>
  );
};

export default Divider;
