"use client";

import useDevice from "@/hooks/use-device";
import { Slot } from "@radix-ui/react-slot";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { debounce } from "lodash";
import { usePathname } from "next/navigation";
import {
  FC,
  ForwardRefExoticComponent,
  HTMLAttributes,
  useCallback,
  useLayoutEffect,
  useRef,
  useState
} from "react";
import { useDebounce } from "react-use";
import InitPageSplash from "../loadings/init-page-splash";
import { DEFINE_LOCOMOTIVE_LERP } from "./constant";
import SmootherScrollSection, {
  SmootherScrollSectionProps
} from "./smoother-scroll-section";

gsap.registerPlugin(ScrollTrigger);

export interface SmootherProps
  extends Pick<HTMLAttributes<HTMLDivElement>, "children"> {
  asChild?: boolean;
  options?: LocomotiveScroll.InstanceOptions;
}

export interface SmootherRootProps extends FC<SmootherProps> {
  ScrollSection: ForwardRefExoticComponent<SmootherScrollSectionProps>;
}

const Smoother: SmootherRootProps = ({
                                       asChild,
                                       options,
                                       children
                                     }) => {
  const pathname = usePathname();
  const { device } = useDevice();

  const containerRef = useRef<HTMLDivElement>(null);

  const Comp = asChild ? Slot : "div";

  const [isReadyForScroll, setIsReadyForScroll] = useState(false);

  const handleLocomotiveScroll = useCallback(
    ($el: HTMLElement) => {
      if ($el) {
        const lerp = DEFINE_LOCOMOTIVE_LERP[device];

        return new LocomotiveScroll({
          lerp,
          smooth: true,
          ...options,
          smartphone: {
            smooth: true
          },
          tablet: {
            breakpoint: 768.5,
            smooth: true
          },
          resetNativeScroll: true,
          el: $el
        });
      }

      return null;
    },
    [JSON.stringify(options), device]
  );

  const handleWaitingLocoScrollIsReady = (_locoScroll: LocomotiveScroll) => {
    _locoScroll.on(
      "scroll",
      debounce(() => {
        setIsReadyForScroll(true);
      }, 200)
    );
  };

  useLayoutEffect(() => {
    if (containerRef.current) {
      setIsReadyForScroll(false);

      const containerEl = containerRef.current;

      // Handle create instance locomotive scrolling
      const locoScroll = handleLocomotiveScroll(containerEl);

      if (locoScroll) {
        handleWaitingLocoScrollIsReady(locoScroll);

        // Trigger gsap scroll trigger updating by scroll event of loco scroll
        locoScroll.on("scroll", ScrollTrigger.update);

        // Add proxy for container element
        const scrollPinType = containerEl.style.transform
          ? "transform"
          : "fixed";
        ScrollTrigger.scrollerProxy(containerEl, {
          scrollTop(value) {
            return arguments.length
              ? (locoScroll as any).scrollTo(value, 0, 0)
              : (locoScroll as any).scroll?.instance.scroll.y;
          },

          getBoundingClientRect() {
            return {
              top: 0,
              left: 0,
              width: window.innerWidth,
              height: window.innerHeight
            };
          },

          pinType: scrollPinType
        });

        const sections = document.querySelectorAll(".smoother-scroll-section");

        sections.forEach((section) => {
          const inner = section.querySelector(".section-inner");

          if (section.hasAttribute("data-scroll-horizontal")) {
            const scrollInSectionEl = section.querySelector(
              "[data-scroll-in-section]"
            );

            ScrollTrigger.create({
              scroller: containerEl,
              trigger: section,
              start: "center center",
              end: () => `+=${section.scrollWidth + window.innerHeight}`, // added an extra window.innerHeight to the end here in comparison to the tween
              pin: inner,
              pinSpacing: true,
              anticipatePin: 1,
              pinType: "transform"
            });

            gsap.to(scrollInSectionEl, {
              x: () => {
                return `${-(
                  section.scrollWidth - document.documentElement.clientWidth
                )}px`;
              },
              ease: "none",
              scrollTrigger: {
                trigger: scrollInSectionEl,
                scroller: containerEl,
                start: "center center",
                end: () => `+=${section.scrollWidth + 800}`,
                scrub: true
              }
            });
          }

          if (section.hasAttribute("data-scroll-stacked")) {
            // Do not working on here
          }

          // Each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
          ScrollTrigger.addEventListener("refresh", () => {
            locoScroll.update();
          });

          // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
          ScrollTrigger.refresh();
        });
      }
      return () => {
        locoScroll?.destroy();
      };
    }
  }, [pathname, containerRef, handleLocomotiveScroll]);

  useDebounce(
    () => {
      ScrollTrigger.refresh();
    },
    300,
    [pathname, device]
  );

  return (
    <>
      <Comp
        ref={containerRef}
        data-scroll-container
        style={{ perspective: "1px" }}
      >
        {children}
      </Comp>
      <InitPageSplash active={!isReadyForScroll} />
    </>
  );
};

Smoother.ScrollSection = SmootherScrollSection;

export default Smoother;
