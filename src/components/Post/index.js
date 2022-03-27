import React, { useState } from 'react';
import {
	Container,
	PostHeading,
	ImgContainer,
	PostInfo,
	PostDescription,
	PostMedia,
	PostOptions,
	PostInteractions,
	PostLikes,
	PostComments,
	ButtonInteraction,
	LineSeparator,
	InteractionsCount,
	CommentsSection,
	Comment,
	UserInfo,
	UserComment,
	InputContainer,
	WriteComment,
	CommentActions,
} from './PostElements';
import pic from '../../images/pic.png';
import like from '../../images/like.svg';
import { BiLike, BiComment } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';
import PostModal from '../PostModal';

const Post = ({ post }) => {
	const [showFullView, setShowFullView] = useState(false);
	const [showCommentSection, setShowCommentSection] = useState(false);
	const [liked, setLiked] = useState(false);

	let date = new Date(post.timestamp);

	return (
		<>
			<Container key={post.id}>
				<PostHeading>
					<ImgContainer>
						<img src={post.userImg || pic} alt="img" />
					</ImgContainer>
					<PostInfo>
						<h3>{post.user}</h3>
						<p>{date.toLocaleDateString()}</p>
					</PostInfo>
				</PostHeading>
				<PostDescription>{post.text}</PostDescription>
				{post.image && (
					<PostMedia onClick={() => setShowFullView(true)}>
						<img src={post.image} alt="" />
					</PostMedia>
				)}
				<PostInteractions>
					<InteractionsCount>
						<PostLikes>
							<img src={like} alt="" />
							<span>{post.likes}</span>
						</PostLikes>
						<PostComments>{post.comments.length} comments</PostComments>
					</InteractionsCount>
					<LineSeparator />
					<PostOptions>
						<ButtonInteraction
							className={liked ? 'liked' : ''}
							onClick={() => setLiked(!liked)}
						>
							<BiLike />
							<span>Like</span>
						</ButtonInteraction>
						<ButtonInteraction
							onClick={() => setShowCommentSection(!showCommentSection)}
						>
							<BiComment />
							<span>Comment</span>
						</ButtonInteraction>
					</PostOptions>
					{showCommentSection && (
						<>
							<LineSeparator />
							<WriteComment>
								<img src={pic} alt="" />
								<InputContainer>
									<input type="text" placeholder="Write a comment" />
									<CommentActions>
										<RiEmotionHappyLine />
										<AiOutlineCamera />
									</CommentActions>
								</InputContainer>
							</WriteComment>
							<CommentsSection>
								<Comment>
									<UserInfo>
										<img src={pic} alt="" />
									</UserInfo>
									<UserComment>
										<h4>User Name</h4>
										<p>Jaajajja si que te pasaste de pinche lanza xdxdxd</p>
									</UserComment>
								</Comment>
							</CommentsSection>
						</>
					)}
				</PostInteractions>
			</Container>
			{showFullView && (
				<PostModal setShowFullView={setShowFullView} post={post} />
			)}
		</>
	);
};

export default Post;
