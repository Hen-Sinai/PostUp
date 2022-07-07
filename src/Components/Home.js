import UsersList from './users/UsersList';
import PostsList from './posts/PostsList';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const buttonStyle = {
	position: 'fixed',
	bottom: '30px',
	right: '30px',
	borderRadius: 20,
};

const usersListStyle = {
	position: 'fixed',
	width: '300px',
	display: 'inline',
	marginTop: '10px',
};

const Home = () => {
	const navigate = useNavigate();

	return (
		<div>
			<div style={usersListStyle}>
				<UsersList />
			</div>
			<PostsList />
			<Button variant='outlined' style={buttonStyle} onClick={() => navigate(`/post`)}>
				Add Post
			</Button>
		</div>
	);
};

export default Home;
