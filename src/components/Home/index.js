import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { sidebarItems } from '../data';
import {
	Container,
	Section,
	Main,
	Sidebar,
	Stories,
	Posts,
	ArrowContainer,
	RightArrow,
	CardContainer,
	SidebarTitle,
	ImgContainer,
	PromoWrapper,
	LineSeparator,
} from './HomeElements';
import SidebarItem from '../SidebarItem';
import pic from '../../images/pic.png';
import Storie from '../Storie';
import CreatePost from '../CreatePost';
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectUserName,
	selectUserSurname,
	selectUserPhoto,
} from '../../features/auth/authSlice';
import db from '../../firebase';
import { query, collection, onSnapshot, orderBy } from 'firebase/firestore';
import { SelectAllPosts, setPosts } from '../../features/posts/postsSlice';

const Home = () => {
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const userSurname = useSelector(selectUserSurname);
	const allPosts = useSelector(SelectAllPosts);
	const dispatch = useDispatch();

	useEffect(() => {
		const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
		onSnapshot(q, (querySnapshot) => {
			let posts = querySnapshot.docs.map((snap) => snap.data());
			dispatch(setPosts(posts));
		});
	}, []);

	return (
		<Container>
			<Section>
				<Sidebar>
					<SidebarItem
						name={`${userName} ${userSurname}`}
						link={userPhoto ? userPhoto : pic}
						linkTo="/profile"
					/>
					{sidebarItems.map((item, i) => (
						<SidebarItem
							name={item.name}
							link={item.link}
							linkTo={item.linkTo}
							key={'s' + i}
						/>
					))}

					<p>Facebook clone created by Catherine Aguilera | 2022</p>
				</Sidebar>
			</Section>
			<Section>
				<Main>
					<Stories>
						<Storie />
						<Storie />
						<Storie />
						<Storie />
						<Storie />
						<ArrowContainer>
							<RightArrow />
						</ArrowContainer>
					</Stories>

					<CreatePost />

					<Posts>
						{allPosts?.map((post) => (
							<Post post={post} />
						))}
					</Posts>
				</Main>
			</Section>
			<Section>
				<Sidebar>
					<SidebarTitle>Promo</SidebarTitle>
					<CardContainer>
						<ImgContainer>
							<img
								src="https://scontent-mia3-1.xx.fbcdn.net/v/t45.1600-4/245716496_23849154052150187_7888444483895837686_n.png?stp=cp0_dst-jpg_p960x960_q90_spS444&_nc_cat=104&ccb=1-5&_nc_sid=67cdda&_nc_ohc=IkaIYjxrCQEAX-keKww&tn=VZh3qYKfMnUXWjgr&_nc_ht=scontent-mia3-1.xx&oh=00_AT8lKtnFOEHM8PYzmlVF7hh-_T_Wrjvgg-csmnTS9kd7xQ&oe=62311D48"
								alt=""
							/>
						</ImgContainer>
						<PromoWrapper>
							<h4>TECH school of videogame design</h4>
							<span>techtitude.com</span>
						</PromoWrapper>
					</CardContainer>
					<CardContainer>
						<ImgContainer>
							<img
								src="https://scontent-mia3-1.xx.fbcdn.net/v/t45.1600-4/53801610_23843229677150748_6573402409500934144_n.png?stp=cp0_dst-jpg_p160x160_q90_spS444&_nc_cat=101&ccb=1-5&_nc_sid=67cdda&_nc_ohc=JQxrnsTUJ9gAX9kGjBK&tn=VZh3qYKfMnUXWjgr&_nc_ht=scontent-mia3-1.xx&oh=00_AT8hZ97u7Qt7Yp4VOt3Bj0QDFEenUIpOfhEcwB27mbnxnw&oe=622FA9D5"
								alt=""
							/>
						</ImgContainer>
						<PromoWrapper>
							<h4>
								Only with this post: <br /> Explore more at our website
							</h4>
							<span>knowmoreplatform.com</span>
						</PromoWrapper>
					</CardContainer>

					<LineSeparator />
				</Sidebar>
			</Section>
		</Container>
	);
};

export default Home;
