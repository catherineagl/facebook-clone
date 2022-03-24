import React from 'react';
import {
	AddBtn,
	CardContainer,
	CardContent,
	CardHeader,
	UserName,
} from './FriendCardElements';

const FriendCard = () => {
	return (
		<CardContainer>
			<CardHeader>
				<img
					src="https://mascotafiel.com/wp-content/uploads/2014/03/pitbull-portada.jpg"
					alt=""
				/>
			</CardHeader>
			<CardContent>
				<UserName>Peponga</UserName>
				<AddBtn>Add</AddBtn>
			</CardContent>
		</CardContainer>
	);
};

export default FriendCard;
