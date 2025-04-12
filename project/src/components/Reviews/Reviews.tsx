import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./reviews.module.scss";

const Reviews = () => {
	return (
		<div className={styles.wrapper} id={"reviews"}>
			<div className={styles.reviews}>
				<h2 className={styles.reviews__mainTitle}>
					Reviews from our clients
					<div className={styles.reviews__hr}></div>
				</h2>
				<ul className={styles.reviews__item}>
					<li className={styles.reviews__list}>
						<div className={styles.reviews__discription}>
							<p className={styles.reviews__text}>
								"I usually find saunas overwhelming, but the
								Steam Nest Oasis sauna felt surprisingly
								relaxing! Being able to adjust the steam made
								all the difference."
							</p>
							<img
								src='./images/Wemen.jpg'
								alt='User'
								className={styles.reviews__avatar}
							/>
							<p className={styles.reviews__name}>
								Sophia Miller
							</p>
							<div className={styles.reviews__itemsStars}>
								{[...Array(5)].map((_, i) => (
									<FontAwesomeIcon
										key={i}
										icon={faStar}
										className={styles.reviews__stars}
									/>
								))}
							</div>
						</div>
					</li>
					<li className={styles.reviews__list}>
						<div className={styles.reviews__discription}>
							<p className={styles.reviews__text}>
								"I knew saunas were good for health, but I was
								amazed at how invigorated I felt after just one
								session!"
							</p>
							<img
								src='./images/wumen.jpg'
								alt='User'
								className={styles.reviews__avatar}
							/>
							<p className={styles.reviews__name}>Mia Wilson</p>
							<div className={styles.reviews__itemsStars}>
								{[...Array(5)].map((_, i) => (
									<FontAwesomeIcon
										key={i}
										icon={faStar}
										className={styles.reviews__stars}
									/>
								))}
							</div>
						</div>
					</li>
					<li className={styles.reviews__list}>
						<div className={styles.reviews__discription}>
							<p className={styles.reviews__text}>
								"It's so easy and hassle-free to use! I was
								impressed by how efficiently a single piece of
								firewood kept the heat going."
							</p>
							<img
								src='./images/hSome.jpg'
								alt='User'
								className={styles.reviews__avatar}
							/>
							<p className={styles.reviews__name}>John Wills</p>
							<div className={styles.reviews__itemsStars}>
								{[...Array(5)].map((_, i) => (
									<FontAwesomeIcon
										key={i}
										icon={faStar}
										className={styles.reviews__stars}
									/>
								))}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Reviews;
