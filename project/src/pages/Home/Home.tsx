import { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Gallery from "../../components/Gallery/Gallery";
import FormContact from "../../components/FormContact/FormContact";
import Banner from "../../components/Banner/Banner";
import Reviews from "../../components/Reviews/Reviews";
import styles from "./home.module.scss";
import Story from "../../components/Story/Story";
import ScrollToUp from "../../components/ScrollToUp/ScrollToUp";
import RentRuls from "../../components/RentRuls/RentRuls";
import ScrollToForm from "../../components/ScrollToForm/ScrollToForm";
// import Helmet from "../../components/Helmet/Helmet";

const Home = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const handleMenuToggle = (state: any) => {
		setMenuOpen(state);
	};

	return (
		<>
			{/* <Helmet /> */}
			<Header onMenuToggle={handleMenuToggle} />
			<main
				className={`${isMenuOpen ? "hidden" : ""} ${
					styles.main
				}`.trim()}
			>
				{/* <main className={isMenuOpen ? "hidden" : ""}> */}
				<Banner />
				<About />
				<Gallery />
				<Story />
				<Reviews />
				<RentRuls />
				<FormContact />
			</main>
			<Footer />
			<ScrollToUp />
			<ScrollToForm />
		</>
	);
};

export default Home;
