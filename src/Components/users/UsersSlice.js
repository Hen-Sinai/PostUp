import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

const initialState = {
	users: [],
	status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
	error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const response = await axios.get(USERS_URL);
	return response.data;
});

const UsersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		resetUserList(state, action) {
			state.users.users = action.payload;
		},
		filterUsers(state, action) {
			const { userName } = action.payload;
			const users = state.users.users.filter((user) => user.name === userName);
			state.users.users = users;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchUsers.pending, (state, action) => {
				state.status = 'loading';
			})
			.addCase(fetchUsers.fulfilled, (state, action) => {
				state.status = 'succeeded';
				state.users = [...action.payload];
			})
			.addCase(fetchUsers.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.error.message;
			});
	},
});

export const selectAllUsers = (state) => state.users.users;
export const getUsersStatus = (state) => state.users.status;
export const getUsersError = (state) => state.users.error;

export const selectUserByName = (state, authorName) => state.users.users.filter((user) => user.name === authorName);

export const { resetUserList, filterUsers } = UsersSlice.actions;

export default UsersSlice.reducer;
