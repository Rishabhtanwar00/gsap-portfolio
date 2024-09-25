import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LinksArr = [
	{
		id: 1,
		name: 'Home',
		to: '/',
	},
	{
		id: 2,
		name: 'About',
		to: '/about',
	},
	{
		id: 3,
		name: 'Projects',
		to: '/projects',
	},
	{
		id: 4,
		name: 'Contact',
		to: '/contact',
	},
];

const Navbar = () => {
	const [navbar, setNavbar] = useState(false);
	const { pathname } = useLocation();
	const changeBackgroundColor = () => {
		window.scrollY >= 60 ? setNavbar(true) : setNavbar(false);
	};

	window.addEventListener('scroll', changeBackgroundColor);

	return (
		<header>
			<nav className={navbar ? 'navbar active' : 'navbar'}>
				<div className='nav-logo flex'>
					<h2>RT</h2>
				</div>
				<div className='nav-links'>
					{LinksArr.map((link) => (
						<Link
							key={link.id}
							className={
								pathname === `${link.to}` ? 'nav-link active' : 'nav-link'
							}
							to={link.to}
						>
							<div className='nav-link-title'>{link.name}</div>
							<div className='nav-link-bottom'></div>
						</Link>
					))}
				</div>
				<div>
					<button className='nav-button'>Get in Touch</button>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
