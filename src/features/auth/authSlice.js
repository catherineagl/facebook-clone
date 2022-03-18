import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	id: '',
	name: '',
	surname: '',
	sex: '',
	photo: '',
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
			//state.photo = action.payload.photo;
		},
		setSignOutState: (state) => {
			state.id = null;
			state.name = null;
			state.surname = null;
			state.sex = null;
			//state.photo = null;
		},
	},
});

export const { setUserLoginDetails, setSignOutState } = authSlice.actions;
export const selectUserName = (state) => state.auth.name;
export const selectUserSurname = (state) => state.auth.surname;
export const selectUserSex = (state) => state.auth.sex;
export const selectUserPhoto = (state) => state.auth.photo;

export default authSlice.reducer;
