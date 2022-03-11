import styled from 'styled-components';
import { RiVideoAddFill } from 'react-icons/ri';
import { IoImagesOutline } from 'react-icons/io5';
import { BiHappyAlt } from 'react-icons/bi';

export const Container = styled.div`
	width: 100%;
	height: 150px;
	margin: 2rem 0;
	padding: 1rem;
	background-color: white;
	border-radius: 8px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const RowInfo = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	padding-bottom: 1rem;
	border-bottom: 1px solid #ccd0d5;

	img {
		width: 40px;
		height: 40px;
		border-radius: 50%;
	}
	input {
		flex: 1;
		margin-left: 10px;
		border: none;
		border-radius: 30px;
		background-color: #f0f2f5;
		padding: 0.5rem 1rem;
		font-size: 1.1rem;
		outline: none;
		transition: background-color 0.3s;
		cursor: pointer;
		&:hover {
			background-color: #e4e6e8;
		}
	}
`;
export const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;
export const Button = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	padding: 0.5rem;
	transition: background-color 0.3s;
	cursor: pointer;
	border-radius: 8px;

	svg {
		font-size: 1.8rem;
		margin-right: 10px;
	}

	span {
		color: #65676b;
		font-weight: normal;
	}

	&:hover {
		background-color: #e4e6eb;
	}
`;

export const Video = styled(RiVideoAddFill)`
	color: #f3425f;
`;

export const Image = styled(IoImagesOutline)`
	color: #45bd62;
`;

export const Happy = styled(BiHappyAlt)`
	color: #f7b928;
`;
