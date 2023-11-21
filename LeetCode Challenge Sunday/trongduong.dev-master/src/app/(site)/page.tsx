/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import RotatePersonal from "@/components/rotate-personal";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { PAGE_CONTENT_HOME } from "@/enums/page-content";

export default function Home() {
  return (
    <>
      <Smoother.ScrollSection className="py-24 min-h-[calc(100vh-72px)] flex items-center justify-center">
        <Container className="relative">
          <RotatePersonal className="ml-8 md:ml-0 mb-16 md:mb-0 md:absolute bottom-12 right-8" />
          
          <TextLegend className="mb-12">HEY THERE!</TextLegend>

          <TextMain className="mb-10">
            I am a Front-end Developer <br />
            with a passion for <br />
            open source.
          </TextMain>
          <TextDescription className="mb-16">
            I develope websites that gets you real results.
          </TextDescription>
                    
          <Button rounded="base" color="base" className="min-w-[170px]" asChild>
            <a href="mailto:duongductrong06@gmail.com">Let me help you</a>
          </Button>

        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 min-h-[50vh] flex items-center justify-center">
        <Container className="relative">
          <TextLegend className="mb-12">MY EXPERTISE</TextLegend>
          <h2 className="text-4xl mb-12 font-normal leading-normal	">
            With three years of experience, <br /> I specialize in building
            comprehensive online solutions <br /> for the many domains.
          </h2>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection asHorizontalScroll>
        <div className="flex gap-12 px-8">
          {PAGE_CONTENT_HOME.CODEPENS.map((codepen) => (
            <a
              key={codepen.href}
              href={codepen.href}
              target="_blank"
              className="block flex-1 min-w-[500px] h-[500px]"
            >
              <img
                width="100%"
                height="100%"
                src={codepen.src}
                alt="Codepen thumbnail"
                className="w-full h-full object-contain"
              />
            </a>
          ))}
        </div>
      </Smoother.ScrollSection>
    </>
  );
}
