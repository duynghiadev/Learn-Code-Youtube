import { FC, HTMLAttributes } from "react";

export interface FooterSectionProps extends HTMLAttributes<HTMLDivElement> {}

const FooterSection: FC<FooterSectionProps> = ({ className }) => {
  return (
    <div className="text-center text-gray-900 dark:text-gray-100">
      Copyright © 2024 Duy Nghia Dev.
    </div>
  );
};

export default FooterSection;
