import React from 'react';
import {
	Container,
	FacebookLogo,
	ImgFullView,
	FullViewActions,
	PostSection,
	Post,
	CloseBtn,
	FullImgContainer,
} from './PostModalElements';
import { NavSection, NavItemRounded, MenuGrid } from '../Header/HeaderElements';
import {
	PostHeading,
	ImgContainer,
	PostInfo,
	PostDescription,
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
} from '../Post/PostElements';
import { BsMessenger } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillCaretDownFill } from 'react-icons/bs';
import pic from '../../images/pic.png';
import like from '../../images/like.svg';
import { BiLike, BiComment } from 'react-icons/bi';
import { AiOutlineCamera } from 'react-icons/ai';
import { RiEmotionHappyLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const PostModal = ({ setShowFullView, post }) => {
	return (
		<Container>
			<ImgFullView>
				<FullViewActions>
					<CloseBtn onClick={() => setShowFullView(false)} />
					<Link to="/home">
						<img
							src="https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-0.png"
							alt=""
						/>
					</Link>
				</FullViewActions>
				<FullImgContainer>
					<img src={post.image} alt="" />
				</FullImgContainer>
			</ImgFullView>
			<PostSection>
				<NavSection>
					<NavItemRounded>
						<MenuGrid />
					</NavItemRounded>
					<NavItemRounded>
						<BsMessenger />
					</NavItemRounded>
					<NavItemRounded>
						<IoMdNotifications />
					</NavItemRounded>
					<NavItemRounded>
						<BsFillCaretDownFill />
					</NavItemRounded>
				</NavSection>
				<Post>
					<PostHeading>
						<ImgContainer>
							<img src={pic} alt="img" />
						</ImgContainer>
						<PostInfo>
							<h3>{post.user}</h3>
							<p>{post.timestamp}</p>
						</PostInfo>
					</PostHeading>
					<PostDescription>{post.text}</PostDescription>
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
							<ButtonInteraction>
								<BiLike />
								<span>Like</span>
							</ButtonInteraction>
							<ButtonInteraction>
								<BiComment />
								<span>Comment</span>
							</ButtonInteraction>
						</PostOptions>
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
					</PostInteractions>
				</Post>
			</PostSection>
		</Container>
	);
};

export default PostModal;
