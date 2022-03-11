import React from 'react';
import { Wrapper, StorieImg, ThumbImg, Content } from './StorieElements';

const Storie = ({ profilePic, img, userName }) => {
	return (
		<Wrapper>
			<StorieImg src={img} alt="" />
			<Content>
				<ThumbImg>
					<img src={profilePic} alt="" />
				</ThumbImg>

				<h4>{userName}</h4>
			</Content>
		</Wrapper>
	);
};

export default Storie;
