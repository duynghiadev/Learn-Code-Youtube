import { useState } from "react";
import { reviews as data } from "../data";

function App() {
  const [reviews, setReviews] = useState(data);

  const deleteByIndex = (index) => {
    const filteredReviews = reviews.filter(
      (review, rIndex) => index !== rIndex
    );
    setReviews(filteredReviews);
  };

  return (
    <div className="container">
      {reviews.map((data, index) => {
        return (
          <div key={data.id} className="user">
            <span>{data.name}</span>
            <button
              className="btn-delete"
              onClick={() => {
                deleteByIndex(index);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
