import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { MdPermMedia } from 'react-icons/md';

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1c1e21;
	z-index: 1001;
`;

export const Content = styled.div`
	position: relative;
	width: 480px;
	background-color: white;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1rem;
`;

export const UserInfo = styled.div`
	display: flex;
	width: 100%;
	height: max-content;
	align-items: center;
	flex: 0.2;
	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		margin-right: 10px;
	}
`;
export const PostContainer = styled.div`
	position: relative;
	flex: 0.7;
`;
export const InputContainer = styled.div`
	margin: 2rem 0;
	width: 100%;
	display: flex;
	justify-content: space-between;

	input {
		border: none;
		background-color: transparent;
		outline: none;
		font-size: 1rem;
		flex: 1;
	}
`;
export const Emoticon = styled(RiEmotionHappyLine)`
	font-size: 1.5rem;
	color: #e4e6eb;
	cursor: pointer;
`;

export const MediaContainer = styled.div`
	position: relative;
	border: 1px solid #ccd0d5;
	padding: 0.5rem;
	border-radius: 8px;
	height: 300px;
	overflow-y: auto;

	> img {
		width: 100%;
		height: auto;
		object-fit: cover;
		text-align: center;
		border-radius: 8px;
	}
	> button {
		height: 100%;
		width: 100%;
		cursor: pointer;
		border: none;
		outline: none;
		border-radius: 8px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		background-color: #f0f2f5;
		transition: background-color 0.3s;

		span {
			font-size: 1.3rem;
		}

		&:hover {
			background-color: #eaebed;
		}
	}

	&::-webkit-scrollbar {
		width: 20px;
	}

	&::-webkit-scrollbar-track {
		background-color: transparent;
	}

	&::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
		border-radius: 20px;
	}
	&::-webkit-scrollbar-thumb {
		background-color: #d6dee1;
		border-radius: 20px;
		border: 6px solid transparent;
		background-clip: content-box;
	}
`;
export const Media = styled(MdPermMedia)`
	font-size: 2rem;
`;

export const ButtonSend = styled.button`
	padding: 12px;
	background-color: #1b74e4;
	color: white;
	font-size: 1rem;
	border-radius: 8px;
	border: none;
	outline: none;
	margin-top: 1rem;
	font-weight: bold;
	cursor: pointer;
	transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
		200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
		200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;

	&:hover {
		background-color: #166fe5;
		border-color: #365899;
	}
`;

export const Title = styled.h2`
	position: relative;
	width: 100%;
	text-align: center;
	padding: 1rem 0;
	border-bottom: 1px solid #ccd0d5;
	font-size: 1.4rem;
`;

export const CloseBtn = styled(GrClose)`
	position: absolute;
	right: 1rem;
	top: 1rem;
	background-color: #e4e6eb;
	border-radius: 50%;
	padding: 0.5rem;
	font-size: 2.2rem;
	cursor: pointer;
	transform: translateY(-10%);
	color: #5b626a;
	transition: background-color 0.3s;
	&:hover {
		background-color: #d8dadf;
	}
`;
