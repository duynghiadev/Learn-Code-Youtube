import { Link } from "react-router-dom";
export const DropList = ({ list, children, path }) => {
  return (
    <>
      <Link to={`/${path}`}>{children}</Link>

      <ul className=" drop-list">
        {list.map((element) => (
          <li key={element.id}>
            <Link to={`/${path}?category=${element.id}`}>{element.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
