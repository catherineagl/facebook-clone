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
const PostModal = ({ setShowFullView }) => {
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
					<img
						src="https://scontent-mia3-2.xx.fbcdn.net/v/t39.30808-6/275772288_154678483657920_3227318720304782588_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=5cd70e&_nc_ohc=mvkiPsO-B7cAX8ZaaBR&_nc_ht=scontent-mia3-2.xx&oh=00_AT_oQEMD8ehxteUs3vQ3Ws7dV0BBR0Raem4_zBhfr06YpA&oe=62359C06"
						alt=""
					/>
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
							<h3>User Name</h3>
							<p>11 de marzo a las 19:07</p>
						</PostInfo>
					</PostHeading>
					<PostDescription>
						Find Freelance jobs that help change the wordl sign up fro free
						today!
					</PostDescription>
					<PostInteractions>
						<InteractionsCount>
							<PostLikes>
								<img src={like} alt="" />
								<span>10</span>
							</PostLikes>
							<PostComments>10 comments</PostComments>
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
