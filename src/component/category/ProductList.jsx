import React from "react";

import Cover_28 from "../../asset/landing/28_cov.jpg";

import "./Category.css";

const ProductList = () => {
	return (
		<div className="section-product container">
			<div className="title-wrapper text-center">
				<h2>Buku Baru Andalan</h2>
				<p className="date-title">Periode</p>
				<p className="date-range">30 Juni 2021 - 31 Desember 2022</p>
			</div>
			<div className="product-container mt-5">
				<div className="row">
					<div className="col-4 product-filter">
						<h2>Filter</h2>
						<h3>Kategori</h3>
						<div className="filter-by-price">
							<h3>Harga</h3>
							<p>Minimum</p>
							<input type="number" className="number-input"></input>
							<p>Maximum</p>
							<input type="number" className="number-input"></input>
						</div>
						<div className="filter-by-stock">
							<h3>Filter berdasarkan stok</h3>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"></input>
								<label className="form-check-label" for="flexRadioDefault1">
									Semua
								</label>
							</div>
							<div className="form-check">
								<input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
								<label className="form-check-label" for="flexRadioDefault2">
									Tersedia
								</label>
							</div>
						</div>
					</div>
					<div className="col-8 product-lister">
						<div className="product-list">
							<div className="product-sorter d-flex justify-content-between">
								<p className="d-inline">
									<strong>1-20</strong> dari hasil pencarian produk dengan kata kunci <strong>""</strong>
								</p>
								<select name="menu" id="meun-items">
									<option disabled selected>
										Terbaru
									</option>
									<option value="Terpopuler">Terpopuler</option>
									<option value="Terendah">Harga Terendah</option>
									<option value="Tertinggi">Harga Tertinggi</option>
								</select>
							</div>
							<div className="row book-list mt-5">
								<div className="col-3 mb-4">
									<div className="book-item">
										<div className="book-cover">
											<img src={Cover_28} alt=""></img>
										</div>
										<div className="book-identity">
											<p className="author p-0 mb-1">Author</p>
											<p className="title p-0 m-0">Title</p>
											<p className="price p-0 m-0">Rp.000</p>
											<p className="original-price p-0 m-0">Rp.000</p>
										</div>
									</div>
								</div>
								<div className="col-3 mb-4">
									<div className="book-item">
										<div className="book-cover">
											<img src={Cover_28} alt=""></img>
										</div>
										<div className="book-identity">
											<p className="author p-0 mb-1">Author</p>
											<p className="title p-0 m-0">Title</p>
											<p className="price p-0 m-0">Rp.000</p>
											<p className="original-price p-0 m-0">Rp.000</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
