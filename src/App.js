import Home from './Components/Home';
import PostsListByUser from './Components/posts/PostsByUser';
import AddPostForm from './Components/posts/AddPostForm';
import SinglePostPage from './Components/posts/SinglePostPage';
import EditPostForm from './Components/posts/EditPostForm';
import Layout from './Components/Layout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route index element={<Home />} />

				<Route path='post'>
					<Route index element={<AddPostForm />} />
					<Route path=':postId' element={<SinglePostPage />} />
					<Route path='edit/:postId' element={<EditPostForm />} />
				</Route>

				<Route path='user'>
					<Route path=':userId' element={<PostsListByUser />} />
				</Route>
			</Route>
		</Routes>
	);
};

export default App;
