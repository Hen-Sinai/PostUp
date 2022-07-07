import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { fetchPosts } from './Components/posts/PostsSlice';
import { fetchUsers } from './Components/users/UsersSlice';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Routes>
					<Route path='/*' element={<App />} />
				</Routes>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
