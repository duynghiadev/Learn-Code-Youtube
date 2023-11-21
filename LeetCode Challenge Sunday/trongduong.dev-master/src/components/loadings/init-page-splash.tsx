import clsx from "clsx";
import { FC } from "react";
import RotatePersonal from "../rotate-personal";

export interface InitPageSplashProps {
  active?: boolean;
}

const InitPageSplash: FC<InitPageSplashProps> = ({ active }) => {
  const activeClass = active
    ? "opacity-1"
    : "opacity-0 -z-[999] transition-all duration-300 ease-linear";
  return (
    <div
      className={clsx(
        "text-foreground bg-background fixed top-0 left-0 w-full h-screen pointer-events-none",
        "grid place-items-center",
        "z-[999]",
        activeClass
      )}
    >
      <RotatePersonal className="animate-spin-slow" enableLogo />
    </div>
  );
};

export default InitPageSplash;
