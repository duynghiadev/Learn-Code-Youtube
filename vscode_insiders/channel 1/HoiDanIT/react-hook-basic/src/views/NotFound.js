import { useHistory } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();
  const handleClickBtn = () => {
    history.push("/");
  };

  return (
    <div className="not-found-container">
      <h4>This page isn't available</h4>
      <h5>Error Page</h5>
      <button className="btn btn-primary" onClick={handleClickBtn}>
        Go to HomePage
      </button>
    </div>
  );
};

export default NotFound;
