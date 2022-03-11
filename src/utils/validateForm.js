export const initialFormRegister = {
	name: '',
	surname: '',
	email: '',
	password: '',
	birthDay: '',
	birthMonth: '',
	birthYear: '',
	sex: '',
	pronoun: '',
	custom: '',
};

export const intialFormLogin = {
	email: '',
	password: '',
};

export const validationsForm = (form) => {
	let errors = {};
	let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
	let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
	let regexPassword = /^.{6,15}$/;
	let birthday = new Date([form.birthYear, form.birthMonth, form.birthDay]);
	let today = new Date();

	if (!form.name.trim()) {
		errors.name = "What's your name?";
	} else if (!regexName.test(form.name.trim())) {
		errors.name =
			"It looks like you've entered the wrong info. Please make sure that you use your real name";
	}

	if (!form.surname.trim()) {
		errors.surname = "What's your name?";
	} else if (!regexName.test(form.surname.trim())) {
		errors.surname =
			"It looks like you've entered the wrong info. Please make sure that you use your real name";
	}

	if (!form.email.trim()) {
		errors.email =
			"You'll use this when log in and if you ever need to reset your password";
	} else if (!regexEmail.test(form.email.trim())) {
		errors.email = 'Please enter a valid email address';
	}

	if (!form.password.trim()) {
		errors.password =
			'Enter a combination of at least six numbers, letters and punctuations marks (such as ! and &).';
	} else if (!regexPassword.test(form.password.trim())) {
		errors.password =
			'Enter a combination of at least six numbers, letters and punctuations marks (such as ! and &).';
	}

	if (today.getFullYear() - birthday.getFullYear() < 18) {
		if (today.getFullYear() - birthday.getFullYear() === 17) {
			if (today.getMonth() >= birthday.getMonth()) {
				if (today.getDate() < birthday.getDate()) {
					errors.age =
						"It looks like you've entered the wrong info. Please make sure that you use your real date of birth";
				}
			} else
				errors.age =
					"It looks like you've entered the wrong info. Please make sure that you use your real date of birth";
		} else
			errors.age =
				"It looks like you've entered the wrong info. Please make sure that you use your real date of birth";
	}

	if (!form.sex) {
		errors.sex = 'must select gender';
	}
	if (!form.birthDay || !form.birthMonth || !form.birthYear) {
		errors.age =
			"It looks like you've entered the wrong info. Please make sure that you use your real date of birth";
	}
	return errors;
};
