import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as PhoneIcon } from "../../assets/icons/smartphone.svg";
import Logo from "../common/Logo";

const Header = () => {
	return (
		<header className='header'>
			<div className='container-fluid'>
				<div className='main-header'>
					<Link to='/'>
						<Logo size={250}></Logo>
					</Link>
					<div className='deli-contact'>
						<div className='content'>
							<p className='text'>express delivery</p>
							<p className='number'>0764884612</p>
						</div>
						<PhoneIcon className='phone-icon'></PhoneIcon>
					</div>
				</div>
				<div className='nav'>
					<ul className='nav__list'>
						<li className='nav__item'>
							<Link className='nav__link' to='/'>
								Home
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='/menu'>
								Menu
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='/ourstory'>
								Our Story
							</Link>
						</li>
						<li className='nav__item'>
							<Link className='nav__link' to='/contact'>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
