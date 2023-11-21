/* eslint-disable @next/next/no-img-element */
"use client";

import Button from "@/components/buttons/button";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { PAGE_CONTENT_PROJECTS } from "@/enums/page-content";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export interface DetailedProjectProps {
  params: {
    slug: string;
  };
}

const DetailedProject = ({ params }: DetailedProjectProps) => {
  const detailedProject = PAGE_CONTENT_PROJECTS.PROJECTS.find(
    (project) => project.slug === params.slug
  );

  return (
    <>
      <Smoother.ScrollSection className="h-[75vh] flex items-center transform translate-y-[72px] bg-gray-100 dark:bg-[#0045fa]">
        <Container className="grid grid-cols-2 place-items-center gap-4 min-h-[500px]">
          <div className="w-full">
            <TextMain className="mb-4">
              {detailedProject?.detailedName}
            </TextMain>
            <TextDescription className="mb-8">
              {detailedProject?.description}
            </TextDescription>

            <Button className="min-w-[170px]" asChild>
              <a href={detailedProject?.referenceSiteUrl} target="_blank">
                Visit site <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
          <div
            className="w-full"
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
          >
            <img
              className="rounded-lg"
              style={{ transform: `rotateY(-20deg) rotateX(20deg)` }}
              width={"100%"}
              height={500}
              src={detailedProject?.image}
              alt="Sample thumbnail"
            />
          </div>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24 min-h-[50vh]">
        <Container>
          <TextLegend className="mb-12">The result</TextLegend>
          <TextMain className="mb-20">{detailedProject?.theResult}</TextMain>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold uppercase mb-4">Services</h3>
              <p className="font-light text-base">
                {detailedProject?.metadata?.services.join(", ")}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold uppercase mb-4">Location</h3>
              <p className="font-light text-base">
                {detailedProject?.metadata?.location}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold uppercase mb-4">Website</h3>
              {detailedProject?.metadata?.website ? (
                <a
                  href={detailedProject?.metadata?.website}
                  target="_blank"
                  className="font-light text-base inline-flex items-center"
                >
                  {detailedProject?.metadata?.website.replace("https://", "")}
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              ) : null}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {detailedProject?.metadata.thumbnails?.map((thumbnail) => (
              <img
                key={thumbnail}
                src={thumbnail}
                width={800}
                alt="Sample"
                className="w-full rounded-lg"
              />
            ))}
          </div>
        </Container>
      </Smoother.ScrollSection>
    </>
  );
};

export default DetailedProject;
