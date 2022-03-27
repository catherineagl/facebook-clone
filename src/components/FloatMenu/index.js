import React from 'react';
import { ImExit } from 'react-icons/im';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
	Container,
	LineSeparator,
	LinkAction,
	MenuHeader,
	ImgContainer,
	HeaderInfo,
	IconContainer,
} from './FloatMenuElements';
import {
	selectUserName,
	selectUserPhoto,
	selectUserSurname,
	setSignOutState,
} from '../../features/auth/authSlice';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const FloatMenu = () => {
	const userName = useSelector(selectUserName);
	const userSurname = useSelector(selectUserSurname);
	const userPhoto = useSelector(selectUserPhoto);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const logOut = () => {
		signOut(auth)
			.then(() => {
				navigate('/');
				dispatch(setSignOutState());
			})
			.catch((error) => {
				console.log('error log out');
			});
	};

	return (
		<Container>
			<Link to="/profile">
				<MenuHeader>
					<ImgContainer>
						<img src={userPhoto} alt="" />
					</ImgContainer>
					<HeaderInfo>
						<h2>
							{userName} {userSurname}
						</h2>
						<p>Go to profile</p>
					</HeaderInfo>
				</MenuHeader>
			</Link>
			<LineSeparator />
			<LinkAction onClick={logOut}>
				<IconContainer>
					<ImExit />
				</IconContainer>
				<span>Exit</span>
			</LinkAction>
		</Container>
	);
};

export default FloatMenu;
