import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  padding: 60px 0;
  color: #fff;

  ul {
    list-style: none;
    flex: 1;

    li {
      margin-bottom: 1rem;
    }
  }

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      text-decoration: underline;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    ul {
      align-self: flex-start;
    }
  }
`;

export const IconContainer = styled.div`
  padding: 0.25rem 0.5rem;
  border: 1px solid white;
  border-radius: 100%;
  margin-right: 1rem;
`;
