import { useState } from 'react';

export const useForm = (initialForm, validateForm) => {
	const [form, setForm] = useState(initialForm);
	const [errors, setErrors] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setForm({ ...form, [name]: value });
	};

	const handleRadioChange = (e) => {
		const { name, id } = e.target;
		setForm({ ...form, [name]: id });
	};

	const handleBlur = (e) => {
		handleChange(e);
		setErrors(validateForm(form));
	};
	const handleRadioBlur = (e) => {
		handleRadioChange(e);
		setErrors(validateForm(form));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors(validateForm(form));
		if (errors.length === 0) {
			console.log('is array');
			console.log(form);

			return;
		}
		if (Object.keys(errors).length === 0) {
			console.log('everything is ok');
			//crear el usuario nuevo
			//pasar todos los datos del usuario a la base de datos
			//una collection llamada users donde se iran almancenando todos

			//users->data>{todos los datos del registro}
			//users->friends->todos los amigos que haya agregado
			//users->post->todos los post realizados->user who -comments-likes

			//en redux almacenar los datos del usuario actual para mostrarlo en la app
			//call users->data
		} else {
			return;
		}
	};

	return {
		form,
		errors,
		loading,
		handleChange,
		handleSubmit,
		handleBlur,
		handleRadioChange,
		handleRadioBlur,
	};
};
