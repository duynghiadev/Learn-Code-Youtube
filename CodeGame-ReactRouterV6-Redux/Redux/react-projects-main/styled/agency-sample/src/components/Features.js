import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const Container = styled.div`
  height: 100%;
  display: flex;
`;

const Left = styled.div`
  width: 50%;
  /* polygon(67% 0, 100% 0%, 100% 100%, 55% 100%); */
  clip-path: polygon(0% 0%, 92% 0%, 80% 100%, 0% 100%);
  background-color: #f495a6;
`;

const Image = styled.img``;

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 3.25rem;
  font-weight: normal;
`;

const Bold = styled.span`
  font-weight: bold;
`;

const Subtitle = styled.p`
  color: #333;
  font-style: italic;
  font-size: 24px;
`;

const Text = styled.p`
  color: #777;
  font-size: 20px;
`;

const Features = () => {
  return (
    <Container>
      <Left>
        {/* <Image src="https://img.freepik.com/free-psd/isolated-right-hand-with-smartphone_125540-1296.jpg?w=2000" /> */}
      </Left>
      <Right>
        <Title>
          <Bold>good</Bold> design <br /> <Bold>good</Bold> business
        </Title>
        <Subtitle>We know that good design means good business</Subtitle>
        <Text>
          We help our clients by creating brand identities, digital experiences
          , and print materials that communicate clearly , achieve marketing
          goals and looks fantastic
        </Text>
        <Text>
          We are your business and gurantee you to achieve marketing goals
        </Text>
        <Button style={{ alignSelf: "flex-start" }} background="darkblue">
          Learn More
        </Button>
      </Right>
    </Container>
  );
};

export default Features;
