import { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import { useSelector } from 'react-redux';
import { selectUserName } from './features/auth/authSlice';
import { setUserLoginDetails } from './features/auth/authSlice';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import db from './firebase';
import { useDispatch } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const auth = getAuth();

	const loginUser = useSelector(selectUserName);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const uid = user.uid;

				const docRef = doc(db, 'users', uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const userData = docSnap.data();

					console.log('ejecuntando el useEffect que chequea al usuario');

					dispatch(
						setUserLoginDetails({
							id: uid,
							name: userData.name,
							surname: userData.surname,
							sex: userData.sex,
						})
					);
				}
			} else return;
		});
	}, []);

	return (
		<>
			<Router>
				{loginUser && <Header />}

				<Routes>
					{!loginUser && <Route path="/" element={<Login />} />}
					{loginUser && <Route path="/" element={<Home />} />}
				</Routes>
			</Router>
		</>
	);
}

export default App;
