import styles from "./rentRuls.module.scss";

const RentRuls = () => {
	return (
		<section className={styles.parallaxSection} id={"rental"}>
			<div className={styles.parallaxSection__content}>
				<div className={styles.parallaxSection__cloud}>
					<h3>
						Instructions and Responsibilities for Mobile Sauna
						<br />
						Rental from Steam Nest Oasis
					</h3>
				</div>
				<ul className={styles.parallaxSection__item}>
					<li className={styles.parallaxSection__list}>
						<div className={styles.parallaxSection__box}>
							<strong>
								1. General Rental Terms Age Requirement:
							</strong>
							<p>
								The renter must be at least 18 years old. Rental
								Period:
							</p>
							<p>
								The sauna is rented for a specified period and
								must be returned in proper condition.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.parallaxSection__box}>
							<strong>
								2. Responsibilities of the Lessor (Steam Nest
								Oasis) Delivery and Setup:
							</strong>
							<p>
								Free delivery and setup are provided within the
								designated service area. Additional fees may
								apply for remote locations. Instructions and
								Safety:
							</p>
							<p>
								A brief setup and safety tutorial will be
								provided upon delivery. Firewood Supply:
							</p>
							<p>
								Each rental includes a sufficient amount of
								firewood to maintain heat.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.parallaxSection__box}>
							<strong>
								3. Responsibilities of the Renter Proper Usage:
							</strong>
							<p>
								The sauna must be used in accordance with the
								provided instructions and safety guidelines.
								Cleanliness:
							</p>
							<p />
							<p>
								The sauna should be kept clean and returned in
								its original condition. Liability for Damage:
							</p>
							<p>
								The renter is responsible for any damage to the
								equipment and must cover repair costs if
								necessary.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.parallaxSection__box}>
							<strong>
								4. Safety and Liability Personal Responsibility:
							</strong>
							<p>
								The renter assumes full responsibility for their
								own health and safety, as well as the safety of
								any guests using the sauna. Prohibited
								Substances:
							</p>
							<p>
								The use of alcohol or illegal substances inside
								the sauna is strictly forbidden. Reporting
								Issues:
							</p>
							<p>
								If any malfunctions or emergency situations
								arise, the renter must immediately stop using
								the sauna and contact Steam Nest Oasis.
							</p>
						</div>
					</li>
					<li>
						<div className={styles.parallaxSection__box}>
							<strong>
								5. Booking and Cancellation Policy How to Book:
							</strong>
							<p>
								Reservations can be made through the website or
								by phone. Cancellation Policy:
							</p>
							<p>
								Cancellations must be made at least 24 hours in
								advance. Late cancellations may be subject to a
								fee.
							</p>
						</div>
					</li>
				</ul>
			</div>
		</section>
	);
};

export default RentRuls;
