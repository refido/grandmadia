import React from "react";

import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Category from "../component/landing/Category";
import Recomendation from "../component/landing/Recomendation";
import Footer from "../component/landing/Footer";
import Popular from "../component/landing/Popular";

const LandingPage = () => {
	return (
		<div>
			<Navbar />
			<Header />
			<Category />
			<Recomendation />
			<Popular />
			<Footer />
		</div>
	);
};

export default LandingPage;
