import React from "react";

const HeadingAdmin = ({ heading }) => {
  return (
    <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
      {heading}
    </h2>
  );
};

export default HeadingAdmin;
