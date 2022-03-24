import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Home from './components/Home';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from './features/auth/authSlice';
import { setUserLoginDetails } from './features/auth/authSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import db, { auth } from './firebase';
import Profile from './components/Profile';
import Friends from './components/Friends';

function App() {
	const dispatch = useDispatch();
	const loginUser = useSelector(selectUserName);

	useEffect(() => {
		onAuthStateChanged(auth, async (user) => {
			if (user) {
				const uid = user.uid;

				const docRef = doc(db, 'users', uid);
				const docSnap = await getDoc(docRef);

				if (docSnap.exists()) {
					const userData = docSnap.data();

					dispatch(
						setUserLoginDetails({
							id: uid,
							name: userData.name,
							surname: userData.surname,
							sex: userData.sex,
							image: userData.image,
							cover: userData.cover,
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
					{loginUser && <Route path="/profile" element={<Profile />} />}
					{loginUser && <Route path="/friends" element={<Friends />} />}

					{loginUser && <Route path="*" element={<Home />} />}
					{!loginUser && <Route path="*" element={<Login />} />}
				</Routes>
			</Router>
		</>
	);
}

export default App;
