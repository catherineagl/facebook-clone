import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	myPosts: [],
	allPosts: [],
};

const postsSlice = createSlice({
	name: 'posts',
	initialState: initialState,
	reducers: {
		addNewPost: (state, action) => {},
		showMyPosts: (state) => {},
		showAllPosts: (state) => {},
	},
});

export const { addNewPost, showMyPosts, showAllPosts } = postsSlice.actions;
export const SelectMyPosts = (state) => state.posts.myPosts;
export const SelectAllPosts = (state) => state.posts.allPosts;
export default postsSlice.reducer;
