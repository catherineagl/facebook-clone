import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	selectUserCover,
	selectUserId,
	selectUserName,
	selectUserPhoto,
	selectUserSurname,
	setProfilePic,
	setUserCover,
} from '../../features/auth/authSlice';
import { SelectUserPosts, setUserPosts } from '../../features/posts/postsSlice';
import Post from '../Post';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import db from '../../firebase';
import {
	Container,
	ProfileCover,
	Content,
	ProfileInfo,
	ProfileContainer,
	ProfileHeader,
	UserDetails,
	UserPosts,
	ImgContainer,
	Camera,
	CameraButton,
} from './ProfileElements';
import CreatePost from '../CreatePost';
import pic from '../../images/pic.png';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const Profile = () => {
	const userPosts = useSelector(SelectUserPosts);
	const userId = useSelector(selectUserId);
	const userProfileImg = useSelector(selectUserPhoto);
	const userCover = useSelector(selectUserCover);
	const userName = useSelector(selectUserName);
	const userSurname = useSelector(selectUserSurname);
	const dispatch = useDispatch();
	const fileInputRef = React.createRef();
	const coverRef = React.createRef();

	const handleImage = async (e, action) => {
		const file = e.target.files[0];

		if (file && file.type.substr(0, 5) === 'image') {
			const imageRef = ref(storage, `images/${action}${userId}`);
			await uploadBytes(imageRef, file);
			let imgUrl = await getDownloadURL(imageRef);
			const userData = doc(db, 'users', userId);

			if (action === 'profile') {
				dispatch(setProfilePic(imgUrl));
				await updateDoc(userData, { image: imgUrl });
			} else if (action === 'cover') {
				dispatch(setUserCover(imgUrl));
				await updateDoc(userData, { cover: imgUrl });
			}
		} else {
		}
	};

	useEffect(() => {
		const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
		onSnapshot(q, (querySnapshot) => {
			let posts = querySnapshot.docs
				.map((snap) => snap.data())
				.filter((post) => post.uid === userId);

			dispatch(setUserPosts(posts));
		});
	}, []);

	return (
		<Container>
			<ProfileContainer>
				<ProfileHeader>
					<ProfileCover>
						{userCover ? (
							<img src={userCover} alt="" />
						) : (
							<img
								src="https://app.toky.co/resources/images/cover.png"
								alt=""
							/>
						)}
						<button
							onClick={(e) => {
								e.preventDefault();
								coverRef.current.click();
							}}
						>
							<Camera />
							Edit cover photo
						</button>
						<input
							type="file"
							accept="image/*"
							style={{ display: 'none' }}
							ref={coverRef}
							onChange={(e) => handleImage(e, 'cover')}
						/>
					</ProfileCover>
					<ProfileInfo>
						<ImgContainer>
							{userProfileImg ? (
								<img src={userProfileImg} alt="" />
							) : (
								<img src={pic} alt="" />
							)}

							<CameraButton
								onClick={(e) => {
									e.preventDefault();
									fileInputRef.current.click();
								}}
							>
								<Camera />
							</CameraButton>
							<input
								type="file"
								accept="image/*"
								style={{ display: 'none' }}
								ref={fileInputRef}
								onChange={(e) => handleImage(e, 'profile')}
							/>
						</ImgContainer>
						<h2>
							{userName} {userSurname}
						</h2>
					</ProfileInfo>
				</ProfileHeader>
			</ProfileContainer>
			<Content>
				<UserDetails></UserDetails>
				<UserPosts>
					<CreatePost />
					{userPosts && userPosts.map((post) => <Post post={post} />)}
				</UserPosts>
			</Content>
		</Container>
	);
};

export default Profile;
