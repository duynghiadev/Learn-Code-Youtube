import { createSelector } from 'reselect';

const selectBlogReducer = () => state => state.blog;

const selectBlogs = createSelector(
  selectBlogReducer(),
  substate => substate.blogs
);

export { selectBlogs };
