import styled from 'styled-components';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	background-color: #f0f2f5;
	justify-content: center;
	margin: 0 auto;
`;
export const Content = styled.div`
	width: 980px;
	display: flex;
	justify-content: center;
	margin: 100px auto;

	@media screen and (max-width: 1080px) {
		flex-direction: column;
		align-items: center;
	}
`;
export const Column = styled.div`
	padding: 30px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 500px;

	@media screen and (max-width: 1080px) {
		padding: 5px;
	}
	@media screen and (max-width: 480px) {
		padding: 0;
		height: auto;
	}
`;
export const Logo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	img {
		width: 400px;
	}

	@media screen and (max-width: 480px) {
		img {
			width: 300px;
		}
	}
`;
export const Description = styled.h2`
	font-size: 28px;
	font-weight: normal;
	line-height: 32px;
	width: 500px;
	margin-left: 45px;
	color: #1c1e21;

	@media screen and (max-width: 768px) {
		font-size: 22px;
		width: 400px;
	}
	@media screen and (max-width: 480px) {
		width: 300px;
		font-size: 18px;
		margin-left: 0;
		text-align: center;
	}
`;
export const Form = styled.form`
	align-items: center;
	background-color: #fff;
	border: none;
	border-radius: 8px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	margin: 40px 0 0;
	padding: 20px 0 28px;
	width: 396px;

	@media screen and (max-width: 480px) {
		width: 320px;
	}
`;

export const ButtonRegister = styled.button`
	margin-top: 6px;
	margin: 0 auto;
	color: white;
	background-color: #42b72a;
	border: none;
	border-radius: 6px;
	font-size: 17px;
	font-weight: bold;
	line-height: 48px;
	padding: 0 16px;
	cursor: pointer;
	text-decoration: none;
	white-space: nowrap;
	transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
		200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
		200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;

	&:hover {
		background-color: #36a420;
		border-color: #36a420;
	}
`;
export const ForgotPass = styled.div`
	text-align: center;
	a {
		text-decoration: none;
		color: #1877f2;
		font-size: 16px;
		font-weight: 500;
	}
`;
export const LineSeparator = styled.div`
	align-items: center;
	border-bottom: 1px solid #dadde1;
	display: flex;
	margin: 20px 16px;
	text-align: center;
`;

export const InputContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 364px;
	margin: 0 auto;
	padding: 6px 0;

	input {
		width: 100%;
		border-radius: 6px;
		font-size: 17px;
		padding: 14px 16px;
		margin: 5px 0;
		line-height: 1.6;
		outline: none;
		border: 1px solid #ccd0d5;
		color: #1d2129;

		&:focus {
			border-color: #1877f2;
			box-shadow: 0 0 0 2px #e7f3ff;
			caret-color: #1877f2;
		}
	}

	@media screen and (max-width: 480px) {
		width: 280px;
	}
`;

export const ButtonLogin = styled.button``;

export const ButtonContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 364px;
	margin: 0 auto;
	padding: 6px 0;
	${ButtonLogin} {
		width: 100%;
		background-color: #1877f2;
		border: none;
		border-radius: 6px;
		font-size: 20px;
		line-height: 48px;
		padding: 0 16px;
		font-weight: bold;
		color: white;
		cursor: pointer;
		transition: 200ms cubic-bezier(0.08, 0.52, 0.52, 1) background-color,
			200ms cubic-bezier(0.08, 0.52, 0.52, 1) box-shadow,
			200ms cubic-bezier(0.08, 0.52, 0.52, 1) transform;
		&:hover {
			background-color: #166fe5;
			border-color: #365899;
		}
	}

	@media screen and (max-width: 480px) {
		width: 280px;
	}
`;
