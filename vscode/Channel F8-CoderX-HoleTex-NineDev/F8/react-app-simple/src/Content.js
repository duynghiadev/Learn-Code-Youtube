import React from "react";
import { useState, useEffect } from "react";
import ButtonToTop from "./ButtonToTop";
import WindowSize from "./WindowSize";

/**
 **** WARNING!!!!: useEffect luôn được gọi khi component được mount vào giao diện. ****
 */

function Content() {
  const [title, setTitle] = useState("");
  const [list, setList] = useState([]);
  const [selection, setSelection] = useState("posts");
  const listButton = [
    {
      flag: "posts",
      title: "Posts"
    },
    {
      flag: "comments",
      title: "Comments"
    },
    {
      flag: "albums",
      title: "Albums"
    },
    {
      flag: "photos",
      title: "Photos"
    },
    {
      flag: "todos",
      title: "Todos"
    },
    {
      flag: "users",
      title: "Users"
    }
  ];

  /**
   * *** WARNING!!!!: useEffect luôn được gọi khi component được mount vào giao diện. ****
   */

  /**
   * 1. useEffect(callback):
   *    - Luôn được gọi mỗi khi component được re-render trên giao diện.
   */
  useEffect(() => {
    document.title = title || "React App";
  });

  /************************************************************************************** */

  /**
   * 2. useEffect(callback, []):
   *    - Chỉ được gọi 1 lần duy nhất và vào lúc component được mount vào giao diện, không gọi lại lần 2.
   */
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/posts")
    //   .then((response) => response.json())
    //   .then((json) => setList(json));
  }, []);

  /************************************************************************************** */

  /**
   * 3. useEffect(callback, [dependencies]):
   *    - Chỉ được gọi khi dependencies thay đổi.
   */
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${selection}`)
      .then((response) => response.json())
      .then((json) => setList(json));
  }, [selection]);

  /************************************************************************************** */

  return (
    <div className="content">
      <WindowSize></WindowSize> {/** Component display window size. */}
      <ButtonToTop></ButtonToTop> {/** Component display button "To top"*/}
      {listButton.map((item) => (
        <button
          key={item.flag}
          style={
            item.flag === selection
              ? {
                  color: "white",
                  background: "lightblue",
                  border: "2px solid pink",
                  borderRadius: "3px",
                  margin: "1px"
                }
              : {
                  margin: "1px"
                }
          }
          onClick={() => setSelection(item.flag)}
        >
          {item.title}
        </button>
      ))}
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.title ?? item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Content;
