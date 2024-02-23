import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #101522;
  padding: 4rem 0 2rem;
  color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const EmailInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  @media screen and (max-width: 768px) {
    margin-top: 4rem;

    h3,
    h4 {
      text-align: center;
    }
  }
`;

export const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-self: stretch;
    column-gap: 0;
    row-gap: 1rem;
  }
`;

export const EmailInput = styled.input`
  padding: 0 1rem;
  border-radius: 2px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #fff;

  @media screen and (max-width: 768px) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  gap: 2.25rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const ListTitle = styled.h3`
  margin-bottom: 0.5rem;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #fff;
`;
