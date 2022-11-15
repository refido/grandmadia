import React from "react";
import { Link } from "react-router-dom";

import Icon_category_alat_tulis from "../../asset/landing/Icon_category_Alat_Tulis.png";
import Icon_category_Buku_Baru from "../../asset/landing/Icon_category_Buku_Baru.png";
import Icon_category_Buku_Pilihan from "../../asset/landing/Icon_category_Buku_Pilihan.png";
import Icon_category_Buku_Import from "../../asset/landing/Icon_category_Buku_Import.png";
import Icon_category_ebook from "../../asset/landing/Icon_category_ebook.png";
import Icon_category_Mainan from "../../asset/landing/Icon_category_Mainan.png";
import Icon_category_Print_on_Demand from "../../asset/landing/Icon_category_Print_on_Demand.png";
import Icon_category_Voucher_Gramedia_Academy_2 from "../../asset/landing/Icon_category_Voucher_Gramedia_Academy_2.png";

import "./Landing.css";

const Category = () => {
	return (
		<div className="section-category container mt-4">
			<div className="row">
				<div className="col-6">
					<div className="row">
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Buku_Baru} alt=""></img>
									<p className="text-center">Buku Baru Andalan</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Buku_Pilihan} alt=""></img>
									<p className="text-center">Buku Pilihan</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Buku_Import} alt=""></img>
									<p className="text-center">Buku Import</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_ebook} alt=""></img>
									<p className="text-center">E-Book & Paket Premium</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="col-6">
					<div className="row">
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Voucher_Gramedia_Academy_2} alt=""></img>
									<p className="text-center">Gramedia Academy</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Print_on_Demand} alt=""></img>
									<p className="text-center">Print On Demand</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_alat_tulis} alt=""></img>
									<p className="text-center">Stationery</p>
								</div>
							</Link>
						</div>
						<div className="col-3">
							<Link to={`category`} style={{ textDecoration: "none" }}>
								<div className="icon text-center">
									<img src={Icon_category_Mainan} alt=""></img>
									<p className="text-center">Mainan</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Category;
