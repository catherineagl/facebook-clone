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

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
	const [register, setRegister] = useState(false);

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!email) return;
		if (!password) return;

		const auth = getAuth();
		try {
			await signInWithEmailAndPassword(auth, email, password);
		} catch (error) {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(`Error ${errorCode}: ${errorMessage}`);
		}
	};

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
						<Form onSubmit={handleSubmit}>
							<InputContainer>
								<input
									type="text"
									placeholder="Email address"
									name="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<input
									type="password"
									placeholder="Password"
									name="password"
									value={password}
									onChange={(e) => setPassword(e.target.value)}
								/>
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
