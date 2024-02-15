import React from "react";

export default function List({ list, removeLap }) {
  console.log(list);
  // przemapowanie po elementach listy + usuwanie rekordu o id=idx
  return (
    <ul>
      {list.map((li, idx) => (
        <li onClick={() => removeLap(idx)} key={idx + li}>
          {li}
        </li>
      ))}
    </ul>
  );
}
