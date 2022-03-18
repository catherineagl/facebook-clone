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

const Post = (props) => {
	const [showFullView, setShowFullView] = useState(false);
	const [showCommentSection, setShowCommentSection] = useState(false);
	const [likes, setLikes] = useState(1);
	const [liked, setLiked] = useState(false);
	console.log(props);
	return (
		<>
			<Container>
				<PostHeading>
					<ImgContainer>
						<img src={pic} alt="img" />
					</ImgContainer>
					<PostInfo>
						<h3>User Name</h3>
						<p>11 de marzo a las 19:07</p>
					</PostInfo>
				</PostHeading>
				<PostDescription>
					Find Freelance jobs that help change the wordl sign up fro free today!
				</PostDescription>
				<PostMedia onClick={() => setShowFullView(true)}>
					<img
						src="https://scontent-mia3-1.xx.fbcdn.net/v/t39.30808-6/275783035_408585707756744_1455986218614581055_n.jpg?stp=dst-jpg_s960x960&_nc_cat=1&ccb=1-5&_nc_sid=730e14&_nc_ohc=GoO1BiJED1cAX_r7WYy&tn=VZh3qYKfMnUXWjgr&_nc_ht=scontent-mia3-1.xx&oh=00_AT-WGydo3Rso1NxZ23xWFdUOJEBayr4memnr5jeysbeljw&oe=6234F872"
						alt=""
					/>
				</PostMedia>
				<PostInteractions>
					<InteractionsCount>
						<PostLikes>
							<img src={like} alt="" />
							<span>{likes}</span>
						</PostLikes>
						<PostComments>10 comments</PostComments>
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
			{showFullView && <PostModal setShowFullView={setShowFullView} />}
		</>
	);
};

export default Post;
