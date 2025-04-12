import styles from "./scrollToForm.module.scss";

const ScrollToForm = () => {
	const scrollToForm = () => {
		const formSection = document.getElementById("form");
		if (formSection) {
			formSection.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<button
			className={styles.scrollToForm}
			onClick={scrollToForm}
			aria-label='Scroll to form'
		>
			Book Online
		</button>
	);
};

export default ScrollToForm;
