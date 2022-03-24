import styled from 'styled-components';
import { BsCameraFill } from 'react-icons/bs';

export const Camera = styled(BsCameraFill)``;

export const Container = styled.div`
	width: 100%;
	background-color: #f0f2f5;
`;
export const ProfileContainer = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: auto;
	background-color: white;
`;
export const ProfileCover = styled.div`
	width: 940px;
	height: 350px;
	position: relative;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	button {
		display: flex;
		align-items: center;
		position: absolute;
		bottom: 1rem;
		right: 2rem;
		padding: 6px;
		color: #050505;
		font-size: 0.9rem;
		font-weight: 600;
		border-radius: 6px;
		border: none;
		outline: none;
		background-color: #fff;
		cursor: pointer;

		& ${Camera} {
			margin-right: 4px;
			font-size: 1.1rem;
		}
	}
`;
export const ProfileInfo = styled.div`
	display: flex;
	//position: relative;
	padding: 2rem;

	h2 {
		color: #050505;
		font-weight: bold;
		font-size: 2rem;
		margin-left: 190px;
	}
`;

export const ProfileHeader = styled.div``;
export const Content = styled.div`
	width: 940px;
	padding: 0 2rem;
	margin: auto;
	display: grid;
	grid-template-columns: 40% 60%;
`;

export const UserDetails = styled.div``;
export const UserPosts = styled.div``;
export const CameraButton = styled.button`
	display: flex;
	align-items: center;
	background-color: #e4e6eb;
	padding: 0.5rem;
	border-radius: 50%;
	position: absolute;
	bottom: -40px;
	right: 0;
	border: none;
	outline: none;
	cursor: pointer;
	& ${Camera} {
		font-size: 1.5rem;
	}
`;
export const ImgContainer = styled.div`
	position: absolute;
	width: 168px;
	img {
		object-fit: cover;
		width: 168px;
		height: 168px;
		border-radius: 50%;
		border: 4px solid white;
		position: absolute;
		box-sizing: content-box;
		top: -100%;
		transform: translateY(-75%);
	}
`;
