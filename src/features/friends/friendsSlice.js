import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userFriends: [],
	allUsers: [],
	noFriends: [],
	showFriends: [],
	update: false,
};

const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {
		setAllUsers: (state, action) => {
			state.allUsers = action.payload;
		},
		setUserFriends: (state, action) => {
			state.userFriends = action.payload;
		},
		addUserFriends: (state, action) => {
			//state.userFriends = [...state.userFriends, action.payload.id];
			state.userFriends = [...action.payload.friends, action.payload.id];
		},
		deleteUserFriends: (state, action) => {
			state.userFriends = state.userFriends.filter(
				(item) => item !== action.payload
			);
		},
		setNoFriends: (state, action) => {
			state.noFriends = action.payload;
		},
		setShowFriends: (state, action) => {
			state.showFriends = action.payload;
		},
	},
});

export const {
	setAllUsers,
	setUserFriends,
	setNoFriends,
	setShowFriends,
	addUserFriends,
	deleteUserFriends,
} = friendsSlice.actions;

export const selectAllUsers = (state) => state.friends.allUsers;
export const selectUserFriends = (state) => state.friends.userFriends;
export const selectUserNoFriends = (state) => state.friends.noFriends;
export const selectShowFriends = (state) => state.friends.showFriends;
export default friendsSlice.reducer;
