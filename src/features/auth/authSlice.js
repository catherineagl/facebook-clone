import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	name: '',
	surname: '',
	sex: '',
	photo: '',
	cover: '',
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setUserLoginDetails: (state, action) => {
			state.id = action.payload.id;
			state.name = action.payload.name;
			state.surname = action.payload.surname;
			state.sex = action.payload.sex;
			state.photo = action.payload.image;
			state.cover = action.payload.cover;
		},
		setSignOutState: (state) => {
			state.id = null;
			state.name = null;
			state.surname = null;
			state.sex = null;
			state.photo = null;
			state.cover = null;
		},
		setProfilePic: (state, action) => {
			state.photo = action.payload;
		},
		setUserCover: (state, action) => {
			state.cover = action.payload;
		},
	},
});

export const {
	setUserLoginDetails,
	setSignOutState,
	setProfilePic,
	setUserCover,
} = authSlice.actions;
export const selectUserId = (state) => state.auth.id;
export const selectUserName = (state) => state.auth.name;
export const selectUserSurname = (state) => state.auth.surname;
export const selectUserSex = (state) => state.auth.sex;
export const selectUserPhoto = (state) => state.auth.photo;
export const selectUserCover = (state) => state.auth.cover;

export default authSlice.reducer;
