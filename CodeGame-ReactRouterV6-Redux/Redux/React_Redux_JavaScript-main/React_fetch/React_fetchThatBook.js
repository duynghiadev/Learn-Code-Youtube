import React, { useEffect, useState } from "react";

const API = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
export default function BookInfo({ isbn }) {
  const [title, setTitle] = useState("");
  useEffect(() => {
    const getTitle = async () => {
      const res = await fetch(API + isbn);
      if (!res.ok) {
        throw new Error({
          msg: "Ops...",
          status: res.status,
        });
      }
      const { items } = await res.json();

      setTitle(items[0].volumeInfo.title);
    };
    getTitle().catch((err) => console.log(err));
  }, []);

  if (!title) return <p>loading...</p>;

  return <h1>{title}</h1>;
}
