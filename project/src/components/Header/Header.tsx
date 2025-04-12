import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";
import useSmoothScroll from "../../hooks/useSmoothScroll";

const Header = ({ onMenuToggle }: { onMenuToggle: any }) => {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const scrollTo = useSmoothScroll();

	const toggleMenu = () => {
		const newState = !isMenuOpen;
		setMenuOpen(newState);
		onMenuToggle?.(newState);
	};

	// Функция для закрытия меню после клика на ссылку
	const handleLinkClick = (e: React.MouseEvent, id: string) => {
		e.preventDefault();
		scrollTo(id);
		setMenuOpen(false); // Закрываем меню после клика
	};

	return (
		<header
			className={`${styles.header} ${
				isMenuOpen ? styles.header_opened : ""
			}`}
		>
			<nav
				className={`${styles.header__nav} ${
					isMenuOpen ? styles.header__nav_opened : ""
				}`}
			>
				<a
					className={`${styles.header__logo} ${
						isMenuOpen ? styles.off : ""
					}`}
				>
					Steam Nest Oasis
				</a>

				<div
					className={`${styles.burger} ${
						isMenuOpen ? styles.active : ""
					}`}
					onClick={toggleMenu}
				>
					<span></span>
					<span></span>
					<span></span>
				</div>

				<ul
					className={`${styles.header__menu_list} ${
						isMenuOpen ? styles.list_flex : ""
					}`}
				>
					<li className={styles.header__menu_item}>
						<NavLink
							to='#'
							onClick={(e) => handleLinkClick(e, "about")}
							className={styles.header__menu_link}
						>
							ABOUT
						</NavLink>
					</li>
					<li className={styles.header__menu_item}>
						<NavLink
							to='/'
							onClick={(e) => handleLinkClick(e, "rental")}
							className={styles.header__menu_link}
						>
							SERVICES
						</NavLink>
					</li>
					<li className={styles.header__menu_item}>
						<NavLink
							to='/'
							onClick={(e) => handleLinkClick(e, "reviews")}
							className={styles.header__menu_link}
						>
							REVIEWS
						</NavLink>
					</li>
					<li className={styles.header__menu_item}>
						<NavLink
							to='#'
							onClick={(e) => handleLinkClick(e, "gallery")}
							className={styles.header__menu_link}
						>
							GALLERY
						</NavLink>
					</li>
					<li className={styles.header__menu_item}>
						<NavLink
							to='#'
							onClick={(e) => handleLinkClick(e, "form")}
							className={styles.header__menu_link}
						>
							CONTACT
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
