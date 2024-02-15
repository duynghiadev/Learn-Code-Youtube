import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ShipThruControl = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #fff;
`;

export const ShipThruControlLabel = styled.label`
  font-weight: 700;
`;

export const ShipThruInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ShipThruInput = styled.input`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #fff;
  width: 80%;

  &:focus {
    border: 1px solid #000;
  }
`;

export const RemoveButton = styled.button`
  color: #fff;
  font-size: 1.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  background: none;
`;
