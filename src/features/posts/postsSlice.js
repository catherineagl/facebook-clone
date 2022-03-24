import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userPosts: [],
	allPosts: [],
};

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		addNewPost: (state, action) => {},
		setUserPosts: (state, action) => {
			state.userPosts = action.payload;
		},
		setPosts: (state, action) => {
			state.allPosts = action.payload;
		},
	},
});

export const { addNewPost, setUserPosts, setPosts } = postsSlice.actions;
export const SelectUserPosts = (state) => state.posts.userPosts;
export const SelectAllPosts = (state) => state.posts.allPosts;
export default postsSlice.reducer;
