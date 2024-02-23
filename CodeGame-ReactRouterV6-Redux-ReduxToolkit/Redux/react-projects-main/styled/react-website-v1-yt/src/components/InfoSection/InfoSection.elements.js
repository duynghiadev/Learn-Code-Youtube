import styled from "styled-components";

export const InfoSec = styled.div`
  background: ${({ $lightBg }) => ($lightBg ? "#fff" : "#101522")};
  color: #fff;
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: ${({ $imgStart }) => ($imgStart ? "row-reverse" : "row")};
  align-items: center;
  padding: 5rem 0;

  @media screen and (max-width: 968px) {
    align-items: flex-start;
    flex-direction: ${({ $imgStart }) =>
      $imgStart ? "column-reverse" : "column"};
    gap: 5rem;
  }
`;

export const InfoColumn = styled.div`
  flex: 1;
  flex-basis: 50%;
  max-width: 50%;

  @media (max-width: 968px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
  }
`;

export const TopLine = styled.p`
  color: ${({ $lightTopLine }) => ($lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ $lightText }) => ($lightText ? "#f7f8fa" : "#1c2237")};
`;

export const Description = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ $lightTextDesc }) => ($lightTextDesc ? "#a9b3c1" : "#1c2237")};

  @media (max-width: 968px) {
    max-width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ $start }) => ($start ? "flex-start" : "flex-end")};
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 500px;
`;
