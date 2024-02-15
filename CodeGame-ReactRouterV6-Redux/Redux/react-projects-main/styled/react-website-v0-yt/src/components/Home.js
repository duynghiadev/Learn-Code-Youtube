import React from "react";
import styled from "styled-components";
import { BsFillDatabaseFill } from "react-icons/bs";
import { FaStarOfLife, FaAccusoft } from "react-icons/fa";
import Signup from "./Signup";

const HomeContainer = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  height: calc(100vh - 50px);
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const Left = styled.div`
  width: 50%;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;

  span {
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.grey};
  margin-top: 1rem;
`;

const BoldText = styled.p`
  margin-top: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.grey};
`;

const UsersContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ theme }) => theme.colors.grey};

  p {
    font-style: italic;
  }
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Left>
        <Title>
          Data to enrich your <br />
          <span>online business</span>
        </Title>
        <Text>
          We help our clients by creating brand identities, digital experiences
          , and print materials that communicate clearly , achieve marketing
          goals and looks fantastic
        </Text>
        <BoldText>used by</BoldText>
        <UsersContainer>
          <User>
            <BsFillDatabaseFill />
            <p>Staxx</p>
          </User>
          <User>
            <FaStarOfLife />
            <p>Star AI</p>
          </User>
          <User>
            <FaAccusoft />
            <p>Accusoft</p>
          </User>
        </UsersContainer>
      </Left>
      <Right>
        <Signup />
      </Right>
    </HomeContainer>
  );
};

export default Home;
