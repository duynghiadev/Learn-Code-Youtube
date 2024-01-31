import Container from "@/components/container";
import { Slot } from "@radix-ui/react-slot";
import Link from "next/link";

import { Box, Info, Presentation } from "lucide-react";
import { FC, HTMLAttributes } from "react";
import { ToggleTheme } from "./toggle-mode";

export interface HeaderNavItemProps extends HTMLAttributes<HTMLElement> {}

const HeaderNavItem: FC<HeaderNavItemProps> = ({ ...props }) => {
  return (
    <Slot
      {...props}
      className="font-medium dark:text-gray-50 uppercase text-sm"
    />
  );
};

export interface HeaderSectionProps {}

const HeaderSection: FC<HeaderSectionProps> = () => {
  return (
    <Container className="relative flex gap-4">
      <h1 className="font-bold tracking-widest text-2xl whitespace-nowrap">
        <Link href={"/"}>Trong Duong.</Link>
      </h1>
      <div className="ml-auto flex items-center gap-6">
        <HeaderNavItem>
          <Link href="/about-me">
            <span className="hidden md:inline-block">About me</span>
            <Info className="inline-block md:hidden w-5 h-5" />
          </Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <Link href="/projects">
            <span className="hidden md:inline-block">Projects</span>
            <Presentation className="inline-block md:hidden w-5 h-5" />
          </Link>
        </HeaderNavItem>
        <HeaderNavItem>
          <a
            target="_blank"
            href="/Duong%20Duc%20Trong%20-%20Software%20Engineer.pdf"
          >
            <span className="hidden md:inline-block">Resume</span>
            <Box className="inline-block md:hidden w-5 h-5" />
          </a>
        </HeaderNavItem>

        <ToggleTheme />
      </div>
    </Container>
  );
};

export default HeaderSection;
