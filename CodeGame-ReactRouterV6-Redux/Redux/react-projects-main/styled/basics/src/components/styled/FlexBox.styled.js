import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexdirection || "row"};
  justify-content: ${(props) => props.justifycontent || "space-between"};
  align-items: ${(props) => props.alignitems || "center"};

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    gap: 20px;
  }
`;
