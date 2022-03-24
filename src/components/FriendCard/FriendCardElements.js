import styled from 'styled-components';

export const CardContainer = styled.div`
	max-width: 250px;
	min-width: 200px;
	background-color: white;
	border-radius: 10px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-right: 1rem;
	margin-top: 1rem;
`;
export const CardHeader = styled.div`
	width: 100%;
	height: 60%;

	img {
		width: 100%;
		object-fit: cover;
	}
`;

export const CardContent = styled.div`
	padding: 0 1rem;
	padding-bottom: 1rem;
`;
export const UserName = styled.h2`
	padding: 0.5rem 0;
	font-size: 1rem;
`;

export const AddBtn = styled.button`
	width: 100%;
	border: none;
	outline: none;
	border-radius: 6px;
	font-size: 1rem;
	padding: 0.25rem;
	cursor: pointer;
	color: #1877f2;
	background-color: #e7f3ff;
	font-weight: bold;
`;
