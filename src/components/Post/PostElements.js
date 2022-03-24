import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	margin-bottom: 1rem;
	background-color: #e4e6eb;
	background-color: #fff;
	overflow-x: hidden;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
export const PostHeading = styled.div`
	display: flex;
	align-items: center;
	padding: 1rem;
	padding-bottom: 0;
`;
export const ImgContainer = styled.div`
	width: 36px;
	height: 36px;

	img {
		border-radius: 50%;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const PostInfo = styled.div`
	margin-left: 10px;

	h3 {
		font-size: 15px;
		color: #050505;
	}

	p {
		color: #65676b;
		font-size: 13px;
	}
`;
export const PostDescription = styled.p`
	padding: 1rem;
	font-size: 15px;
	color: #050505;
`;
export const PostMedia = styled.div`
	width: 100%;
	background-color: #444;
	margin: auto;
	display: flex;
	justify-content: center;
	cursor: pointer;
	img {
		width: 500px;
		object-fit: contain;
		margin: auto;
	}
`;
export const PostOptions = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
export const PostInteractions = styled.div`
	padding: 0.5rem 1rem;
`;
export const InteractionsCount = styled.div`
	display: flex;
	justify-content: space-between;
`;
export const PostLikes = styled.div`
	display: flex;
	align-items: center;
	padding: 0.5rem 0;
	span {
		font-size: 15px;
		color: #65676b;
		margin-left: 5px;
	}
	img {
		width: 20px;
	}
`;
export const PostComments = styled.div`
	font-size: 15px;
	color: #65676b;
	margin-left: 5px;
	padding: 0.5rem 0;
`;
export const ButtonInteraction = styled.button`
	display: flex;
	justify-content: center;
	padding: 0.5rem;
	background-color: transparent;
	border: none;
	outline: none;
	font-size: 18px;
	color: #65676b;
	border-radius: 8px;
	cursor: pointer;
	width: 30%;

	&.liked {
		color: #1b74e4 !important;
		font-weight: bold;
	}

	transition: background-color 0.3s;
	span {
		margin-left: 5px;
	}

	&:hover {
		background-color: #f2f2f2;
	}
`;
export const LineSeparator = styled.div`
	width: 100%;
	border-bottom: 1px solid #ccd0d5;
	margin: 5px 0;
`;

//Comments section

export const WriteComment = styled.div`
	display: flex;
	margin: 1rem 0;
	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
`;
export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 32px;
	background-color: #f0f2f5;
	padding: 0.8rem;
	color: #606770;
	border-radius: 50px;
	flex: 1;
	margin-left: 5px;

	input {
		background-color: transparent;
		border: none;
		outline: none;
		font-size: 16px;
		width: 80%;
	}
`;
export const CommentActions = styled.div`
	> * {
		font-size: 20px;
		margin: 0 2px;
		cursor: pointer;
	}
`;

export const CommentsSection = styled.div`
	display: flex;
	flex-direction: column;
`;
export const Comment = styled.div`
	display: flex;
	margin: 0.5rem 0;
`;
export const UserInfo = styled.div`
	display: flex;
	img {
		width: 32px;
		height: 32px;
		border-radius: 50%;
	}
`;
export const UserComment = styled.div`
	margin-left: 10px;
	color: #050505;
	h4 {
		font-size: 13px;
	}
	p {
		padding-top: 4px;
		font-size: 15px;
	}
	background-color: #f0f2f5;
	border-radius: 15px;
	padding: 0.5rem 1rem;
	max-width: fit-content;
`;
