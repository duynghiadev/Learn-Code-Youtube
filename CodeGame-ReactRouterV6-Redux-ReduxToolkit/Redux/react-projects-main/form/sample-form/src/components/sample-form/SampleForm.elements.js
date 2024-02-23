import styled from "styled-components";
import { Button } from "../../globalStyles";

export const FormTitle = styled.h1`
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormControl = styled.div`
  width: 50%;
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 968px) {
    width: 100%;
  }
`;

export const FormLabel = styled.label`
  font-weight: 700;
`;

export const FormTextInput = styled.input`
  padding: 5px 10px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  background: grey;
  border: 1px solid #f1f1f1;

  &:focus,
  &:hover {
    background-color: white;
    border: 1px solid black;
  }
`;

export const FormError = styled.p`
  color: tomato;
  font-size: 12px;
`;

export const FormFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormFieldControl = styled(FormControl)`
  width: 100%;
`;

export const RemoveFieldButton = styled(Button)`
  align-self: flex-end;
  @media screen and (max-width: 968px) {
    width: 100px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;
