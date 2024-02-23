import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { allPostsSelector, postSelectorByuser } from "../../posts/postsSlice";
import { selectUserByIdSelector } from "../usersSlice";

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) =>
    selectUserByIdSelector(state, Number(userId))
  );

  // const allPosts = useSelector(allPostsSelector);

  // const postsByUser = useSelector((state) => {
  //   const allPosts = allPostsSelector(state);
  //   return allPosts.filter((p) => p.userId === Number(userId));
  // });

  const postsByUser = useSelector((state) =>
    postSelectorByuser(state, Number(userId))
  );

  // const postsByUser = allPosts.filter((p) => p.userId === Number(userId));

  return (
    <>
      {user && (
        <div>
          <h3 className="text-black font-bold text-3xl mb-4">
            Posts By {user.name}
          </h3>
          <ul>
            {postsByUser.map((p) => (
              <Link to={`/post/${p.id}`} key={p.id}>
                <li className="text-white text-xl mb-4">{p.title}</li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default UserPage;
