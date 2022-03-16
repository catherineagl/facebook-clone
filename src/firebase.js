// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { arrayUnion, getFirestore, updateDoc } from 'firebase/firestore';
import { doc, setDoc, addDoc } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyAWHTyZf-iPi31MpUAjF4rlTLd-5zr8lF4',
	authDomain: 'facebook-clone-df941.firebaseapp.com',
	projectId: 'facebook-clone-df941',
	storageBucket: 'facebook-clone-df941.appspot.com',
	messagingSenderId: '678086236440',
	appId: '1:678086236440:web:38018515a0cdbc324ae66d',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export const createUser = (form) => {
	createUserWithEmailAndPassword(auth, form.email, form.password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			if (user) {
				let birthday = new Date([
					form.birthYear,
					form.birthMonth,
					form.birthDay,
				]);

				//save data in collection
				const userData = doc(db, 'users', user.uid, 'data');
				const data = {
					name: form.name,
					surname: form.surname,
					email: form.email,
					birthday: birthday,
					password: form.password,
					sex: form.sex,
					pronoun: form.pronoun,
					custom: form.custom,
					friends: [],
					posts: [],
				};
				setDoc(userData, data);
			}
			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(`Error ${errorCode}: ${errorMessage}`);
			// ..
		});
};

export const signIn = (email, password) => {
	const auth = getAuth();
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log(user);

			// ...
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			alert(`Error ${errorCode}: ${errorMessage}`);
		});
};

export const checkUser = () => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			const uid = user.uid;

			console.log(uid);
		} else {
		}
	});
};

export const createPost = (data) => {
	const userPosts = doc(db, 'posts', 'DzrBdztD4rOkq97nepVT9EcFfgc2', data.id);
	setDoc(userPosts, data);
	/* const userData = doc(db, 'users', 'DzrBdztD4rOkq97nepVT9EcFfgc2');
	updateDoc(userData, { posts: arrayUnion(data.uid) }); */
	console.log('update suscessfull');
};
// Initialize Firebase
