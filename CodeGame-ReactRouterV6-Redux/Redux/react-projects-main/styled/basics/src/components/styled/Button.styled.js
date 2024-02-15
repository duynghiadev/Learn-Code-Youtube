import styled from "styled-components";

export const Button = styled.button`
  padding: 1rem 4rem;
  border-radius: 2.5rem;
  background-color: ${(props) => props.bg || "white"};
  color: ${(props) => props.color || "black"};
  border: none;
  font-weight: 700;
  font-size: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`;
