import React from "react";
import {
  ClubName,
  Feature,
  MonthlyPriceContainer,
  Price,
  PricingCardContainer,
} from "./PricingCard.elements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

const PricingCard = ({
  icon,
  clubName,
  price,
  users,
  budget,
  support,
  ctaTitle,
}) => {
  return (
    <>
      <PricingCardContainer>
        <IconContext.Provider value={{ color: "grey", size: "4rem" }}>
          {icon}

          <MonthlyPriceContainer>
            <ClubName>{clubName}</ClubName>
            <Price>{price}</Price>
            <p>per month</p>
          </MonthlyPriceContainer>

          <Feature>
            <p>{users}</p>
            <p>{budget}</p>
            <p>{support}</p>
          </Feature>
          <Button>{ctaTitle}</Button>
        </IconContext.Provider>
      </PricingCardContainer>
    </>
  );
};

export default PricingCard;
