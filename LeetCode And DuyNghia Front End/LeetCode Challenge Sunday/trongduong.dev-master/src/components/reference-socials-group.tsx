import { ArrowUpRight } from "lucide-react";
import { FC } from "react";

export interface ReferenceSocialsGroupProps {}

const ReferenceSocialsGroup: FC<ReferenceSocialsGroupProps> = () => {
  return (
    <div className="flex flex-wrap items-center gap-6">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/duynghiale/"
        className="inline-flex items-center gap-2"
      >
        <ArrowUpRight className="w-4 h-4" />
        Linked In
      </a>
      <a
        target="_blank"
        href="https://twitter.com/nghia_dian"
        className="inline-flex items-center gap-2"
      >
        <ArrowUpRight className="w-4 h-4" />
        Twitter
      </a>
      <a
        target="_blank"
        href="https://github.com/duynghiadev/"
        className="inline-flex items-center gap-2"
      >
        <ArrowUpRight className="w-4 h-4" />
        Github
      </a>
      <a
        target="_blank"
        href="https://codepen.io/DuyNghia123"
        className="inline-flex items-center gap-2"
      >
        <ArrowUpRight className="w-4 h-4" />
        Codepen
      </a>
    </div>
  );
};

export default ReferenceSocialsGroup;
