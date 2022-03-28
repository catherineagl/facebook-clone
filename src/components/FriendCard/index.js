import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import React from 'react';
import {
	AddBtn,
	CardContainer,
	CardContent,
	CardHeader,
	UserName,
} from './FriendCardElements';
import db from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserId } from '../../features/auth/authSlice';
import {
	addUserFriends,
	deleteUserFriends,
	selectUserFriends,
} from '../../features/friends/friendsSlice';

const FriendCard = ({ id, name, image, btnText }) => {
	const userId = useSelector(selectUserId);
	const userFriends = useSelector(selectUserFriends);

	const dispatch = useDispatch();

	const addFriend = async () => {
		const userData = doc(db, 'users', userId);
		const friendData = doc(db, 'users', id);
		try {
			await updateDoc(userData, {
				friends: arrayUnion(id),
			});
			await updateDoc(friendData, {
				friends: arrayUnion(userId),
			});
		} catch (error) {
			console.log(error);
		}
		dispatch(addUserFriends({ id: id, friends: userFriends }));
	};

	const deleteFriend = async () => {
		const userData = doc(db, 'users', userId);
		const friendData = doc(db, 'users', id);
		try {
			await updateDoc(userData, {
				friends: arrayRemove(id),
			});
			await updateDoc(friendData, {
				friends: arrayRemove(userId),
			});
		} catch (error) {
			console.log(error);
		}
		dispatch(deleteUserFriends(id));
	};

	return (
		<CardContainer>
			<CardHeader>
				<img src={image} alt="" />
			</CardHeader>
			<CardContent>
				<UserName>{name}</UserName>
				<AddBtn onClick={btnText === 'Add' ? addFriend : deleteFriend}>
					{btnText}
				</AddBtn>
			</CardContent>
		</CardContainer>
	);
};

export default FriendCard;
