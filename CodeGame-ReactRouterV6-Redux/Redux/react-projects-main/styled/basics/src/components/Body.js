import React from "react";
import { Card } from "./styled/Card.styled";
import content from "../content";
import { FlexBox } from "./styled/FlexBox.styled";
import growImg from "../images/illustration-grow-together.svg";
import flowConvImg from "../images/illustration-flowing-conversation.svg";
import yourUsersImg from "../images/illustration-your-users.svg";

const Body = () => {
  const images = [growImg, flowConvImg, yourUsersImg];

  return (
    <div style={{ marginTop: "1rem" }}>
      {content.map((item) => (
        <Card
          key={item.id}
          flexdirection={item.id % 2 !== 0 ? "row-reverse" : "row"}
        >
          <FlexBox flexdirection="column" alignitems="flex-start">
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </FlexBox>
          <img src={images[item.id]} alt="cover-img" />
        </Card>
      ))}
    </div>
  );
};

export default Body;
