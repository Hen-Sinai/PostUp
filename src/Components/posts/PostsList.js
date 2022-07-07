import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './PostsSlice';
import PostsExcerpt from './PostsExcerpt';

const PostsList = (user = null) => {
	let posts = useSelector(selectAllPosts);
	const postStatus = useSelector(getPostsStatus);
	const error = useSelector(getPostsError);

	if (Object.keys(user).length !== 0) {
		console.log(user);
		posts = posts.map((post) => post.author === user);
	}

	let content;
	if (postStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (postStatus === 'succeeded') {
		const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
		content = orderedPosts.map((post) => <PostsExcerpt key={post.id} post={post} />);
	} else if (postStatus === 'failed') {
		content = <p>{error}</p>;
	}

	return <div>{content}</div>;
};
export default PostsList;
