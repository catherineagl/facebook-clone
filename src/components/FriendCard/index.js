import {
	arrayRemove,
	arrayUnion,
	doc,
	getDoc,
	updateDoc,
} from 'firebase/firestore';
import React, { useState } from 'react';
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
	selectShowFriends,
	selectUserNoFriends,
	setNewFriend,
	setUpdate,
} from '../../features/friends/friendsSlice';

const FriendCard = ({ id, name, image, btnText }) => {
	//const [update, setUpdate] = useState(false);
	const userId = useSelector(selectUserId);
	const userFriends = useSelector(selectShowFriends);
	const noFriends = useSelector(selectUserNoFriends);

	const dispatch = useDispatch();

	const addFriend = async () => {
		const userData = doc(db, 'users', userId);
		//const user = await getDoc(userData);
		const friendData = doc(db, 'users', id);
		console.log('intento de actualizacion');
		try {
			await updateDoc(userData, {
				friends: arrayUnion(id),
			});
			await updateDoc(friendData, {
				friends: arrayUnion(userId),
			});
			dispatch(setUpdate(true));

			console.log('ya actualizamos');
		} catch (error) {
			console.log(error);
		}
		dispatch(setUpdate(false));
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
			dispatch(setUpdate(true));
		} catch (error) {
			console.log(error);
		}

		dispatch(setUpdate(false));
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
