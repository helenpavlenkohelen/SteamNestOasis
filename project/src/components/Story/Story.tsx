import styles from "./story.module.scss";

const Story = () => {
	return (
		<div id={"story"} className={styles.wrapperStory}>
			<div className={styles.story}>
				<h2 className={styles.story__title}>
					The Story of SteamNest
					<div className={styles.story__hr}></div>
				</h2>
				<div className={styles.story__sectionDiscription}>
					<div className={styles.story__text}>
						It all started with a simple idea: to make true
						relaxation accessible anytime, anywhere. The founders of
						SteamNest were a team of enthusiasts who believed that
						unwinding shouldn’t depend on expensive spas or
						out-of-town retreats. They wanted to create something
						that would bring comfort, warmth, and rejuvenation to
						everyone, no matter their lifestyle.
					</div>
					<div className={styles.story__text}>
						Inspired by sauna traditions from different
						cultures—ranging from Finnish baths to Japanese
						onsens—they developed SteamNest Oasis, a portable space
						for solitude and relaxation. Their goal wasn’t just to
						design a convenient portable sauna but to give people a
						way to care for their body and mind in the fast pace of
						modern life.
					</div>
					<div className={styles.story__text}>
						From day one, SteamNest has adhered to three core
						principles: innovation, quality, and convenience. Every
						detail is carefully designed to ensure that using
						SteamNest Oasis is intuitive, safe, and effective.
					</div>
					<div className={styles.story__text}>
						Today, SteamNest is more than just a brand—it’s a
						philosophy of mindful relaxation. No matter where you
						are—at home, in the office, or outdoors—SteamNest Oasis
						creates a cozy sanctuary where you can unwind, recharge,
						and restore your energy.
					</div>
					<h3 className={styles.story__subtitle}>
						SteamNest: your personal oasis of tranquility, wherever
						you go.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Story;
