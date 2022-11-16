import React from "react";
import Footer from "../component/landing/Footer";
import Navbar from "../component/landing/Navbar";
import ProductSearch from "../component/search/ProductSearch";

const SearchPage = () => {
	return (
		<div>
			<Navbar />
			<ProductSearch />
			<Footer />
		</div>
	);
};

export default SearchPage;
