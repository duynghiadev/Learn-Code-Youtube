import React from "react";
import {
  FooterContainer,
  EmailInfo,
  EmailForm,
  EmailInput,
  LinkContainer,
  List,
  ListTitle,
  FooterLink,
} from "./Footer.elements";
import { Button } from "../../globalStyles";
import { FooterLinks } from "../../data";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <EmailInfo>
          <h3>
            Join our exclusive memebership to receive the latest news and trends
          </h3>
          <h4>You can unsubscribe at any time</h4>
          <EmailForm>
            <EmailInput type="email" placeholder="Your Email" />
            <Button $fontBig>Subscribe</Button>
          </EmailForm>
        </EmailInfo>
        <LinkContainer>
          {FooterLinks.map((data) => (
            <List key={data.id}>
              <ListTitle>{data.title}</ListTitle>
              {data.links.map((link) => (
                <FooterLink key={link.title} href="/">
                  {link.title}
                </FooterLink>
              ))}
            </List>
          ))}
        </LinkContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
