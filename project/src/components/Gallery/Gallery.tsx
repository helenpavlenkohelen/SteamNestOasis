import { useState } from "react";
import styles from "./gallery.module.scss";

const Gallery = () => {
	const [images] = useState([
		{
			className: styles.about__teg,
			src: "/images/barrel.jpg",
			alt: "Teg",
		},
		{
			className: styles.about__teg,
			src: "/images/sauna.jpg",
			alt: "Example 2",
		},
		{
			className: styles.about__teg,
			src: "/images/banja.jpg",
			alt: "Example 3",
		},
	]);

	const [currentIndex, setCurrentIndex] = useState(0);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
	};

	const prevSlide = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	return (
		<div id='gallery' className={styles.wrapperSlider}>
			<div className={styles.slider}>
				<button
					className={`${styles.prev} ${styles.button}`}
					onClick={prevSlide}
				>
					❮
				</button>

				<div className={styles.sliderContainer}>
					<div
						className={styles.slides}
						style={{
							transform: `translateX(-${currentIndex * 100}%)`,
						}}
					>
						{images.map((image, index) => (
							<div key={index} className={styles.slide}>
								<img
									src={image.src}
									alt={image.alt}
									className={image.className}
								/>
							</div>
						))}
					</div>
				</div>

				<button
					className={`${styles.next} ${styles.button}`}
					onClick={nextSlide}
				>
					❯
				</button>

				<div className={styles.dots}>
					{images.map((_, index) => (
						<span
							key={index}
							className={`${styles.dot} ${
								index === currentIndex ? styles.active : ""
							}`}
							onClick={() => setCurrentIndex(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Gallery;
