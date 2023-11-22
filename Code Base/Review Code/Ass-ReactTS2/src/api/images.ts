import axios from "axios";

const imageInstance = axios.create({
  baseURL: "https://image-uploader-anhhtus.herokuapp.com/api",
});

export const upload = (base64Image: string) => {
  const url = "/upload";
  return imageInstance.post(url, { data: base64Image });
};
