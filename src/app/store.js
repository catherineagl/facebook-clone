import { configureStore } from '@reduxjs/toolkit';

import authReducer from '../features/auth/authSlice';
import friendsReducer from '../features/friends/friendsSlice';
import postsReducer from '../features/posts/postsSlice';

export const store = configureStore({
	reducer: {
		auth: authReducer,
		posts: postsReducer,
		friends: friendsReducer,
	},
});

export default store;
