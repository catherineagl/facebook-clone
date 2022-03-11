import styled from 'styled-components';
import { FiArrowRight } from 'react-icons/fi';

export const Container = styled.main`
	max-width: 100vw;
	background-color: #f0f2f5;
	min-height: 100vh;
	display: grid;
	padding: 15px 5px 5px;
	grid-template-columns: 360px 1fr 360px;
`;
export const Section = styled.section``;

export const PromoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 0.7rem;
	height: 100%;

	h4 {
		font-size: 0.9rem;
		padding: 0.5rem 0;
	}

	span {
		font-size: 0.8rem;
		color: #65676b;
	}
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 0.5rem;
	border-radius: 8px;
	margin-right: 0.5rem;
	transition: background-color 0.3s;
	&:hover {
		background-color: #e4e6eb;
	}
`;

export const ImgContainer = styled.div`
	width: 120px;
	max-height: 120px;
	display: flex;
	align-items: center;
	img {
		width: 100%;
		border-radius: 8px;
	}
`;

export const SidebarTitle = styled.h3`
	color: #65676b;
	font-weight: bold;
	font-size: 1.1rem;
	padding-bottom: 0.5rem;
`;

export const Sidebar = styled.div`
	position: fixed;

	p {
		color: #65676b;
		font-size: 12px;
		margin-top: 20px;
		border-top: 1px solid #ccd0d5;
		padding-top: 20px;
	}
`;

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	width: 600px;
	max-width: 600px;
	margin: 0 auto;
`;

export const NavItem = styled.div``;
export const Stories = styled.div`
	display: flex;
	position: relative;
`;

export const ArrowContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	right: 0;
	top: 50%;
	transform: translate(40%, -50%);
	z-index: 100;
	background-color: white;
	border-radius: 50%;
	border: 1px solid #ccd0d5;
	padding: 0.2rem;
	cursor: pointer;
	transition: background-color 0.3s;

	&:hover {
		background-color: #e4e6eb;
	}
`;
export const RightArrow = styled(FiArrowRight)`
	font-size: 1.5rem;
	color: #65676b;
`;

export const LineSeparator = styled.div`
	width: 100%;
	border-bottom: 1px solid #ccd0d5;
	margin-top: 1rem;
`;

export const Posts = styled.div`
	width: 100%;
`;
