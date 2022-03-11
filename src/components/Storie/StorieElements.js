import styled from 'styled-components';
export const StorieImg = styled.img``;

export const ThumbImg = styled.div`
	margin: 10px;
	width: 2.5rem;
	height: 2.5rem;
	background-color: #d8dadf;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 2px solid #1b74e4;

	border-radius: 50%;
	img {
		width: 100%;
		border-radius: 50%;
		object-fit: cover;
	}
`;
export const Wrapper = styled.div`
	width: 111px;
	height: 180px;
	background: #e4e6eb;
	margin: 5px;
	border-radius: 8px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	cursor: pointer;
	z-index: 1;

	&storieImg {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		object-fit: cover;
		z-index: -1;
		margin: auto;
	}
`;
export const Content = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	h4 {
		color: white;
		font-size: 14px;
		padding: 5px 7px;
		font-weight: 600;
	}
`;
