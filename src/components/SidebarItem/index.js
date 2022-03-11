import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from './SidebarElements';

const SidebarItem = ({ name, link, linkTo }) => {
	return (
		<NavItem>
			<Link to={linkTo}>
				<img src={link} alt="" />
				<span>{name}</span>
			</Link>
		</NavItem>
	);
};

export default SidebarItem;
