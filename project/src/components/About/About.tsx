import styles from "./about.module.scss";

const About = () => {
	return (
		<div id={"about"} className={styles.wrapperAbout}>
			<div className={styles.about}>
				<h2 className={styles.about__title}>
					About us
					<div className={styles.about__hr}></div>
				</h2>
				<div className={styles.about__sectionDiscription}>
					<div className={styles.about__text}>
						<p className={styles.about__boldFond}>Why Sauna?</p>
						For centuries, people have turned to the sauna for
						purification, cleansing, and healing. This ancient
						practice has been embraced by many cultures as a way to
						rejuvenate both body and mind, offering a unique sense
						of relaxation and well-being.
					</div>
					<div className={styles.about__text}>
						With Steam Nest Oasis, you can experience the essence of
						an authentic steam sauna. By pouring water over hot
						stones, you create löyly (a revitalizing steam known as
						the “spirit of life”) and lämpömassa (a gentle yet
						intense heat) that envelops you in warmth and
						tranquility. Immerse yourself in the timeless ritual of
						sauna and restore your balance!
					</div>
					<div className={styles.about__text}>
						<span className={styles.about__textBold}>
							Steam Nest Oasis:
						</span>
						Premium Mobile Sauna Rentals Steam Nest Oasis is the
						leading provider of mobile sauna rentals, bringing the
						ultimate relaxation experience to your location.
					</div>
					<div className={styles.about__text}>
						Our custom-built cedar barrel sauna is a true
						masterpiece, handcrafted with care in British Columbia.
						We use sustainably sourced Western Red Cedar, carefully
						selected, kiln-dried, and crafted with 1.5" thick
						tongue-and-groove walls for exceptional insulation. The
						double-pane tempered glass windows in both doors allow
						natural light to filter in, while integrated
						color-changing LED lights set the perfect ambiance for
						evening sessions.
					</div>
					<div className={styles.about__text}>
						But that’s not all – our sauna also features a flat
						floor for comfort, a separate changing area, towel
						hooks, a bucket and ladle, and more! Experience the
						warmth and wellness of a premium mobile sauna with Steam
						Nest Oasis.
					</div>
					<h3 className={styles.about__subtitle}>
						SteamNest: your personal oasis of tranquility, wherever
						you go.
					</h3>
				</div>
			</div>
		</div>
	);
};

export default About;
