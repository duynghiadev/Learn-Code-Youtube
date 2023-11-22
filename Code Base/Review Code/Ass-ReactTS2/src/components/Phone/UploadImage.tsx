import React from "react";
import styled from "styled-components";
import { Typography, Button, Input } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import axios from "axios";
import { upload } from "../../api/images";

const { TextArea } = Input;

const UploadImage = () => {
  const [base64Image, setBase64Image] = React.useState("");
  const [uploadedImage, setUploadedImage] = React.useState("");

  const handleChangeImage = (event: any) => {
    const file = event.target.files[0];
    // previewFile(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  };

  const uploadImage = async (base64Image: string) => {
    try {
      const res = await upload(base64Image);
      const data = res.data;
      console.log(data);
      setUploadedImage(data.url);
      data.img = uploadedImage;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <UploadWrapper>
        <UploadIcon>
          <PlusCircleOutlined style={{ fontSize: 30 }} />
          <input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            name="image"
            onChange={handleChangeImage}
          />
        </UploadIcon>
        {/* <Button type="dashed" shape="circle" icon={<PlusCircleOutlined />} />
                <Typography.Title level={5}>Thêm ảnh</Typography.Title> */}

        {uploadedImage && (
          <ImagePreview style={{}} src={uploadedImage} alt="Image" />
        )}
      </UploadWrapper>
      <Label>Mô tả ngắn</Label>
      <TextArea rows={4} placeholder="Mô tả ngắn" />
    </Container>
  );
};

const Container = styled.div``;

const Label = styled.div`
  font-weight: bold;
  font-size: 13px;
  text-align: left;
`;

const UploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  border: 1px dashed gray;
`;

const UploadIcon = styled.label`
  input {
    display: none;
  }
`;

const ImagePreview = styled.img`
  width: 100%;
`;

export default UploadImage;
