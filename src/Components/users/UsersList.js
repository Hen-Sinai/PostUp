import { useSelector } from 'react-redux';
import UsersExcerpt from './UsersExcerpt';
import { selectAllUsers, getUsersStatus, getUsersError } from './UsersSlice';

const UsersList = () => {
	const users = useSelector(selectAllUsers);
	const usersStatus = useSelector(getUsersStatus);
	const error = useSelector(getUsersError);

	let content;
	if (usersStatus === 'loading') {
		content = <p>"Loading..."</p>;
	} else if (usersStatus === 'succeeded') {
		const orderedPosts = users.slice().sort((a, b) => a.name.localeCompare(b.name));
		content = orderedPosts.map((user) => <UsersExcerpt key={user.id} user={user} />);
	} else if (usersStatus === 'failed') {
		content = <p>{error}</p>;
	}

	return <div>{content}</div>;
};

export default UsersList;
