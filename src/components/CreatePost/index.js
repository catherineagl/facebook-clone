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
import PostModal from '../PostModal';
import { Link } from 'react-router-dom';

const CreatePost = () => {
	const [postMsg, setPostMsg] = useState('');
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
						placeholder="What are you thinking, User?"
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
				<PostModal
					showModal={showModal}
					setShowModal={setShowModal}
					setPostMsg={setPostMsg}
					postMsg={postMsg}
				/>
			)}
		</>
	);
};

export default CreatePost;
