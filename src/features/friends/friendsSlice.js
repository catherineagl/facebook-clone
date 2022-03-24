import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	userFriends: [],
	allUsers: [],
	noFriends: [],
};

const friendsSlice = createSlice({
	name: 'friends',
	initialState,
	reducers: {
		setAllUsers: (state, action) => {
			console.log(action.payload);
			state.allUsers = action.payload;
		},
		setUserFriends: (state, action) => {},
	},
});

export const { setAllUsers } = friendsSlice.actions;

export const selectAllUsers = (state) => state.friends.allUsers;
export default friendsSlice.reducer;
