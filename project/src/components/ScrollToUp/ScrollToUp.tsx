import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";
import styles from "./scrollToUp.module.scss";

const ScrollToUp = () => {
	const [visible, setVisible] = useState(false);

	const checkScrollTop = () => {
		if (window.scrollY > 400) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", checkScrollTop);
		return () => window.removeEventListener("scroll", checkScrollTop);
	}, []);

	const scrollToUp = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			className={`${styles.scrollToUp} ${visible ? styles.visible : ""}`}
			onClick={scrollToUp}
			aria-label='Scroll to up'
		>
			<FaChevronUp size={30} />
		</button>
	);
};

export default ScrollToUp;
