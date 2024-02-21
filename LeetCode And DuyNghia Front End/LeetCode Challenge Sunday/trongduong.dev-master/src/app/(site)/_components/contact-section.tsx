import Button from "@/components/buttons/button";
import ReferenceSocialsGroup from "@/components/reference-socials-group";
import TextDescription from "@/components/texts/text-description";
import TextMain from "@/components/texts/text-main";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { FC } from "react";

export interface ContactSectionProps {}

const ContactSection: FC<ContactSectionProps> = (props) => {
  return (
    <div className="w-full">
      <p className="mb-8 text-lg font-semibold uppercase">Contact</p>
      <TextMain className="mb-4 !font-normal !leading-tight">
        Let’s Make Something Great Together.
      </TextMain>

      <TextMain className="mb-4 font-normal !leading-tight">
        Start a conversation.
      </TextMain>

      <TextDescription className="text-gray-800 dark:text-gray-200 mb-12">
        Get in touch if you want to discuss your project, <br />
        learn more about my methodologies, or just to say hello!
      </TextDescription>

      <Button
        rounded="base"
        color="base"
        className="min-w-[170px] mb-8"
        asChild
      >
        <a target="_blank" href="mailto:duynghia22302@gmail.com">
          Get in touch <ArrowRight className="w-4 h-4 ml-2" />
        </a>
      </Button>

      <ReferenceSocialsGroup />
    </div>
  );
};

export default ContactSection;
