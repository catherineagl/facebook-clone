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
	ButtonContainer,
	ErrorContainer,
} from './RegisterElements';
import { AiOutlineClose } from 'react-icons/ai';
import { days, months, years } from '../../utils/dates';
import { initialFormRegister, validationsForm } from '../../utils/validateForm';
import { useForm } from '../../hooks/useForm';
import { MdInfo } from 'react-icons/md';

const Register = ({ setRegister }) => {
	const {
		form,
		errors,
		loading,
		handleChange,
		handleSubmit,
		handleBlur,
		handleRadioChange,
		handleRadioBlur,
	} = useForm(initialFormRegister, validationsForm);

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
				<Form onSubmit={handleSubmit}>
					<DoubleInput>
						<div>
							<input
								type="text"
								placeholder="First name"
								name="name"
								value={form.name}
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.name ? 'error' : ''}
							/>
							{errors.name && (
								<ErrorContainer title={errors.name}>
									<MdInfo />
								</ErrorContainer>
							)}
						</div>

						<div>
							<input
								type="text"
								placeholder="Surname"
								name="surname"
								value={form.surname}
								onChange={handleChange}
								onBlur={handleBlur}
								className={errors.surname ? 'error' : ''}
							/>
							{errors.surname && (
								<ErrorContainer title={errors.surname}>
									<MdInfo />
								</ErrorContainer>
							)}
						</div>
					</DoubleInput>
					<InputContainer>
						<input
							type="email"
							name="email"
							value={form.email}
							placeholder="Email address"
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.email ? 'error' : ''}
						/>
						{errors.email && (
							<ErrorContainer title={errors.email}>
								<MdInfo />
							</ErrorContainer>
						)}
					</InputContainer>
					<InputContainer>
						<input
							type="password"
							name="password"
							value={form.password}
							placeholder="New Password"
							onChange={handleChange}
							onBlur={handleBlur}
							className={errors.password ? 'error' : ''}
						/>
						{errors.password && (
							<ErrorContainer title={errors.password}>
								<MdInfo />
							</ErrorContainer>
						)}
					</InputContainer>
					<InputContainerMultiple>
						<div>
							Date of birth{' '}
							{errors.age && (
								<ErrorContainer title={errors.age}>
									<MdInfo />
								</ErrorContainer>
							)}
						</div>
						<SelectWrapper>
							<span className={errors.age ? 'error' : ''}>
								<select
									name="birthDay"
									id="day"
									title="Day"
									value={form.birthDay}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option value="" defaultValue disabled>
										Day
									</option>
									{days.map((day, i) => (
										<option value={day} key={'d-' + i}>
											{day}
										</option>
									))}
								</select>
							</span>
							<span className={errors.age ? 'error' : ''}>
								<select
									name="birthMonth"
									id="month"
									title="Month"
									value={form.birthMonth}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option value="" defaultValue disabled>
										Month
									</option>
									{months.map((month, i) => (
										<option value={month} key={'m-' + i}>
											{month}
										</option>
									))}
								</select>
							</span>
							<span className={errors.age ? 'error' : ''}>
								<select
									name="birthYear"
									id="year"
									title="Year"
									value={form.birthYear}
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option value="" defaultValue disabled>
										Year
									</option>
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
						<div>
							Gender{' '}
							{errors.sex && (
								<ErrorContainer title={errors.sex}>
									<MdInfo />
								</ErrorContainer>
							)}
						</div>
						<SelectWrapper
							id="sex"
							onChange={handleRadioChange}
							onBlur={handleRadioBlur}
						>
							<span className={errors.sex ? 'error' : ''}>
								<label htmlFor="female">Female</label>
								<input type="radio" id="female" name="sex" />
							</span>
							<span className={errors.sex ? 'error' : ''}>
								<label htmlFor="male">Male</label>
								<input type="radio" id="male" name="sex" />
							</span>
							<span className={errors.sex ? 'error' : ''}>
								<label htmlFor="custom">Custom</label>
								<input type="radio" id="custom" name="sex" />
							</span>
						</SelectWrapper>
					</InputContainerMultiple>
					{form.sex === 'custom' && (
						<>
							<InputContainer>
								<select
									name="pronoun"
									onChange={handleChange}
									onBlur={handleBlur}
								>
									<option value="" defaultValue disabled>
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
								<input
									type="text"
									name="custom"
									value={form.custom}
									onChange={handleChange}
									placeholder="Gender (optional)"
								/>
							</InputContainer>
						</>
					)}

					<Info>
						By clicking Sign Up, you agree to our Terms, Data Policy and Cookie
						Policy. You may receive SMS notifications from us and can opt out at
						any time.
					</Info>
					<ButtonContainer>
						<Button>Sign Up</Button>
					</ButtonContainer>
				</Form>
			</RegisterModal>
		</Container>
	);
};

export default Register;
