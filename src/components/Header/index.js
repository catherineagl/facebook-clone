import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import pic from '../../images/pic.png';
import { AiOutlineHome } from 'react-icons/ai';
import { RiGroupLine } from 'react-icons/ri';
import { BsPlayBtn } from 'react-icons/bs';
import { MdStorefront } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import { BsMessenger } from 'react-icons/bs';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillCaretDownFill } from 'react-icons/bs';

import {
	Container,
	NavSection,
	FacebookLogo,
	Logo,
	SearchContainer,
	SearchIcon,
	NavItem,
	StyledLink,
	NavItemRounded,
	ProfileLink,
	MenuGrid,
} from './HeaderElements';
import { useSelector } from 'react-redux';
import { selectUserName, selectUserPhoto } from '../../features/auth/authSlice';
import FloatMenu from '../FloatMenu';

const Header = () => {
	const userName = useSelector(selectUserName);
	const userPhoto = useSelector(selectUserPhoto);
	const [showFloatMenu, setShowFloatMenu] = useState(false);

	return (
		<Container>
			<Logo>
				<Link to="/">
					<FacebookLogo />
				</Link>
				<SearchContainer>
					<SearchIcon />
					<input type="text" placeholder="Search in Facebook" />
				</SearchContainer>
			</Logo>

			<NavSection>
				<NavItem>
					<StyledLink to="/" activeClassName="active" title="Home">
						<AiOutlineHome />
					</StyledLink>
				</NavItem>
				<NavItem>
					<StyledLink to="/friends" activeClassName="active" title="Friends">
						<RiGroupLine />
					</StyledLink>
				</NavItem>
				<NavItem>
					<StyledLink to="/watch" activeClassName="active" title="Watch">
						<BsPlayBtn />
					</StyledLink>
				</NavItem>
				<NavItem>
					<StyledLink
						to="/marketplace"
						activeClassName="active"
						title="Marketplace"
					>
						<MdStorefront />
					</StyledLink>
				</NavItem>
				<NavItem>
					<StyledLink to="/games" activeClassName="active" title="Games">
						<CgGames />
					</StyledLink>
				</NavItem>
			</NavSection>

			<NavSection>
				<ProfileLink>
					<NavLink to="/profile" activeClassName="active">
						{userPhoto ? (
							<img src={userPhoto} alt="" />
						) : (
							<img src={pic} alt="" />
						)}
						<p>{userName}</p>
					</NavLink>
				</ProfileLink>

				<NavItemRounded>
					<MenuGrid />
				</NavItemRounded>

				<NavItemRounded>
					<BsMessenger />
				</NavItemRounded>

				<NavItemRounded>
					<IoMdNotifications />
				</NavItemRounded>

				<NavItemRounded onClick={() => setShowFloatMenu(!showFloatMenu)}>
					<BsFillCaretDownFill />
				</NavItemRounded>
			</NavSection>

			{showFloatMenu && <FloatMenu />}
		</Container>
	);
};

export default Header;
