import React from "react";
import styled from "styled-components";
import { CenterContainer } from "./styled/Container.styled";

const PricingContainer = styled.div`
  padding: 4rem 0 2.5rem;
  display: flex;
  justify-content: space-between;
  p {
    margin-top: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.blue};
  padding: 0.5rem;
  width: 150px;
  text-align: center;
  color: white;
  border: none;
  outline: none;
  border-radius: 0.5rem;
  align-self: flex-start;
`;

const FeatureContainer = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 0.5rem;
`;

const Feature = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 33%;
  h3 {
    font-size: 1.25rem;
  }
`;

const FeatureDesc = styled.p`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.blue};
`;

const FeatureList = styled.ul`
  list-style: none;
`;

const FeatureListItem = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid grey;
  color: ${({ theme }) => theme.colors.grey};
`;

const PricingFeature = () => {
  return (
    <CenterContainer>
      <PricingContainer>
        <div>
          <Title>
            Everything you need for <span>$99 a month</span>
          </Title>
          <p>
            Includes every feature we offer plu unlimited projects and unlimited
            users
          </p>
        </div>
        <Button>Get started today</Button>
      </PricingContainer>
      <hr />
      <FeatureContainer>
        <Feature>
          <FeatureDesc>everything you need</FeatureDesc>
          <h3>All-in-one platform</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </Feature>
        {Array.from({ length: 2 }).map((i) => (
          <Feature>
            <FeatureList>
              {Array.from({ length: 5 }).map((j) => (
                <FeatureListItem>
                  lorem ipsum dolor sit amet consectetur
                </FeatureListItem>
              ))}
            </FeatureList>
          </Feature>
        ))}
      </FeatureContainer>
    </CenterContainer>
  );
};

export default PricingFeature;
