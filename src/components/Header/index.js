import React from 'react';
import { BsFacebook } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { BsPlayBtn } from 'react-icons/bs';
import { MdStorefront } from 'react-icons/md';
import { CgGames } from 'react-icons/cg';
import { BsMessenger } from 'react-icons/bs';
import { CgMenuGridO } from 'react-icons/cg';
import { IoMdNotifications } from 'react-icons/io';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { AiOutlineSearch } from 'react-icons/ai';
const Header = () => {
	return (
		<>
			<BsFacebook />
			<AiFillHome />
			<FaUserFriends />
			<BsPlayBtn />
			<MdStorefront />
			<CgGames />
			<BsMessenger />
			<CgMenuGridO />
			<IoMdNotifications />
			<BsFillCaretDownFill />
		</>
	);
};

export default Header;
