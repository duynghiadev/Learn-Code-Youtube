import React from "react";
import styled from "styled-components";
import { Container } from "../globalStyles";
import { pricingData } from "../data";
import { PricingCard } from "../components";

const PricingInfo = styled.div`
  background: blue;
  padding: 1rem;
`;

const PricingTitle = styled.h1`
  color: white;
  text-align: center;
`;

const PricingCards = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  column-gap: 1rem;

  @media screen and (max-width: 968px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 2rem;
  }
`;

const Services = () => {
  return (
    <>
      <>
        <PricingInfo>
          <Container>
            <PricingTitle>Our Services</PricingTitle>
            <PricingCards>
              {pricingData.map((data) => (
                <PricingCard {...data}></PricingCard>
              ))}
            </PricingCards>
          </Container>
        </PricingInfo>
      </>
    </>
  );
};

export default Services;
