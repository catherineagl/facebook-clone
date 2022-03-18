import { GrClose } from 'react-icons/gr';

import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	background-color: #050505;
	z-index: 2000;
	display: flex;
	justify-content: space-between;
`;

export const CloseBtn = styled(GrClose)`
	color: white;
	font-size: 1.5rem;
	border-radius: 50%;
	cursor: pointer;
	path {
		stroke: white;
	}
`;
export const ImgFullView = styled.div`
	flex: 0.85;
`;

export const FullImgContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: auto;
	img {
		object-fit: contain;
	}
`;
export const FullViewActions = styled.div`
	padding: 0.5rem;
	display: flex;
	align-items: center;
	> * {
		margin: 0 0.25rem;
	}

	img {
		width: 60px;
		height: 60px;
	}
`;
export const PostSection = styled.div`
	background-color: white;
	display: flex;
	flex-direction: column;
	align-items: left;
	flex: 0.25;
	ul {
		margin-left: auto;
	}
`;
export const Post = styled.div`
	border-top: 1px solid #ccd0d5;
`;
