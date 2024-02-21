/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Image from "next/image";
import { FC, HTMLAttributes } from "react";
import { useWindowSize } from "react-use";

export interface RotatePersonalProps extends HTMLAttributes<HTMLDivElement> {
  enableLogo?: boolean;
}

const RotatePersonal: FC<RotatePersonalProps> = ({ enableLogo, ...props }) => {
  const point = useWindowSize();

  return (
    <div {...props} className={clsx(props.className)}>
      <div className="w-full h-full relative">
        {!enableLogo ? (
          // <img
          //   width={170}
          //   height={170}
          //   className="rounded-full max-w-[170px] max-h-[170px] object-cover"
          //   src="https://res.cloudinary.com/xskill/image/upload/v1686988257/meee/IMG_1101_2_csddw0.png"
          //   alt="Personal"
          // />
          <Image
            width={170}
            height={170}
            className="rounded-full max-w-[100px] md:max-w-[170px] max-h-[100px] md:max-h-[170px] object-cover"
            src="/avatar-small.jpg"
            alt="Personal"
          />
        ) : (
          <div
            className={clsx(
              "w-[100px] md:w-[170px] h-[100px] md:h-[170px] rounded-full bg-background",
              "flex items-center justify-center text-3xl font-bold"
            )}
          >
            T
          </div>
        )}

        <svg
          viewBox="0 0 100 100"
          width="280"
          height="280"
          className="absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] -top-[40px] md:-top-[56px] -left-[40px] md:-left-[56px] rotate-90"
        >
          <defs>
            <path
              id="circle"
              d="
        M 50, 50
        m -37, 0
        a 37,37 0 1,1 74,0
        a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="11.5" className="text-gray-950 dark:fill-gray-50">
            <textPath xlinkHref="#circle">
              - Le Nguyen Duy Nghia - Front-end Developer
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
};

export default RotatePersonal;
