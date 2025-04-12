import useSmoothScroll from "../../hooks/useSmoothScroll";
import Button from "../UI/Button/Button";
import styles from "./banner.module.scss";

const Banner = () => {
	const scrollTo = useSmoothScroll();

	return (
		<div className={styles.wrapper}>
			<div className={styles.content}>
				<div className={styles.content__discription}>
					<span className={styles.content__logo}>
						Steam Nest Oasis
					</span>
					<h1 className={styles.content__title}>
						Find Your Peace Anywhere.
					</h1>
					<p className={styles.content__text}>
						Experience tranquility on the go with SteamNest Oasis,
						your personal sanctuary for relaxation. This portable
						oasis creates a space of warmth and comfort, whether
						you’re at home, in the office, or out in nature. Embrace
						the feeling of your own peaceful retreat, where modern
						convenience meets natural serenity.
					</p>
					<div className={styles.button__wrapper}>
						<Button click={() => scrollTo("form")} text={"Book"} />
					</div>
				</div>
				<div className={styles.content__foto}>
					<img
						className={styles.content__foto_img}
						src='./images/imgMain.JPG'
						alt='Steam Nest Oasis'
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
