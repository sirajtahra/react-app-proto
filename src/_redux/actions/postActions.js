import { postService } from '../../_services';

export const selectPost = (post) => {
    console.log(post);
}

export const getPosts = () => {
    return async function (dispatch) {
        let posts = await postService.fetchPosts();
        return dispatch({
            type: 'GET_POSTS',
            payload: posts
        })
    };
}