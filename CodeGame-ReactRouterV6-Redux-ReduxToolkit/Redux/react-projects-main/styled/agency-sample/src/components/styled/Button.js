import styled from "styled-components";

const Button = styled.button`
  padding: 0.8rem;
  color: white;
  border-radius: 0.8rem;
  border: none;
  border: ${(props) =>
    props.bordercolor ? `${props.borderwidth} solid ${props.bordercolor}` : ""};
  background: ${(props) => props.background || "transparent"};
  cursor: pointer;
  font-weight: bold;
  text-transform: ${(props) => props.texttransform || "none"};
  letter-spacing: 2px;
`;

export default Button;
