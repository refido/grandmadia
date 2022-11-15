import React from "react";
import ProductList from "../component/category/ProductList";
import Footer from "../component/landing/Footer";
import Navbar from "../component/landing/Navbar";

const CategoryPage = () => {
	return (
		<div>
			<Navbar />
			<ProductList />
			<Footer />
		</div>
	);
};

export default CategoryPage;
