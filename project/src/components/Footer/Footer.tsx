import { useEffect, useState } from "react";
import styles from "./footer.module.scss";

const Footer = () => {
	const [year, setYear] = useState(new Date().getFullYear());

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.footer}>
				<p>
					<span className={styles.footer__sing}>©</span>
					{year}
					<span className={styles.footer__text} id='year'>
						Steam Nest Oasis
					</span>
				</p>
			</div>
		</div>
	);
};

export default Footer;
