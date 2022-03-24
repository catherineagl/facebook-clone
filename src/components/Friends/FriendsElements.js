import styled from 'styled-components';
import { FaUserFriends } from 'react-icons/fa';
import { IoPersonAdd } from 'react-icons/io5';

export const Container = styled.div``;
export const Sidebar = styled.div`
	background-color: white;
	box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.1), 3px 0px 10px rgba(0, 0, 0, 0.1);
	position: fixed;
	height: 100%;
	width: 360px;
	padding: 1rem;

	h2 {
		padding-bottom: 1rem;
	}
`;

export const FriendIcon = styled(FaUserFriends)`
	font-size: 1.5rem;
`;
export const AddFriendIcon = styled(IoPersonAdd)`
	font-size: 1.5rem;
`;
export const Item = styled.div`
	padding: 0.5rem 0.25rem;
	color: #050505;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: 0.3s;
	border-radius: 8px;

	span {
		font-size: 1.2rem;
		margin-left: 8px;
	}

	&:hover {
		background-color: #f2f2f2;
	}
`;

export const IconContainer = styled.div`
	background-color: #d8dadf;
	border-radius: 50%;
	padding: 0.5rem;
`;

export const Content = styled.div`
	margin-left: 360px;
	background-color: #f0f2f5;
	padding: 2rem;
	min-height: calc(100vh - 60px);
	> h2 {
		margin-bottom: 1.5rem;
		font-size: 1.3rem;
	}
`;

export const FriendsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
