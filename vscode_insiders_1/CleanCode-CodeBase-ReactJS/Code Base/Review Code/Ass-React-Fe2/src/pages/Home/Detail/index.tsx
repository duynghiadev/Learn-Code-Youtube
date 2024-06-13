import {
  IeCircleFilled,
  LaptopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Button, Col, MenuProps, Row, Typography } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Image1 from "../../../assets/image/Rectangle11.png";
const { Text, Title } = Typography;

import Card from "antd/lib/card/Card";
import LogoImage from "../../../assets/image/Rectangle.png";
import { StarOutlined } from "@ant-design/icons";
import { getProductId } from "../../../api/product";
import { ProductType } from "../../../types/Product";
import { useDispatch } from "react-redux";

const style: React.CSSProperties = {
  background: "#ffffff",
  padding: "25px 0",
};
const styles: React.CSSProperties = {
  background: "#FFA3A3",
  padding: "10px 0",
  color: "#ffffff",
};

const { Header, Content, Sider } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

const items2: MenuProps["items"] = [
  {
    key: "phone",
    icon: React.createElement(LaptopOutlined),
    label: <Link to="/phone">Điện thoại</Link>,
  },
];

const DetailPage = () => {
  const [product, setProduct] = useState<ProductType>();
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await getProductId(id as string);
      setProduct(data);
    };
    getProduct();
  }, []);
  const addToCart = (item:any) => {
  
    
    item.quantity = 1;
    dispatch({
      type: "cart/add",
      payload: item,
    });
  };
  return (
    <>
      <Container>
        <div>
          <Ul1>
            <Li1>
              <a href=""></a>Điện thoại{" "}
            </Li1>
            <Li1>
              <a href=""></a>Máy Tính
            </Li1>
            <Li1>
              <a href=""></a>Sam Sung
            </Li1>
          </Ul1>
        </div>
        <hr />
        <div>
          <h3>Samsung Galaxy A73 (5G) 256GB</h3>
        </div>
        <hr />

        <div>
          <Row>
            <Col span={10}>
              <Dv2>
                <div style={{"padding":"30px 0"}}>
                  <img src={product?.img} width="250px"/>
                </div>
                <div>
                  <Row>
                    <Col span={4}>
                      <Img1 src={Image1} />
                    </Col>
                    <Col span={4}>
                      <Img1 src={Image1} />
                    </Col>
                    <Col span={4}>
                      {" "}
                      <Img1 src={Image1} />
                    </Col>
                    <Col span={4}>
                      <Img1 src={Image1} />
                    </Col>
                    <Col span={4}>
                      <Img1 src={Image1} />
                    </Col>
                  </Row>
                </div>
              </Dv2>
            </Col>
            <Col span={14}>
              <div>
                <Row style={{"padding":"30px 0"}}>
                  <Col span={8}> 
                    <Title level={2} type="danger">
                     {product?.saleOffPrice}đ
                    </Title>
                  </Col>
                  <Col span={4}>
                    {product?.originalPrice}đ
                  </Col>
                </Row>
              </div>
              <div>
                <Text>
                  {" "}
                 {product?.description}
                </Text>
              </div>
              <Dv3>
                <Row>
                  <Col span={10} style={{"background":"red", "color":"white","borderRadius":"5px"}}>
                    <P onClick={()=>addToCart(product)}>Mua Ngay</P>
                  </Col>
                  <Col span={4}>
                    <Bot1 onClick={()=>addToCart(product)}>
                      <ShoppingCartOutlined />
                    </Bot1>
                  </Col>
                </Row>
              </Dv3>
            </Col>
          </Row>
        </div>
        {/* ---------------------------------------------------- */}

        <div>
          <Section style={{"padding":"30px 0"}}>
            <h2 style={{"padding":"10px 0"}}>Sản phẩm cùng loại</h2>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={LogoImage} />}
                  >
                    <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={LogoImage} />}
                  >
                    <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={LogoImage} />}
                  >
                    <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
              <Col className="gutter-row" span={6} style={style}>
                <div>
                  <Card
                    hoverable
                    cover={<Image alt="example" src={LogoImage} />}
                  >
                    <Title level={5}>iPhone 11 64GB I Chính hãng VN/A</Title>
                    <Row>
                      <Col span={12}>
                        <Text type="danger">10.790.000 ₫</Text>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">18.000.000 ₫</Text>
                      </Col>
                    </Row>
                    <Borders>
                      <Text>
                        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá
                        lên tới 1.000.000đ
                      </Text>{" "}
                    </Borders>
                    <br />
                    <Row>
                      <Col span={12}>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                        <Link to="">{<StarOutlined />}</Link>
                      </Col>
                      <Col span={12}>
                        <Text type="secondary">72 đánh giá</Text>
                      </Col>
                    </Row>
                  </Card>
                </div>
              </Col>
            </Row>
          </Section>
        </div>

        <div>
          <Div4>
            <H33>ĐẶC ĐIỂM NỔI BẬT</H33>
            <Text>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </Text>{" "}
            <br />
            <Text>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </Text>{" "}
            <br />
            <Text>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </Text>{" "}
            <br />
            <Text>
              Camera chất lượng, bắt trọn từng khoảng khắc - Cụm 4 camera với
              cảm biến chính lên đến 108 MP
            </Text>{" "}
            <br />
          </Div4>
          <Div5>
            <Text>
              Năm 2022 hứa hẹn sẽ là một năm rất đáng trông đợi đối với những ai
              là fan của thương hiệu điện thoại Samsung. Mới đây, hãng sẽ tiếp
              tục cho ra mắt nhiều smartphone với sự cải tiến trong thiết kế và
              cấu hình, trong đó phải kể đến chiếc Samsung Galaxy A73 với nhiều
              cải tiến so với thế hệ trước. Vậy sản phẩm có gì nổi bật, giá bao
              nhiêu và liệu có nên mua không? Tìm hiểu ngay nhé!
            </Text>
          </Div5>

          <Div5>
            <h3>
              Đánh giá Samsung A73 - Hiệu năng mượt mà, chụp ảnh chuyên nghiệp
            </h3>
            <p>
              Điện thoại cao cấp nhất dòng Galaxy A series sở hữu nhiều nâng cấp
              đáng giá so với thế hệ trước, từ ngoại hình cho đến hiệu năng, đặc
              biệt là hệ thống camera. Sau đây là những đánh giá chi tiết về
              chiếc
            </p>
          </Div5>
          <Div5>
            <h3>Thiết kế sang trọng, màn hình Super AMOLED</h3>
            <p>
              Trước khi mua bất kỳ chiếc điện thoại nào, người dùng cũng sẽ quan
              tâm đến thiết kế sản phẩm trước. Với phiên bản A73, Samsung đã tạo
              nên một chiếc smartphone với vẻ ngoài mang đến cảm giác sang trọng
              và tinh tế.
            </p>
            <p>
              Samsung Galaxy A73 được thiết kế gọn nhẹ với tiêu chí đáp ứng khả
              năng mang theo để tiện đi lại cho người dùng. Giờ đây, bạn có thể
              mang theo chiếc smartphone bên cạnh đến bất cứ đâu, bất cứ lúc
              nào.
            </p>
            <p>
              Kích thước và trọng lượng của chiếc điện thoại rất vừa phải và dĩ
              nhiên sẽ không chiếm quá nhiều diện tích trong túi xách và có thể
              di chuyển dễ dàng.
            </p>
          </Div5>
          <Div6>
            <button>Xem thêm</button>
          </Div6>
        </div>
      </Container>
    </>
  );
};
const Div6 = styled.div`
  padding: 5px 30px;
  border-radius: 5px;
  text-align: center;
`;
const Div5 = styled.div`
  padding-top: 20px;
  width: 1200px;
  margin: 0 auto;
  padding-left: 10px;
`;
const H33 = styled.h3`
  text-align: center;
  color: red;
`;
const Div4 = styled.div`
  border: 1px solid red;
  background: #f2f2f2;
  border-radius: 10px;
  padding-left: 20px;
`;
const Ul1 = styled.ul`
  text-decoration: none;
  list-style: none;
  display: flex;
  margin-left: 100px;
`;
const Li1 = styled.li`
  padding: 10px;
`;
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;
const Img1 = styled.img`
  width: 50px;
  border: 1px solid red;
  border-radius: 5px;
`;
const Dv2 = styled.div`
  text-align: center;
`;
const Bot = styled.button`
  background-color: red;
  padding: 10px 100px 10px 100px;
  border-radius: 5px;
`;

const Bot1 = styled.button`
  border: 1px solid red;
  width: 48px;
  height: 48px;
  color: red;
`;
const Dv3 = styled.button`
  position: absolute;
  bottom: 0px;
  width: 100%;
  border: none;
  background-color: #ffffff;
`;

// ----------------------------------------------------------------
const P = styled.div`
  font-size:18px;
  padding:9px;
`
const Image = styled.img`
  height: 160px;
  width: 160px;
  left: 92px;
  top: 585px;
  border-radius: 0px;
  margin: auto;
  margin-top: 20px;
`;
const Section = styled.div`
  /* background-color: #eddddd; */
  max-width: 1505px;
  margin: auto;
`;
const Borders = styled.div`
  background-color: #f3f4f6;
  border: 1px solid #e5e7eb;
`;

export default DetailPage;
