"use client";

import clsx from "clsx";
import throttle from "lodash/throttle";
import { ArrowRight } from "lucide-react";
import { FC, MouseEvent } from "react";
import { useEvent } from "react-use";

export interface PursuerProps {
}

const Pursuer: FC<PursuerProps> = () => {

  useEvent(
    "mousemove",
    throttle((event: MouseEvent<HTMLElement>) => {
      const el = event.target as HTMLElement;

      const elNodeName = el.nodeName;

      const primitiveNodes = { BUTTON: true, A: true };
      const isMatchedPrimitiveNode =
        primitiveNodes?.[elNodeName as keyof typeof primitiveNodes];

      const [pursuerX, pursuerY] = [event.clientX, event.clientY];
      const circleRadius = 32 / 2;

      document.documentElement.style.setProperty(
        "--pursuer-x",
        `${pursuerX - circleRadius}px`
      );
      document.documentElement.style.setProperty(
        "--pursuer-y",
        `${pursuerY - circleRadius}px`
      );

      document.documentElement.style.setProperty(
        "--pursuer-scale",
        isMatchedPrimitiveNode ? "10" : "1"
      );
    }, 1)
  );

  return (
    <div
      className={clsx(
        "w-8 h-8 rounded-full border border-gray-50/20 z-10 absolute top-0 left-0 transition-transform duration-300 ease-out pointer-events-none",
        "hidden md:flex items-center justify-center"
      )}
      style={{
        mixBlendMode: "difference",
        transform:
          "translateX(var(--pursuer-x)) translateY(var(--pursuer-y)) translateZ(0)",
      }}
    >
      <div
        className="relative w-2 h-2 rounded-full bg-white dark:bg-white transition duration-300 ease-out"
        style={{
          transform: "scale(var(--pursuer-scale))",
          transformOrigin: "center center",
        }}
      >
        <span className="text-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black">
          <ArrowRight className="w-[4px] h-[4px]" />
        </span>
      </div>
    </div>
  );
};

export default Pursuer;
