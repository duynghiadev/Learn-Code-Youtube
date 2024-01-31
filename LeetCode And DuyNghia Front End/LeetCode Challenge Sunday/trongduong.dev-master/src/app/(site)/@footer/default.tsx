"use client";

import Container from "@/components/container";
import Smoother from "@/components/motions/smoother";
import ContactSection from "../_components/contact-section";
import FooterSection from "../_components/footer-section";

const DetailedFooterLayout = () => {
  return (
    <>
      <Smoother.ScrollSection className="py-32">
        <Container>
          <ContactSection />
        </Container>
      </Smoother.ScrollSection>
      <Smoother.ScrollSection className="py-12 border-t border-gray-300 dark:border-gray-800 flex items-center justify-center">
        <FooterSection />
      </Smoother.ScrollSection>
    </>
  );
};

export default DetailedFooterLayout;
