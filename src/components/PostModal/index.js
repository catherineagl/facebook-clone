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
} from './PostModalElements';
import Picker from 'emoji-picker-react';
import pic from '../../images/pic.png';

const PostModal = ({ setShowModal, postMsg, setPostMsg }) => {
	const fileInputRef = React.createRef();
	const [image, setImage] = useState('');
	const [showPicker, setShowPicker] = useState(false);

	const handleImage = (e) => {
		const file = e.target.files[0];
		if (file && file.type.substr(0, 5) === 'image') {
			setImage(file);
		} else {
			setImage('');
		}
	};

	const onEmojiClick = (e, emojiObject) => {
		setShowPicker(false);
		setPostMsg((prevInput) => prevInput + emojiObject.emoji);
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
						<img src={pic} alt="" />
						<span>User name</span>
					</UserInfo>
					<PostContainer>
						<InputContainer>
							<input
								type="text"
								placeholder="What are you thinking, user?"
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
					<ButtonSend>Post it</ButtonSend>
				</Wrapper>
			</Content>
		</Container>
	);
};

export default PostModal;
