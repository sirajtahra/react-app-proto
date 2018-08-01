const fetchPosts = async () => {
    try {
        let response = await fetch(`${process.env.REACT_APP_DUMMY_ENDPOINT}/posts`);
        return response.json();
    }
    catch(e) {
        console.error('something wrong happened', e)
    }  
}

export const postService = {
    fetchPosts
};