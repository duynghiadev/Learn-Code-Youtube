import React from "react";
import styled from "styled-components";
import Button from "./styled/Button";

const Container = styled.div`
  height: calc(100vh - 50px);
  padding: 1.25rem;
  display: flex;
`;

const Left = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const IntroTitle = styled.h1`
  font-size: 3.25rem;
  width: 60%;
`;

const IntroText = styled.p`
  width: 60%;
  font-size: 1.25rem;
`;

const CtaContainer = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const PhoneNumber = styled.p`
  color: crimson;
  font-weight: bold;
`;

const ContactText = styled.p`
  color: grey;
  margin-top: 5px;
`;

const Right = styled.div`
  width: 40%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Intro = () => {
  return (
    <Container>
      <Left>
        <IntroTitle>Adventures in creative age</IntroTitle>
        <IntroText>
          We believe that designing products and services in close partenership
          with our clients is the only way to have a real impact ontheir
          business
        </IntroText>
        <CtaContainer>
          <Button texttransform="uppercase" background="darkblue">
            start a project
          </Button>
          <Contact>
            <PhoneNumber>Call us (012)345-6789</PhoneNumber>
            <ContactText>For any question or concern</ContactText>
          </Contact>
        </CtaContainer>
      </Left>
      <Right>
        {/* <Image
          src="https://images.pexels.com/photos/3756682/pexels-photo-3756682.jpeg?auto=compress&cs=tinysrgb&dpr=2"
          alt="girl playing game"
        /> */}
      </Right>
    </Container>
  );
};

export default Intro;
