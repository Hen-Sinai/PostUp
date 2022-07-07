import { useSelector } from 'react-redux';
import PostsExcerpt from './PostsExcerpt';
import { selectPostByAuthorId } from './PostsSlice';
import { useParams } from 'react-router-dom';

const PostsByUser = () => {
	const { userId } = useParams();
	const posts = useSelector((state) => selectPostByAuthorId(state, Number(userId)));
	const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));
	const content = orderedPosts.map((post) => <PostsExcerpt key={post.id} post={post} />);

	return <div>{content}</div>;
};

export default PostsByUser;
