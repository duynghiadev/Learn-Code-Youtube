import React from "react";
import styled from "styled-components";
import { FaFacebook } from "react-icons/fa6";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoGithub } from "react-icons/bi";

const Container = styled.div`
  width: 80%;
`;

const Form = styled.form`
  padding: 1rem 2rem;
  background: white;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  p {
    color: #555;
  }
`;

const Icons = styled.div`
  margin-top: 0.8rem;
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  padding: 0.5rem 3rem;
  border: 1px solid #777;
  border-radius: 0.5rem;
`;

const OptionText = styled.p`
  text-align: center;
  margin-top: 1rem;
`;

const Input = styled.input`
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-top: 1rem;
  outline: none;
  border: none;
  border: 1px solid black;
  width: 100%;
`;

const Button = styled.button`
  width: 100%;
  padding: 0.5rem;
  background: ${({ theme }) => theme.colors.blue};
  color: white;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  text-align: center;
  margin-top: 1rem;
  cursor: pointer;

  transition: all 0.5s ease;

  &:hover {
    background: darkblue;
  }
`;

const Policy = styled.div`
  border-top: 1px solid #a1a1a1;
  padding: 1rem 2rem;
  background: #e1e1e1;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  p {
    color: #555;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.blue};
  }
`;

const Signup = () => {
  return (
    <Container>
      <Form>
        <p>Sign in with</p>
        <Icons>
          <Icon>
            <FaFacebook />
          </Icon>
          <Icon>
            <AiOutlineTwitter />
          </Icon>
          <Icon>
            <BiLogoGithub />
          </Icon>
        </Icons>
        <OptionText>Or</OptionText>
        <Input placeholder="Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Button type="submit">Create your account</Button>
      </Form>
      <Policy>
        <p>
          By signing up you agree to our <a href="/">Terms</a>,{" "}
          <a href="/">Data Policy</a> and <a href="/">Cookies Policy</a>
        </p>
      </Policy>
    </Container>
  );
};

export default Signup;
