import { collection, doc, getDoc, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import {
	Container,
	Content,
	FriendIcon,
	AddFriendIcon,
	Item,
	Sidebar,
	IconContainer,
	FriendsContainer,
	EmptyFriendSection,
} from './FriendsElements';
import db from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectAllUsers,
	selectShowFriends,
	selectUserFriends,
	selectUserNoFriends,
	setAllUsers,
	setNoFriends,
	setShowFriends,
	setUserFriends,
} from '../../features/friends/friendsSlice';
import { selectUserId } from '../../features/auth/authSlice';
import FriendCard from '../FriendCard';
//no friends
//https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg
const Friends = () => {
	const [showingFriends, setShowingFriends] = useState(false);

	const userId = useSelector(selectUserId);
	const allUsers = useSelector(selectAllUsers);
	const noFriends = useSelector(selectUserNoFriends);
	const userFriends = useSelector(selectUserFriends);
	const showFriends = useSelector(selectShowFriends);
	const dispatch = useDispatch();

	useEffect(() => {
		const getUserFriends = async () => {
			const docRef = doc(db, 'users', userId);
			const userData = await getDoc(docRef);
			dispatch(setUserFriends(userData.data().friends));
		};
		getUserFriends();
	}, []);

	useEffect(() => {
		const q = query(collection(db, 'users'));

		const friends = [];
		let noFriends = [];
		onSnapshot(q, (querySnapshot) => {
			let users = querySnapshot.docs
				.filter((snap) => snap.id !== userId)
				.map((item) => {
					/* 					for (const i of userFriends) {
						if (item.id !== i) {
							noFriends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
						} else
							friends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
					}
					if (userFriends.length < 1)
						noFriends.push({
							id: item.id,
							data: {
								...item.data(),
								birthday: JSON.stringify(
									new Date(item.data().birthday.seconds)
								),
							},
						});
					//if (userFriends.length >= users.length) noFriends = [];
					return {
						id: item.id,
						data: {
							...item.data(),
							birthday: JSON.stringify(new Date(item.data().birthday.seconds)),
						},
					}; */
					if (userFriends.length > 0) {
						if (userFriends.includes(item.id)) {
							friends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
						} else {
							noFriends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
						}
					} else {
						noFriends.push({
							id: item.id,
							data: {
								...item.data(),
								birthday: JSON.stringify(
									new Date(item.data().birthday.seconds)
								),
							},
						});
					}
				})
				.filter((item) => item);

			//dispatch(setAllUsers(users));
			dispatch(setShowFriends(friends));
			dispatch(setNoFriends(noFriends));
		});
	}, []);

	return (
		<Container>
			<Sidebar>
				<h2>Friends</h2>
				<Item onClick={() => setShowingFriends(false)}>
					<IconContainer>
						<FriendIcon />
					</IconContainer>
					<span>Home</span>
				</Item>
				<Item onClick={() => setShowingFriends(true)}>
					<IconContainer>
						<AddFriendIcon />
					</IconContainer>
					<span>All friends</span>
				</Item>
			</Sidebar>
			<Content>
				<h2>{showingFriends ? 'Friends' : 'People you may know'}</h2>
				<FriendsContainer>
					{!showingFriends &&
						noFriends.map((user) => (
							<FriendCard
								key={user.id}
								id={user.id}
								name={`${user.data.name} ${user.data.surname}`}
								image={user.data.image}
								btnText="Add"
							/>
						))}
					{showFriends.length > 0 &&
						showingFriends &&
						showFriends.map((user) => (
							<FriendCard
								key={user.id}
								id={user.id}
								name={`${user.data.name} ${user.data.surname}`}
								image={user.data.image}
								btnText="Delete"
							/>
						))}
					{showFriends.length === 0 && showingFriends && (
						<EmptyFriendSection>
							<img
								src="https://www.facebook.com/images/comet/empty_states_icons/people/null_states_people_gray_wash.svg"
								alt=""
							/>
						</EmptyFriendSection>
					)}
				</FriendsContainer>
			</Content>
		</Container>
	);
};

export default Friends;
