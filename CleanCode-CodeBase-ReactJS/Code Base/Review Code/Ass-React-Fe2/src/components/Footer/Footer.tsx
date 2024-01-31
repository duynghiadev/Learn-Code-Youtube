import React from "react";
import styled from "styled-components";
type Props = {};

const Footer = (props: Props) => {
  return (
    <Container>
      <Container_2>
        <Wrap>
          <Title>
            Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
          </Title>

          <Title>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</Title>

          <Title>
            Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
          </Title>
        </Wrap>
        <Wrap>
          <Title>
            Điện thoại iPhone 13 - Điện thoại iPhone 12-Điện thoại iPhone 11
          </Title>

          <Title>iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ</Title>

          <Title>
            Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
          </Title>
        </Wrap>
        <Wrap>
          <Title>
            Điện thoại iPhone 13 - Điện thoại iPhone 12 - Điện thoại iPhone 11
          </Title>

          <Title>
            iPhone cũ giá rẻ - iPhone 13 cũ-iPhone 12 cũ - iPhone 11 cũ
          </Title>

          <Title>
            Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
          </Title>
        </Wrap>
      </Container_2>

      <Div>
        <TitleFooter>
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </TitleFooter>
      </Div>
    </Container>
  );
};
const Container = styled.div`
  /* display: flex;
  justify-content: center; */
  /* max-width: 1792px; */
  width: auto;
  height: 168px;
  background: #f1efef;
  margin-top: 200px;

  /* align-content: flex-start; */
`;
const Container_2 = styled.div`
  display: flex;
  justify-content: center;
  /* max-width: 1792px;
  height: 168px; */
  background: #f2efef;
  margin-top: 200px;
  padding-top: 20px;

  /* align-content: flex-start; */
`;
const Wrap = styled.div`
  /* display: flex; */
  width: 300px;
  height: 80px;
  /* align-content: flex-start; */
`;
const Title = styled.p`
  display: flex;
  font-size: 10px;
  font-family: "Roboto";
  font-style: normal;
  line-height: 20px;
  word-spacing: normal;
`;
const TitleFooter = styled.p`
  font-size: 12px;
  font-weight: 400;
  font-family: "Roboto";
  font-style: normal;
  padding-top: 50px;
  text-align: center;
`;
const Div = styled.div`
  height: 70px;
`;
export default Footer;
