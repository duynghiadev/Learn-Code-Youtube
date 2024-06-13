import { useEffect } from "react";
import { useState } from "react";
import "./DateContainer.css";
import DateDisplay from "./DateDisplay";

const DateContainer = () => {
  const [date, setDate] = useState(Date.now());
  useEffect(() => {
    console.log("re-render");
  }, [date]);

  return (
    <>
      <input
        type="date"
        className="date-input"
        onChange={(e) => setDate(e.target.value)}
      />
      <DateDisplay date={date} />
    </>
  );
};

export default DateContainer;
