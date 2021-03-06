import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 2 }}>
						<Link to='/' style={{ textDecoration: 'none' }}>
							PostUp
						</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default Header;
