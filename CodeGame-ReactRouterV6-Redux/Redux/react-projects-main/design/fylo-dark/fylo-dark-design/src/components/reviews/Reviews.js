import React from "react";
import "./Reviews.scss";
import allReviews from "./reviews-data";

const Reviews = () => {
  return (
    <section className="reviews">
      {allReviews.map((review) => (
        <div className="review">
          <p className="review__text">{review.review}</p>
          <div className="review__profile">
            <img
              src={review.img}
              alt={review.name}
              className="review__profile-img"
            />
            <div className="review__profile-info">
              <p className="name">{review.name}</p>
              <p className="post">{review.post}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Reviews;
