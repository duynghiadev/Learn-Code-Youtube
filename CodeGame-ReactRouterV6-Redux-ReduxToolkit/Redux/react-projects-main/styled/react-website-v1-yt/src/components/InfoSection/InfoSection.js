import React from "react";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TopLine,
  Heading,
  Description,
  InfoContainer,
  ImageWrapper,
  Image,
} from "./InfoSection.elements";
import { Button, Container } from "../../globalStyles";
import { Link } from "react-router-dom";

const InfoSection = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  topLine,
  heading,
  description,
  buttonLabel,
  primary,
  start,
  src,
  alt,
}) => {
  return (
    <>
      <InfoSec $lightBg={lightBg}>
        <Container>
          <InfoRow $imgStart={imgStart}>
            <InfoColumn>
              <div>
                <TopLine $lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading $lightText={lightText}>{heading}</Heading>
                <Description $lightTextDesc={lightTextDesc}>
                  {description}
                </Description>
                <Link to={"/sign-up"}>
                  <Button $big $fontBig $primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </InfoColumn>

            {/* For Image */}
            <InfoColumn>
              <ImageWrapper $start={start}>
                <Image alt={alt} src={src} />
              </ImageWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
