/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import Link from "next/link";
import { FC, HTMLAttributes, MouseEvent, useRef } from "react";

export interface ThreeDInteractionCardProps
  extends HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  source: string;
  referenceSiteUrl?: string;

  asExternalLink?: boolean;
}

const ThreeDInteractionCard: FC<ThreeDInteractionCardProps> = ({
  title,
  description,
  source,
  referenceSiteUrl,
  asExternalLink,
  className,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMousemoveOnCard = (event: MouseEvent<HTMLDivElement>) => {
    const [offsetMouseLeft, offsetMouseTop] = [
      event.nativeEvent.offsetX,
      event.nativeEvent.offsetY,
    ];

    if (cardRef.current) {
      let styleMouseX = 0;
      let styleMouseY = 0;

      const aspectRatioChange = 40;
      const cardRect = cardRef.current.getBoundingClientRect();

      const cardMiddleWidth = Math.round(cardRect.width / 2);
      const cardMiddleHeight = Math.round(cardRect.height / 2);

      styleMouseX =
        offsetMouseLeft > cardMiddleWidth
          ? offsetMouseLeft - cardMiddleWidth
          : (cardMiddleWidth - offsetMouseLeft) * -1;

      styleMouseY =
        offsetMouseTop > cardMiddleHeight
          ? (offsetMouseTop - cardMiddleHeight) * -1
          : cardMiddleHeight - offsetMouseTop;

      cardRef.current.style.setProperty(
        "--mouse-x",
        `${styleMouseX / aspectRatioChange}`
      );
      cardRef.current.style.setProperty(
        "--mouse-y",
        `${styleMouseY / aspectRatioChange}`
      );

      cardRef.current.style.setProperty("--mouse-focus-title", `150px`);
      cardRef.current.style.setProperty("--mouse-focus-desc", `100px`);
    }
  };

  const handleMouseoutCard = () => {
    if (cardRef.current) {
      cardRef.current.style.setProperty("--mouse-x", `0`);
      cardRef.current.style.setProperty("--mouse-y", `0`);
      cardRef.current.style.setProperty("--mouse-focus-title", `0px`);
      cardRef.current.style.setProperty("--mouse-focus-desc", `0px`);
    }
  };

  const ReferenceLink = asExternalLink ? "a" : Link;

  return (
    <div
      {...props}
      ref={cardRef}
      className={clsx(
        className,
        "three-d-interaction-card relative cursor-pointer rounded-lg"
      )}
      onMouseMove={handleMousemoveOnCard}
      onMouseOut={handleMouseoutCard}
    >
      <div className="three-d-interaction-card__wrapper">
        <div className="w-full h-[600px] rounded-lg overflow-hidden">
          <img
            src={source}
            alt="Sample thumbnail"
            width={"100%"}
            height={"600px"}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="three-d-interaction-card__shadow absolute top-0 left-0 w-full h-full pointer-events-none select-none rounded-lg"></div>

        <div className="three-d-interaction-card__content absolute bottom-8 left-8 pointer-events-none">
          <h2 className="three-d-interaction-card__title text-xl font-bold leading-normal tracking-widest mb-2 uppercase">
            {title}
          </h2>
          <p className="three-d-interaction-card__desc text-foreground text-base font-light leading-normal tracking-widest">
            {description}
          </p>
        </div>
      </div>

      {referenceSiteUrl && referenceSiteUrl !== "none" && (
        <ReferenceLink
          href={referenceSiteUrl}
          className="absolute top-0 left-0 w-full h-full"
        />
      )}
    </div>
  );
};

export default ThreeDInteractionCard;
