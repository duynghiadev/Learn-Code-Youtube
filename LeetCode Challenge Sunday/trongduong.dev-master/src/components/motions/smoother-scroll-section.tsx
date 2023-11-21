import { Slot } from "@radix-ui/react-slot";
import clsx from "clsx";
import {
  Fragment,
  HTMLAttributes,
  ReactElement,
  cloneElement,
  forwardRef,
} from "react";

export interface SmootherScrollSectionProps
  extends HTMLAttributes<HTMLDivElement> {
  sectionInnerProps?: HTMLAttributes<HTMLDivElement>;

  asChild?: boolean;
  asHorizontalScroll?: boolean;
  asStackedScroll?: boolean;
  enableSectionInner?: boolean;
}

const SmootherScrollSection = forwardRef<
  HTMLDivElement,
  SmootherScrollSectionProps
>(
  (
    {
      children,
      sectionInnerProps,
      asChild,
      asStackedScroll,
      asHorizontalScroll,
      enableSectionInner = true,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "div";
    const CompSectionInner = enableSectionInner ? "div" : Fragment;
    return (
      <Comp
        {...props}
        ref={ref}
        className={clsx(props.className, "smoother-scroll-section", {
          "!max-h-fit": asHorizontalScroll,
        })}
        data-scroll-horizontal={asHorizontalScroll ? "true" : undefined}
        data-scroll-stacked={asStackedScroll ? "true" : undefined}
        data-scroll-section
      >
        <CompSectionInner
          {...(enableSectionInner
            ? {
                className: clsx(
                  sectionInnerProps?.className,
                  "section-inner w-full max-h-fit"
                ),
              }
            : {})}
        >
          {cloneElement(children as ReactElement, {
            "data-scroll-in-section": asHorizontalScroll || asStackedScroll,
            className: clsx(
              (children as ReactElement).props.className,
              "w-full h-full"
            ),
          })}
        </CompSectionInner>
      </Comp>
    );
  }
);

SmootherScrollSection.displayName = "SmootherScrollSection";

export default SmootherScrollSection;
