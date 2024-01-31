import React from "react";
import { useState, useEffect } from "react";

const lessons = [
  {
    id: 1,
    name: "ReactJS là gì? Tại sao nên học ReactJS?"
  },
  {
    id: 2,
    name: "SPA/MMA là gì?"
  },
  {
    id: 3,
    name: "Arrow function"
  }
];

function FakeCommentsComponent() {
  const [course, setCourse] = useState(1);
  const [listComments, setListComments] = useState([]);

  useEffect(() => {
    const handleEvent = (event) => {
      setListComments((prev) => {
        return [
          ...prev,
          {
            id: Math.floor(Math.random() * 10 ** 5),
            value: event.detail
          }
        ];
      });
    };

    window.addEventListener(`lesson-${course}`, handleEvent);

    return () => {
      window.removeEventListener(`lesson-${course}`, handleEvent);
      setListComments([]);
    };
  }, [course]);

  const handleClick = (id) => {
    setCourse(id);
  };

  return (
    <div className="container">
      <ul>
        {lessons.map((item) => (
          <li
            key={item.id}
            style={{
              color: course === item.id && "red"
            }}
            onClick={() => handleClick(item.id)}
          >
            <h1>{item.name}</h1>
          </li>
        ))}
      </ul>
      <ul
        style={{
          listStyleType: "circle",
          margin: "32px"
        }}
      >
        {listComments.map((item) => (
          <li key={item.id}>
            {item.value}
            <p>{item.id}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FakeCommentsComponent;
