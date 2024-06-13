import styled from "styled-components";

export const Card = styled.div`
  padding: 4rem;
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};
  justify-content: space-between;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 2.5rem 0;
  column-gap: 1.5rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    column-gap: 0;
    padding: 2rem;
  }

  img {
    width: 80%;
  }
`;
