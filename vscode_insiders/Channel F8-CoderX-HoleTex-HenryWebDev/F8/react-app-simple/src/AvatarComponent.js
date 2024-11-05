import React from "react";
import { useState, useEffect } from "react";

function AvatarComponent() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(avatar && avatar.preview);
    };
  }, [avatar]);

  const handleViewAvatar = (event) => {
    const file = event.target.files.item(0) || "";
    file.preview = URL.createObjectURL(file);
    setAvatar(file);
  };

  return (
    <div
      className="container"
      style={{
        position: "fixed",
        top: "80px",
        right: "64px",
        float: "right",
        background: "lightblue",
        width: "191.78px",
      }}
    >
      <img
        src={avatar && avatar.preview}
        alt={avatar && avatar.name}
        style={{
          border: "1px solid gray",
          width: "190px",
          height: "190px",
        }}
      />
      <input
        type="file"
        style={{
          width: "190px",
          alignSelf: "center",
        }}
        onChange={(event) => handleViewAvatar(event)}
      />
    </div>
  );
}

export default AvatarComponent;
