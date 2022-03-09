import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Register from '../Register';
import {
	ButtonLogin,
	Column,
	Container,
	Content,
	Description,
	ForgotPass,
	Form,
	LineSeparator,
	Logo,
	ButtonRegister,
	InputContainer,
	ButtonContainer,
} from './LoginElements';

const Login = () => {
	const [register, setRegister] = useState(false);

	return (
		<>
			<Container>
				<Content>
					<Column>
						<Logo>
							<img
								src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
								alt="logo"
							/>
							<Description>
								Facebook helps you connect and share with the people in your
								life.
							</Description>
						</Logo>
					</Column>

					<Column>
						<Form>
							<InputContainer>
								<input type="text" placeholder="Email address" name="email" />
								<input type="password" placeholder="Password" name="password" />
							</InputContainer>
							<ButtonContainer>
								<ButtonLogin>Log in</ButtonLogin>
							</ButtonContainer>
							<ForgotPass>
								<Link to="/forgotpass">
									<small>Forgotten password?</small>
								</Link>
							</ForgotPass>
							<LineSeparator />
							<ButtonContainer>
								<ButtonRegister
									onClick={(e) => {
										e.preventDefault();
										setRegister(true);
									}}
								>
									Create New Account
								</ButtonRegister>
							</ButtonContainer>
						</Form>
					</Column>
				</Content>
			</Container>
			{register && <Register setRegister={setRegister} />}
		</>
	);
};

export default Login;
