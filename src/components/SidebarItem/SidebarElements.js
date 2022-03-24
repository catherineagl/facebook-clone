import styled from 'styled-components';

export const NavItem = styled.div`
	border-radius: 8px;
	transition: background-color 0.3s ease-in-out;
	a {
		display: flex;
		align-items: center;
		text-decoration: none;
		img {
			width: 36px;
			height: 36px;
			margin: 8px 12px 8px;
			border-radius: 50%;
			object-fit: cover;
		}
		color: #050505;
		font-weight: bold;
	}

	&:hover {
		background-color: #e4e6eb;
	}
`;
