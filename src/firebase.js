// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { arrayUnion, getFirestore, updateDoc } from 'firebase/firestore';
import {
	doc,
	setDoc,
	query,
	collection,
	orderBy,
	onSnapshot,
} from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const firebaseConfig = {
	apiKey: 'AIzaSyAWHTyZf-iPi31MpUAjF4rlTLd-5zr8lF4',
	authDomain: 'facebook-clone-df941.firebaseapp.com',
	projectId: 'facebook-clone-df941',
	storageBucket: 'facebook-clone-df941.appspot.com',
	messagingSenderId: '678086236440',
	appId: '1:678086236440:web:38018515a0cdbc324ae66d',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage(app);

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
				const userData = doc(db, 'users', user.uid);
				const data = {
					name: form.name,
					surname: form.surname,
					email: form.email,
					birthday: birthday,
					password: form.password,
					sex: form.sex,
					pronoun: form.pronoun,
					custom: form.custom,
					image: '',
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

/* export const signIn = (email, password) => {
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
}; */

export const createPost = async (data) => {
	let imgUrl = null;

	if (data.image) {
		try {
			const imageRef = ref(storage, `images/${data.id}`);
			await uploadBytes(imageRef, data.image);
			imgUrl = await getDownloadURL(imageRef);
			console.log(imgUrl);
		} catch (error) {
			console.log('error uploading file');
		}
	}
	const userPosts = doc(db, 'posts', data.id);
	await setDoc(userPosts, { ...data, image: imgUrl });
	const userData = doc(db, 'users', 'YzwZ4BdjzQecGhbOH64zNMcYn3t2');
	updateDoc(userData, { posts: arrayUnion(data.id) });
	console.log('update suscessfull');
};

/* export const getPosts = async () => {
	const q = query(collection(db, 'posts'));
	onSnapshot(q, (querySnapshot) => {
		querySnapshot.docs.map((snap) => snap.data());
	});
};
 */
export default db;
