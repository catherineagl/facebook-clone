import styled from 'styled-components';
import { BsFacebook } from 'react-icons/bs';
import { BsSearch } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import { NavLink } from 'react-router-dom';

export const Container = styled.header`
	position: sticky;
	top: 0;
	right: 0;
	left: 0;
	height: 60px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: 0px 0px 10px -4px #777;
	z-index: 1000;
	background-color: white;
	padding: 0 5px;
`;
export const Logo = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 290px;
`;

export const FacebookLogo = styled(BsFacebook)`
	width: 40px;
	height: 40px;
	color: #1b74e4;
	flex: 0.2;
`;
export const SearchContainer = styled.div`
	border-radius: 50px;
	display: flex;
	align-items: center;
	flex: 0.8;

	height: 40px;
	background-color: #f0f2f5;
	padding: 0.8rem;
	color: #606770;

	input {
		border: none;
		outline: none;
		background-color: transparent;
		font-size: 1rem;
	}
`;

export const SearchIcon = styled(BsSearch)`
	margin-right: 5px;
`;

export const NavSection = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	height: 50px;
	position: relative;
`;

export const NavItem = styled.li`
	margin: 0 5px;
	position: relative;
	transition: background-color 0.3s;
	padding: 0.6rem 0;
	svg {
		font-size: 30px;
		color: #858689;
	}

	&:hover {
		background-color: #f0f2f5;
		border-radius: 10px;
	}

	.active {
		&:after {
			content: '';
			position: absolute;
			bottom: -5px;
			left: 0;
			width: 100%;
			border-bottom: 4px solid #1b74e4;
			border-radius: 1px;
			opacity: 1;
		}

		svg {
			color: #1b74e4;
		}
	}
`;

export const StyledLink = styled(NavLink)`
	width: 100%;
	padding: 0.6rem 2.5rem;
`;
export const MenuGrid = styled(CgMenuGridO)``;

export const NavItemRounded = styled.li`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #f0f2f5;
	padding: 0.25rem;
	border-radius: 50%;
	margin: 0 5px;
	cursor: pointer;
	box-sizing: border-box;
	width: 40px;
	height: 40px;
	transition: background-color 0.3s;
	svg {
		font-size: 1.5rem;
	}

	&:hover {
		background-color: #e4e6eb;
	}
`;
export const ProfileLink = styled.li`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 36px;
	width: fit-content;
	padding: 0.5rem 0.7rem 0.5rem 0.25rem;
	border-radius: 50px;
	margin: auto;
	margin-right: 5px;
	transition: background-color 0.3s;

	img {
		width: 28px;
		height: 28px;
		object-fit: cover;
		border-radius: 50%;
		margin-right: 7px;
	}
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		color: #050505;
	}
	p {
		display: inline-block;
	}

	&:hover {
		background-color: #f0f2f5;
	}
`;
