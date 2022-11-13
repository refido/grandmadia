import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<div>
			<div className="container">Landing Page</div>
			<Link to="/detail">Detail</Link>
		</div>
	);
};

export default LandingPage;
