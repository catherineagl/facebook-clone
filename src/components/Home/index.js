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
	selectUserId,
} from '../../features/auth/authSlice';
import db from '../../firebase';
import {
	query,
	collection,
	onSnapshot,
	orderBy,
	doc,
	getDoc,
} from 'firebase/firestore';
import { SelectAllPosts, setPosts } from '../../features/posts/postsSlice';
import {
	selectUserFriends,
	setNoFriends,
	setShowFriends,
	setUserFriends,
} from '../../features/friends/friendsSlice';

const Home = () => {
	const userId = useSelector(selectUserId);
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const userSurname = useSelector(selectUserSurname);
	const allPosts = useSelector(SelectAllPosts);
	const userFriendsId = useSelector(selectUserFriends);

	const userFriends = useSelector(selectUserFriends);
	const dispatch = useDispatch();

	useEffect(() => {
		const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
		onSnapshot(q, (querySnapshot) => {
			let posts = querySnapshot.docs.map((snap) => snap.data());
			let userFriendsPosts = posts.filter(
				(item) => userFriendsId.includes(item.uid) || item.uid === userId
			);
			dispatch(setPosts(userFriendsPosts));
		});
	}, [userFriends]);

	useEffect(() => {
		const getUserFriends = async () => {
			const docRef = doc(db, 'users', userId);
			const userData = await getDoc(docRef);
			dispatch(setUserFriends(userData.data().friends));
		};
		getUserFriends();
	}, []);

	useEffect(() => {
		const q = query(collection(db, 'users'));

		const friends = [];
		let noFriends = [];
		onSnapshot(q, (querySnapshot) => {
			let users = querySnapshot.docs
				.filter((snap) => snap.id !== userId)
				.map((item) => {
					if (userFriends.length > 0) {
						if (userFriends.includes(item.id)) {
							friends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
						} else {
							noFriends.push({
								id: item.id,
								data: {
									...item.data(),
									birthday: JSON.stringify(
										new Date(item.data().birthday.seconds)
									),
								},
							});
						}
					} else {
						noFriends.push({
							id: item.id,
							data: {
								...item.data(),
								birthday: JSON.stringify(
									new Date(item.data().birthday.seconds)
								),
							},
						});
					}
				})
				.filter((item) => item);

			dispatch(setShowFriends(friends));
			dispatch(setNoFriends(noFriends));
		});
	}, [userFriends]);

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
							<Post key={post.id} post={post} />
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
								src="https://scontent-mia3-2.xx.fbcdn.net/v/t45.1600-4/200057800_23848947295910426_1278154784839003130_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=105&ccb=1-5&_nc_sid=67cdda&_nc_ohc=Pz_T6A2mW_8AX8PzGZ1&_nc_ht=scontent-mia3-2.xx&oh=00_AT9pHTuspfvIe0oGTP1wvecnVB4Wr6-EFSKmXcmG4Sq9kA&oe=62457918"
								alt=""
							/>
						</ImgContainer>
						<PromoWrapper>
							<h4>Make a positive Impact</h4>
							<span>workforimpact.com</span>
						</PromoWrapper>
					</CardContainer>
					<CardContainer>
						<ImgContainer>
							<img
								src="https://scontent-mia3-2.xx.fbcdn.net/v/t45.1600-4/275789768_23849612017550510_7101802000718438079_n.png?stp=cp0_dst-jpg_p296x100_q90_spS444&_nc_cat=1&ccb=1-5&_nc_sid=67cdda&_nc_ohc=2jB67jAMXgsAX9XwZD5&_nc_ht=scontent-mia3-2.xx&oh=00_AT98FzG3QrFUIQ15aLBB6Fc7RQW8TE6nOW2eTm7oBLpnLA&oe=62458CED"
								alt=""
							/>
						</ImgContainer>
						<PromoWrapper>
							<h4>
								Official Ronaldinho NFT
								<br /> Collection
							</h4>
							<span>shirtum.com</span>
						</PromoWrapper>
					</CardContainer>

					<LineSeparator />
				</Sidebar>
			</Section>
		</Container>
	);
};

export default Home;
