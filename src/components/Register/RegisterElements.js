import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	bottom: 0;
	background-color: rgba(255, 255, 255, 0.8);
	display: flex;
	justify-content: center;
	align-items: center;
	color: #1c1e21;
`;
export const RegisterModal = styled.div`
	width: 480px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
`;
export const Header = styled.div`
	padding: 10px 16px;
	h1 {
		font-size: 32px;
		line-height: 38px;
		margin-bottom: 0;
		display: flex;
		justify-content: space-between;
		svg {
			cursor: pointer;
			font-size: 1.5rem;
		}
	}
	h3 {
		color: #606770;
		font-size: 15px;
		line-height: 24px;
	}
	border-bottom: 1px solid #ccd0d5;
	margin-bottom: 10px;
`;
export const Form = styled.div`
	width: 95%;
	margin: auto;
`;
export const DoubleInput = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	margin: auto;
	input {
		border-radius: 5px;
		font-size: 16px;
		line-height: 16px;
		padding: 12px;
		outline: none;
		border: 1px solid #ccd0d5;
		background-color: #f0f2f5;

		&:placeholder {
			color: #8d949e;
		}
	}
	margin: 20px 0;
`;
export const InputContainer = styled.div`
	input {
		border-radius: 5px;
		padding: 12px;
		line-height: 16px;
		font-size: 16px;
		width: 100%;
		border: 1px solid #ccd0d5;
		background-color: #f0f2f5;
	}

	select {
		background-color: #fff;
		border: 1px solid #ccd0d5;
		border-radius: 4px;
		font-size: 16px;
		font-weight: normal;
		line-height: 20px;
		width: 100%;
		padding: 12px;
	}
	margin: 20px 0;
`;
export const InputContainerMultiple = styled.div`
	color: #606770;
	font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
	font-size: 14px;
	font-weight: normal;
	line-height: 20px;
	margin-bottom: 0;
	margin-top: 2px;
`;

export const SelectWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;

	span {
		background-color: #fff;
		border: 1px solid #ccd0d5;
		display: inline-block;
		flex: 1 0 auto;
		font-weight: normal;
		height: 36px;
		margin: 8px 6px 6px;
		padding: 0;
		position: relative;
		width: auto;
		border-radius: 5px;
	}

	label {
		box-sizing: border-box;
		color: #1c1e21;
		display: inline-block;
		font-size: 15px;
		line-height: 36px;
		padding: 0 28px 0 10px;
		width: 100%;
	}

	input {
		height: 36px;
		margin: 0;
		position: absolute;
		right: 10px;
		top: 0;
	}

	select {
		border-radius: 4px;
		color: #1c1e21;
		font-family: SFProText-Medium, Helvetica, Arial, sans-serif;
		font-size: 15px;
		font-weight: normal;
		height: 34px;
		line-height: 20px;
		outline: none;
		border: none;
		width: 100%;
	}
`;

export const Info = styled.div`
	width: auto;
	color: #777;
	font-size: 12px;
	margin: 1rem 0;
`;
export const Button = styled.div`
	width: 50%;
	background: none;
	background-color: #00a400;
	border: none;
	border-radius: 6px;
	box-shadow: none;
	color: #fff;
	font-size: 20px;
	font-weight: 600;
	overflow: hidden;
	padding: 5px 40px;
	text-shadow: none;
	line-height: 126%;
	font-weight: bold;
	letter-spacing: normal;
	cursor: pointer;
	margin: 20px auto;
	text-align: center;
	transition: all 0.3s;

	&:hover {
		background: linear-gradient(#79bc64, #578843);
	}
`;
