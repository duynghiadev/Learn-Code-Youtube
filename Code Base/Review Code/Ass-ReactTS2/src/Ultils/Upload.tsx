import axios from "axios";

export const upload = async (file: any) => {
  const CLOUDINARY_API_URL =
    "https://api.cloudinary.com/v1_1/dectee66b/image/upload";
  const CLOUNDINARY_PRESET = "qoqbcmci";
  console.log(file);

  const formData = new FormData();
  formData.append("file", file.originFileObj);
  formData.append("upload_preset", CLOUNDINARY_PRESET);

  const { data } = await axios.post(CLOUDINARY_API_URL, formData, {
    headers: { "Content-Type": "application/form-data" },
  });

  return data.url;
};
