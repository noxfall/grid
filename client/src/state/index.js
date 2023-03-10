import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mode: "dark",
    user: null,
    token: null,
    posts: [],
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "dark" ? "light" : "dark";
        },
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setFollowing: (state, action) => {
            if (state.user) {
                state.user.following = action.payload.following;
            } else {
                console.error('User following doesn\'t exist');
            }
        },
        setPosts: (state, action) => {
            state.posts = action.payload.posts;
        },
        setPost: (state, action) => {
            const updatedPosts = state.posts.map((post) => {
                if (post._id === action.payload.post_id) return action.payload.post;
                return post;
            });
            state.posts = updatedPosts;
        }
    }
});

export const { setMode, setLogin, setLogout, setFollowing, setPosts, setPost } = authSlice.actions;
export default authSlice.reducer;