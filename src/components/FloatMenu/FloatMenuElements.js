import styled from 'styled-components';

export const Container = styled.div`
	position: absolute;
	top: 60px;
	right: 1rem;
	background-color: white;
	width: 360px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
	border-radius: 6px;
	padding: 1rem;

	a {
		color: #050505;
		text-decoration: none;
	}
`;
export const MenuHeader = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	transition: 0.3s;
	padding: 0.5rem 0.25rem;
	h2 {
		font-size: 1rem;
	}

	p {
		color: #65676b;
		font-size: 0.9rem;
	}
	&:hover {
		background-color: #f2f2f2;
	}
`;
export const ImgContainer = styled.div`
	width: 60px;
	height: 60px;
	border-radius: 50%;

	img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}
`;
export const HeaderInfo = styled.div`
	margin-left: 1rem;
`;
export const LineSeparator = styled.div`
	border-bottom: 2px solid #ced0d4;
	margin: 0.5rem 0;
`;
export const LinkAction = styled.div`
	padding: 0.5rem;
	display: flex;
	align-items: center;
	cursor: pointer;
	border-radius: 8px;
	transition: 0.3s;
	span {
		margin-left: 10px;
	}

	&:hover {
		background-color: #f2f2f2;
	}
`;

export const IconContainer = styled.div`
	background-color: #e4e6eb;
	border-radius: 50%;
	padding: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`;
