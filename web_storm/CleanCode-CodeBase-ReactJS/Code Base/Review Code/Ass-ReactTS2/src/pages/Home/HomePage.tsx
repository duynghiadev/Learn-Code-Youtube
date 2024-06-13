import React from "react";
import { Card } from "antd";
import { Row, Col, Carousel } from "antd";
import styled from "styled-components";
import { HeartOutlined } from "@ant-design/icons";
import HomeMenu from "../../components/Home/Menu";

import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import Banner5 from "../../assets/images/banner5.png";
import Banner6 from "../../assets/images/banner6.png";
import Rectangle from "../../assets/images/Rectangle.png";
import Pk from "../../assets/images/pk.png";
import Header from "../../components/Header";

const { Meta } = Card;
const HomePage = () => {
  const onChange = (currentSlide: number) => {};
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col span={6}>
            <HomeMenu />
          </Col>
          <Col span={18}>
            <Carousel afterChange={onChange} autoplay>
              <Slider src={Banner1} />
              <Slider src={Banner2} />
              <Slider src={Banner3} />
              <Slider src={Banner4} />
            </Carousel>
          </Col>
        </Row>
      </Container>
      <MainHome>
        <div></div>
        <h2 style={{ marginLeft: "165px", fontWeight: "500" }}>
          ĐIỆN THOẠI NỔI BẬT
        </h2>
        <MainContent>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "right", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
          <Card
            style={{ maxWidth: "200px" }}
            hoverable
            cover={
              <img
                style={{ width: "160px", height: "160px" }}
                alt="example"
                src={Rectangle}
              />
            }
          >
            <Tt>
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: "500",
                  paddingTop: "5px",
                }}
              >
                <span>iPhone 13 Pro Max 128GB</span>|
                <span>Chính hãng VN/A</span>
              </div>
              <div style={{ fontSize: "12px", paddingTop: "5px" }}>
                <span
                  style={{ color: "red", fontSize: "14px", fontWeight: "500" }}
                >
                  10.790.000 ₫
                </span>
                <span>18.000.000 ₫</span>
                <p
                  style={{
                    fontSize: "10px",
                    background: "rgb(178, 178, 178)",
                    padding: "5px",
                    borderRadius: "5px",
                  }}
                >
                  [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
                  1.000.000đ
                </p>
                <div style={{ display: "flex", paddingTop: "5px" }}>
                  <div>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                    <span>
                      <HeartOutlined />
                    </span>
                  </div>
                  <span style={{ textAlign: "left", marginLeft: "10px" }}>
                    Đánh giá khác
                  </span>
                </div>
              </div>
            </Tt>
          </Card>
        </MainContent>
      </MainHome>
      <Secction1>
        <span style={{ fontSize: "20px", fontWeight: "500" }}>PHỤ KIỆN</span>
        <span style={{ textAlign: "right" }}>
          <a href="">Xem tất cả</a>
        </span>
        <MainSecction1>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
        </MainSecction1>
      </Secction1>
      <Secction1>
        <span style={{ fontSize: "20px", fontWeight: "500" }}>
          LINH KIỆN MÁY TÍNH
        </span>
        <span style={{ textAlign: "right" }}>
          <a href="">Xem tất cả</a>
        </span>
        <MainSecction1>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
          <Card
            hoverable
            style={{ borderRadius: "5px", backgroundColor: "gray" }}
          >
            <p style={{ fontSize: "15px", fontWeight: "500" }}>Nổi bật</p>
            <img src={Pk} alt="" style={{ width: "70px", height: "70px" }} />
          </Card>
        </MainSecction1>
      </Secction1>
    </>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 10px;
`;
const Secction1 = styled.div`
  max-width: 1200px;
  margin: auto;
  margin-top: 10px;
`;
const Slider = styled.img`
  /* height: 300px;
  color: '#fff',;
	text-align: center;
	background-color: #364d79; */
`;
const MainHome = styled.main`
  width: 1500px;
  margin: auto;
  margin-top: 10px;
`;
const MainContent = styled.section`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const MainSecction1 = styled.section`
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;
const Content = styled.nav`
  background-color: blue;
`;
const Tt = styled.div``;
export default HomePage;
