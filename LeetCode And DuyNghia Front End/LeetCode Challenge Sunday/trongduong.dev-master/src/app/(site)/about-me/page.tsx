/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import ReferenceSocialsGroup from "@/components/reference-socials-group";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { PAGE_CONTENT_ABOUT_ME } from "@/enums/page-content";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export interface AboutMeProps {}

const AboutMe = (props: AboutMeProps) => {
  return (
    <>
      <Smoother.ScrollSection className="w-full py-24 min-h-[calc(80vh-72px)] flex items-center justify-center">
        <Container>
          <TextLegend className="mb-12">About me</TextLegend>
          <TextMain className="mb-10">
            Hello, I'm Le Nguyen Duy Nghia <br /> a Front-End Developer
          </TextMain>
          <TextDescription>
            With 2 years of studying and exploring React technology, I have
            completed several personal projects,
            <br /> and I hope in the future I can create large-scale products
            using React to contribute to the company.
          </TextDescription>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection
        className="min-h-[90vh] flex items-center justify-center"
        sectionInnerProps={{ className: "h-full" }}
      >
        <Container className="flex flex-col md:flex-row gap-24">
          <div className="flex-1 overflow-hidden">
            <Image
              src="/avatar-full.jpg"
              alt="Avatar"
              width={500}
              height={500}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h2 className="font-medium leading-normal	-tracking-tighter text-4xl mb-8 uppercase">
              MORE ABOUT ME
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
              I always enjoy taking on new challenges and pushing myself to the
              limit. My goal is always to provide elegant & fast solutions to
              clients.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-8">
              I have garnered trust and recognition for my potential as an
              individual while actively engaging in self-learning endeavors.
              Despite being a student, I have not had the opportunity to work
              for any company yet.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-16">
              Currently, I am a fourth-year student with experience working on
              course projects in previous semesters. My goal is to continue
              developing my skills and professional knowledge!.
            </p>
            <p className="text-lg text-gray-800 dark:text-gray-200 mb-16">
              I also enjoy doing projects and developing products for personal
              growth
            </p>
            <Button className="min-w-[170px] mb-16">
              Get in touch. <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <ReferenceSocialsGroup />
          </div>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 flex items-center">
        <Container>
          <TextLegend>My journey</TextLegend>
          <TextMain className="mb-12">Work Experience</TextMain>

          {PAGE_CONTENT_ABOUT_ME.WORKS_EXPERIENCE.map((content) => (
            <div
              key={content.id}
              className="flex flex-col md:flex-row items-start justify-start mb-20 gap-4"
            >
              <div className="flex items-center w-full max-w-[400px]">
                <p className="w-full text-2xl font-light text-gray-500 dark:text-gray-400">
                  {content.date}
                </p>
                {/* <div className="w-full h-[1px] border-t border-solid border-gray-50"></div> */}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-foreground mb-2">
                  {content.name}
                </h2>
                <p className="text-base font-normal text-gray-400 dark:text-gray-500 mb-4">
                  {content.position}
                </p>
                <p
                  className="text-md font-normal text-gray-600 dark:text-gray-400"
                  dangerouslySetInnerHTML={{ __html: content.description }}
                ></p>
              </div>
            </div>
          ))}
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 flex items-center">
        <Container>
          <TextLegend>Skill</TextLegend>
          <TextMain className="mb-12">
            I contribute to company goals through technical skills in product
            development and outsourcing
          </TextMain>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
            <p className="text-lg font-medium mb-2">React.js</p>
            <p className="text-lg font-medium mb-2">Next.js</p>
            {/* <p className="text-lg font-medium mb-2">Remix.run</p> */}
            <p className="text-lg font-medium mb-2">Tailwind.CSS</p>
            <p className="text-lg font-medium mb-2">SASS</p>
            <p className="text-lg font-medium mb-2">GSAP</p>
            <p className="text-lg font-medium mb-2">Typescript</p>
            {/* <p className="text-lg font-medium mb-2">Vue.js</p> */}
            <p className="text-lg font-medium mb-2">Laravel</p>
            <p className="text-lg font-medium mb-2">Problem Solving</p>
          </div>
        </Container>
      </Smoother.ScrollSection>
    </>
  );
};

export default AboutMe;
