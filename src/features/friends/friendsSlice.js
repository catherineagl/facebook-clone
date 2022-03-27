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
		setNoFriends: (state, action) => {
			state.noFriends = action.payload;
		},
		setShowFriends: (state, action) => {
			state.showFriends = action.payload;
		},
		setUpdate: (state, action) => {
			state.update = action.payload;
		},
		setFinishUpdate: (state) => {
			state.update(false);
		},
		setNewFriend: (state, action) => {
			const { id, data, noFriends, userFriends } = action.payload;
			let newNoFriends = noFriends.filter((item) => item.id !== id);
			let newUserFriends = [...userFriends, { id, data }];
			setNoFriends(newNoFriends);
			setShowFriends(newUserFriends);
		},
		deleteFriend: (state, action) => {
			state.userFriends = state.userFriends.filter(
				(item) => item.id !== action.payload.id
			);
			state.noFriends.push(action.payload.data);
		},
	},
});

export const {
	setAllUsers,
	setUserFriends,
	setNoFriends,
	setShowFriends,
	setUpdate,
	setFinishUpdate,
	setNewFriend,
	deleteFriend,
} = friendsSlice.actions;

export const selectAllUsers = (state) => state.friends.allUsers;
export const selectUserFriends = (state) => state.friends.userFriends;
export const selectUserNoFriends = (state) => state.friends.noFriends;
export const selectShowFriends = (state) => state.friends.showFriends;
export default friendsSlice.reducer;
