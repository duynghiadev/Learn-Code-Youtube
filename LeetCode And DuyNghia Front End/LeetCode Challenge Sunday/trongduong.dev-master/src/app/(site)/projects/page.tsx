/* eslint-disable react/no-unescaped-entities */
"use client";

import ThreeDInteractionCard from "@/components/cards/threed-interaction-card";
import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import TextDescription from "@/components/texts/text-description";
import TextLegend from "@/components/texts/text-legend";
import TextMain from "@/components/texts/text-main";
import { PAGE_CONTENT_PROJECTS } from "@/enums/page-content";

export interface ProjectListProps {}

const ProjectList = (props: ProjectListProps) => {
  return (
    <>
      <Smoother.ScrollSection className="w-full min-h-[calc(50vh-72px)] flex items-center justify-center">
        <Container>
          <TextLegend className="mb-12">Portfolio</TextLegend>
          <TextMain className="mb-10">My recent works</TextMain>
          <TextDescription>
            Recently, I have built an e-commerce website where users can log in,
            register, view products, filter as desired, make purchases, and
            manage orders.
          </TextDescription>
        </Container>
      </Smoother.ScrollSection>

      <Smoother.ScrollSection className="py-24">
        <Container className="flex flex-col gap-32">
          {PAGE_CONTENT_PROJECTS.PROJECTS.map((project) => (
            <ThreeDInteractionCard
              key={project.id}
              title={project.title}
              description={project.description}
              source={project.image}
              referenceSiteUrl={`/projects/${project.slug}`}
            />
          ))}
        </Container>
      </Smoother.ScrollSection>
    </>
  );
};

export default ProjectList;
