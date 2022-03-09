import React, { useState } from 'react';
import {
	Container,
	RegisterModal,
	Header,
	Form,
	DoubleInput,
	InputContainer,
	InputContainerMultiple,
	SelectWrapper,
	Info,
	Button,
} from './RegisterElements';
import { AiOutlineClose } from 'react-icons/ai';
import { days, months, years } from '../../utils/dates';

const Register = ({ setRegister }) => {
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [birth, setBirth] = useState([]);
	const [birthDay, setBirthday] = useState(null);
	const [birthMoth, setBirthMonth] = useState(null);
	const [birthYear, setBirthYear] = useState(null);
	const [gender, setGender] = useState(null);

	return (
		<Container>
			<RegisterModal>
				<Header>
					<h1>
						<span>Sign Up</span>{' '}
						<AiOutlineClose
							onClick={(e) => {
								e.preventDefault();
								setRegister(false);
							}}
						/>
					</h1>
					<h3>It's quick and easy.</h3>
				</Header>
				<Form>
					<DoubleInput>
						<input
							type="text"
							placeholder="First name"
							name="name"
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							type="text"
							placeholder="Surname"
							name="lastName"
							onChange={(e) => setSurname(e.target.value)}
						/>
					</DoubleInput>
					<InputContainer>
						<input
							type="email"
							name="email"
							placeholder="Email address"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</InputContainer>
					<InputContainer>
						<input
							type="password"
							name="password"
							placeholder="New Password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</InputContainer>
					<InputContainerMultiple>
						<div>Date of birth</div>
						<SelectWrapper>
							<span>
								<select
									name="birthday_day"
									id="day"
									title="Day"
									onChange={(e) => setBirthday(e.target.value)}
								>
									{days.map((day, i) => (
										<option value={day} key={'d-' + i}>
											{day}
										</option>
									))}
								</select>
							</span>
							<span>
								<select
									name="birthday_month"
									id="month"
									title="Month"
									onChange={(e) => setBirthMonth(e.target.value)}
								>
									{months.map((month, i) => (
										<option value={month} key={'m-' + i}>
											{month}
										</option>
									))}
								</select>
							</span>
							<span>
								<select
									name="birthday_year"
									id="year"
									title="Year"
									onChange={(e) => setBirthYear(e.target.value)}
								>
									{years.map((year, i) => (
										<option value={year} key={'y-' + i}>
											{year}
										</option>
									))}
								</select>
							</span>
						</SelectWrapper>
					</InputContainerMultiple>
					<InputContainerMultiple>
						<div>Gender</div>
						<SelectWrapper id="sex">
							<span>
								<label htmlFor="female">Female</label>
								<input
									type="radio"
									id="female"
									name="sex"
									onChange={(e) =>
										setGender(e.target.value === 'on' && 'female')
									}
								/>
							</span>
							<span>
								<label htmlFor="male">Male</label>
								<input
									type="radio"
									id="male"
									name="sex"
									onChange={(e) => setGender(e.target.value === 'on' && 'male')}
								/>
							</span>
							<span>
								<label htmlFor="custom">Custom</label>
								<input
									type="radio"
									id="custom"
									name="sex"
									onChange={(e) =>
										setGender(e.target.value === 'on' && 'custom')
									}
								/>
							</span>
						</SelectWrapper>
					</InputContainerMultiple>
					{gender === 'custom' && (
						<>
							<InputContainer>
								<select name="pronoun">
									<option value="" selected disabled>
										Select your pronoun
									</option>
									<option value="she">She: "Wish her a happy birthday"</option>
									<option value="he">He: "Wish him a happy birthday"</option>
									<option value="they">
										They: "Wish them a happy birthday"
									</option>
								</select>
							</InputContainer>
							<InputContainer>
								<input type="text" placeholder="Gender (optional)" />
							</InputContainer>
						</>
					)}

					<Info>
						By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
						Policy. You may receive SMS notifications from us and can opt out at
						any time.
					</Info>
					<Button>Sign Up</Button>
				</Form>
			</RegisterModal>
		</Container>
	);
};

export default Register;
