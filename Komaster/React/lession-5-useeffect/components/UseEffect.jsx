import { useEffect, useState } from "react";
import { getCommentList } from "../services/comment";
import Review from "./Review";

export default function UseEffect() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(
    function () {
      console.log("getCommentList", page);
      getCommentList({ page }).then(({ data }) => {
        setReviews(
          data.map((dt) => ({
            id: dt.id,
            userPhoto: dt.owner.picture,
            name: dt.owner.firstName + dt.owner.lastName,
            point: 4,
            review: dt.message,
          }))
        );
      });
    },
    [page]
  );

  const nexPage = () => {
    setPage((page) => page + 1);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("call another function");
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <div className="flex gap-1">
        <button className="btn" onClick={nexPage}>
          Next page
        </button>
      </div>
      {reviews.map((review) => {
        return <Review {...review} />;
      })}
    </div>
  );
}
