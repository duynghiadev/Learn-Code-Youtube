import Pursuer from "@/components/pursuer";
import dynamic from "next/dynamic";
import { FC, HTMLAttributes, ReactNode } from "react";

const Smoother = dynamic(() => import("@/components/motions/smoother"), {
  ssr: false,
});

export interface SiteLayoutProps extends Pick<HTMLAttributes<any>, "children"> {
  header?: ReactNode;
  footer?: ReactNode;
}

const SiteLayout: FC<SiteLayoutProps> = ({ children, footer, header }) => {
  return (
    <>
      <Smoother>
        {header}
        {children}
        {footer}
      </Smoother>
      <Pursuer />
    </>
  );
};

export default SiteLayout;
