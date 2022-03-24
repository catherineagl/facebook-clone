import React, { useState } from 'react';
import {
	Container,
	Content,
	Wrapper,
	UserInfo,
	MediaContainer,
	PostContainer,
	ButtonSend,
	CloseBtn,
	Title,
	InputContainer,
	Emoticon,
	Media,
} from './CreatePostModalElements';
import Picker from 'emoji-picker-react';
import pic from '../../images/pic.png';
import uniqid from 'uniqid';
import { useSelector } from 'react-redux';
import {
	selectUserId,
	selectUserName,
	selectUserPhoto,
} from '../../features/auth/authSlice';
import { selectUserSurname } from '../../features/auth/authSlice';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import db, { storage } from '../../firebase';
import { doc, setDoc, arrayUnion, updateDoc } from 'firebase/firestore';

const CreatePostModal = ({
	setShowModal,
	postMsg,
	setPostMsg,
	image,
	setImage,
}) => {
	const userId = useSelector(selectUserId);
	const userName = useSelector(selectUserName);
	const userSurname = useSelector(selectUserSurname);
	const userPhoto = useSelector(selectUserPhoto);
	const fileInputRef = React.createRef();
	const [showPicker, setShowPicker] = useState(false);

	const createPost = async (data) => {
		let imgUrl = null;

		if (data.image) {
			try {
				const imageRef = ref(storage, `images/${data.id}`);
				await uploadBytes(imageRef, data.image);
				imgUrl = await getDownloadURL(imageRef);
			} catch (error) {
				console.log('error uploading file');
			}
		}
		const userPosts = doc(db, 'posts', data.id);
		await setDoc(userPosts, { ...data, image: imgUrl });
		const userData = doc(db, 'users', data.uid);
		updateDoc(userData, { posts: arrayUnion(data.id) });
		setPostMsg('');
		setImage('');
		setShowModal(false);
	};

	const handleImage = (e) => {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === 'image') {
			setImage(file);
			console.log(file);
		} else {
			setImage('');
		}
	};

	const onEmojiClick = (e, emojiObject) => {
		setShowPicker(false);
		setPostMsg((prevInput) => prevInput + emojiObject.emoji);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		let data = {
			id: uniqid(),
			uid: userId,
			userImg: userPhoto,
			user: userName + ' ' + userSurname,
			text: postMsg,
			image: image,
			timestamp: Date.now(),
			likes: 0,
			comments: [],
		};
		createPost(data);
	};

	return (
		<Container
			onClick={() => {
				if (showPicker) setShowPicker(false);
				else return;
			}}
		>
			<Content>
				<Title>Create Post</Title>
				<CloseBtn onClick={() => setShowModal(false)} />
				<Wrapper>
					<UserInfo>
						{userPhoto ? (
							<img src={userPhoto} alt="" />
						) : (
							<img src={pic} alt="" />
						)}

						<span>
							{userName} {userSurname}
						</span>
					</UserInfo>
					<PostContainer>
						<InputContainer>
							<input
								type="text"
								placeholder={`What are you thinking, ${userName}?`}
								value={postMsg}
								onChange={(e) => setPostMsg(e.target.value)}
							/>
							<Emoticon onClick={() => setShowPicker((val) => !val)} />
							{showPicker && (
								<Picker
									pickerStyle={{
										width: '300px',
										position: 'absolute',
										right: '-30%',
										top: '4rem',
										zIndex: '20000',
									}}
									onEmojiClick={onEmojiClick}
								/>
							)}
						</InputContainer>
						<MediaContainer>
							{image ? (
								<>
									<CloseBtn
										onClick={(e) => {
											e.preventDefault();
											setImage('');
										}}
									/>
									<img src={URL.createObjectURL(image)} alt="" />
								</>
							) : (
								<>
									<button
										onClick={(e) => {
											e.preventDefault();
											fileInputRef.current.click();
										}}
									>
										<Media />
										<span>Add photo/video</span>
									</button>
									<input
										type="file"
										id="img"
										name="img"
										accept="image/*"
										style={{ display: 'none' }}
										ref={fileInputRef}
										onChange={handleImage}
									/>
								</>
							)}
						</MediaContainer>
					</PostContainer>
					<ButtonSend onClick={handleSubmit}>Post it</ButtonSend>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default CreatePostModal;
