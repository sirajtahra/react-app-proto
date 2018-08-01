import { createSelector } from 'reselect';

const postsListSelector = state => state.post.list;

export const firstTenPostsSelector = createSelector(
    postsListSelector,
    posts => posts.slice(0,5)
);