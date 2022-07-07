import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const UsersExcerpt = ({ user }) => {
	const navigate = useNavigate();

	return (
		<div>
			<Button variant='outlined' color='primary' style={{ margin: '5px' }} onClick={() => navigate(`/user/${user.id}`)}>
				{user.name}
			</Button>
		</div>
	);
};

export default UsersExcerpt;
