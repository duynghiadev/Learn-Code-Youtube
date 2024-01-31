import { Col, Row, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../../assets/image/Rectangle.png";
import { StarOutlined, CloseOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";

const { Text, Title } = Typography;
type Props = {};

const Cart = (props: Props) => {
  const { cart, total }: any = useSelector((store) => store);
  console.log(total);
  console.log(cart);
 

  const dipatch = useDispatch();
  return (
    <Container>
      <Row style={{"padding":"20px"}}>
          <Col span={8}>
            {" "}
            <Link to="/"><P7>Trở về</P7></Link>
          </Col>
          <h2 style={{"margin":"0 51px", "color":"red"}}>Giỏ hàng</h2>
        </Row>
      <Viv>
        {cart?.map((item: any, index: number) => {
          return (
            <Div5 key={index}>
              <Row>
                <Col span={12}>
                  <Im src={item.img} style={{"margin":"0 58px"}}alt="" width="200px"/>
                </Col>

                <Col span={12} style={{"margin":"0 -96px"}}>
                  <div>
                    <Row>
                      <Col span={18}>
                        <h3>{item.name}</h3>
                      </Col>
                      <Col span={6}>
                        <button  onClick={() => {
                            dipatch({
                              type: "cart/delete",
                              payload: item.id,
                            });
                          }} >
                          <CloseOutlined />
                        </button>
                      </Col>
                    </Row>
                  </div>
                  <Div1>
                    <Row>
                      <Col span={6}>
                        <P1>{item.saleOffPrice.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                          })} </P1>
                      </Col>
                      <Col span={6}>
                        <P>{item.originalPrice.toLocaleString('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                          })} </P>
                      </Col>
                      <Col span={6}>
                        <P2>Giảm 27%</P2>
                      </Col>
                    </Row>
                  </Div1>
                  <Div3>
                    <Row>
                      <Col span={2}>
                        <button
                          onClick={() => {
                            dipatch({
                              type: "cart/increase",
                              payload: item.id,
                            });
                          }}
                        >
                          +
                        </button>{" "}
                      </Col>
                      <Col span={1}><h3>{item.quantity}</h3></Col>
                      <Col span={2}>
                        <button
                          onClick={() => {
                            dipatch({
                              type: "cart/decrease",
                              payload: item.id,
                            });
                          }}
                        >
                          -
                        </button>
                      </Col>
                    </Row>
                  </Div3>
                  <Div2>
                    <p>- Chương trình khuyến mại:</p>
                    <Text>
                      Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO,
                      Zing MP3, Phúc Long, Galaxy Play)
                    </Text>
                  </Div2>
                </Col>
                <hr />
              </Row> 
            </Div5>
           
          );
        })}
        
      </Viv>
      {/* <h2>Tổng Tiền Tạm Tính: {total}</h2> */}
      <Dep>
            <Doiv>Tổng tiền tạm tính: </Doiv>
            <Wi>
              {total.toLocaleString('vi-VN', {
                style: 'currency',
                currency: 'VND',
              })}
            </Wi>
          </Dep>
          <P6>
            <Cod>
              <P6>TIẾN HÀNH ĐẶT HÀNG</P6>
            </Cod>
            <br></br>
            <Link to="/" >
              <Di>
                CHỌN THÊM SẢN PHẨM KHÁC
              </Di>
            </Link>
          </P6>
    </Container>
  );
};
const P6 = styled.div`
  text-align: center;
  padding: 6px;
`
const Viv = styled.div`
border: 1px solid #ccc6c6;
border-radius: 14px;
`
const Di = styled.div`
  color:red;
  font-size: 18px;
  height:40px;
  border-radius: 5px;
  border: 1px solid red;
`
const Cod = styled.div`
  background: red;
  color:white;
  font-size: 18px;
  height:40px;
  border-radius: 5px;

`
const P7 = styled.div`
font-size: 15px;
color:red;
`
const Wi = styled.div`
  font-size: 18px;
  color:red;
`
const Dep = styled.div`
  display: flex;
  padding:15px 0;
  justify-content: space-between;
`
const Doiv = styled.div`
  font-size: 19px;
`
const Div5 = styled.div`
  padding-top: 20px;
`;
const Im = styled.img`
  padding-left: 20px;
`;
const In = styled.input`
  width: 50px;
`;
const Div3 = styled.div`
  font-size: 10px;
`;
const Div2 = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 14px;
  margin: 10px 0;
  font-size: 12px;
`;
const P2 = styled.p`
  color: white;
  background: red;
  border-radius: 5px;
  text-align: center;
  width:80px;
  height:20px;
`;
const P1 = styled.p`
  color: red;
  font-size: 15px;
`;
const Div1 = styled.div`
  font-size: 10px;
`;
const Container = styled.div`
  max-width: 800px;
  margin: auto;
  margin-top: 20px;
`;
const P = styled.p`
font-size: 15px;
`
export default Cart;