import React from "react";
import { useSelector } from "react-redux";
import PostExcert from "../PostExcert";
import {
  allPotsIdsSelector,
  postsErrorSelector,
  postsStatusSelector,
} from "../postsSlice";

const Posts = () => {
  // const dispatch = useDispatch();

  // const availablePosts = useSelector(allPostsSelector);

  const allPostIds = useSelector(allPotsIdsSelector);

  const postStatus = useSelector(postsStatusSelector);
  const postsError = useSelector(postsErrorSelector);

  // no need as we are fetching posts when the app loads in index.js
  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [dispatch, postStatus]);

  console.log("rendered");

  let content = <p className="text-white text-xl">Loading...</p>;

  if (postStatus === "succeeded") {
    content = allPostIds.map((id) => <PostExcert postId={id} key={id} />);
  } else if (postStatus === "failed") {
    content = <p className="text-red-700 text-xl">{postsError}</p>;
  }
  return (
    <div className="mt-6">
      <h3 className="font-bold text-4xl text-white mb-4">Posts</h3>
      {content}
    </div>
  );
};

export default Posts;
