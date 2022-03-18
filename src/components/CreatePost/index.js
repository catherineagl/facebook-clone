import React, { useState } from 'react';
import {
	Container,
	RowInfo,
	Row,
	Button,
	Video,
	Image,
	Happy,
} from './CreatePostElements';
import pic from '../../images/pic.png';
import CreatePostModal from '../CreatePostModal';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUserName } from '../../features/auth/authSlice';

const CreatePost = () => {
	const userName = useSelector(selectUserName);
	const [postMsg, setPostMsg] = useState('');
	const [image, setImage] = useState(null);

	const [showModal, setShowModal] = useState('');

	return (
		<>
			<Container>
				<RowInfo>
					<Link to="/profile">
						<img src={pic} alt="" />
					</Link>
					<input
						type="text"
						placeholder={`What are you thinking, ${userName}?`}
						value={postMsg}
						onChange={(e) => setPostMsg(e.target.value)}
						onClick={() => setShowModal(true)}
					/>
				</RowInfo>
				<Row>
					<Button onClick={() => setShowModal(true)}>
						<Video />
						<span>Live video</span>
					</Button>
					<Button onClick={() => setShowModal(true)}>
						<Image />
						<span>Photo/video</span>
					</Button>
					<Button onClick={() => setShowModal(true)}>
						<Happy />
						<span>Feeling/activity</span>
					</Button>
				</Row>
			</Container>
			{showModal && (
				<CreatePostModal
					showModal={showModal}
					setShowModal={setShowModal}
					setPostMsg={setPostMsg}
					postMsg={postMsg}
					image={image}
					setImage={setImage}
				/>
			)}
		</>
	);
};

export default CreatePost;
