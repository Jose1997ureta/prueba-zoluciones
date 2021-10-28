import { Link } from "react-router-dom";
import logoRimac from "../../images/logo.svg";
import { FaPhoneAlt } from "react-icons/fa";
import "../../styles/header.scss";

export const HeaderComponent = ({ boxShadow = true }) => {
	return (
		<header className={`header__container ${boxShadow && "header__shadow"}`}>
			<nav className="header l-container">
				<Link to="/">
					<img src={logoRimac} className="header__logo" alt="logo-rimac" />
				</Link>
				<div className="menu">
					<Link className="menu__item" to="/">
						¿Tienes alguna duda?
					</Link>
					<Link className="menu__item" to="/">
						<FaPhoneAlt className="menu__icon" />
						<span className="menu__icon--number">(01) 411 6001</span>
						<span className="menu__icon--text"> Llámanos</span>
					</Link>
				</div>
			</nav>
		</header>
	);
};
