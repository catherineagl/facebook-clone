import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect } from 'react';
import {
	Container,
	Content,
	FriendIcon,
	AddFriendIcon,
	Item,
	Sidebar,
	IconContainer,
	FriendsContainer,
} from './FriendsElements';
import db from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAllUsers,
	setAllUsers,
} from '../../features/friends/friendsSlice';
import { selectUserId } from '../../features/auth/authSlice';
import FriendCard from '../FriendCard';
//no friends
//https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg
const Friends = () => {
	const userId = useSelector(selectUserId);
	const allUsers = useSelector(selectAllUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		const q = query(collection(db, 'users'));
		onSnapshot(q, (querySnapshot) => {
			let users = querySnapshot.docs
				.filter((snap) => snap.id !== userId)
				.map((item) => item.data());
			dispatch(setAllUsers(users));
		});
	}, []);

	return (
		<Container>
			<Sidebar>
				<h2>Friends</h2>
				<Item>
					<IconContainer>
						<FriendIcon />
					</IconContainer>
					<span>Home</span>
				</Item>
				<Item>
					<IconContainer>
						<AddFriendIcon />
					</IconContainer>
					<span>All friends</span>
				</Item>
			</Sidebar>
			<Content>
				<h2>People you may know</h2>
				<FriendsContainer>
					<FriendCard />
				</FriendsContainer>
			</Content>
		</Container>
	);
};

export default Friends;
