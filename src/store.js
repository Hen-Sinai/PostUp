import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './Components/posts/PostsSlice';
import usersReducer from './Components/users/UsersSlice';

export const store = configureStore({
	reducer: {
		posts: postsReducer,
		users: usersReducer,
	},
});
