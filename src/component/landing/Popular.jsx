import React from "react";

import Banner from "../../asset/landing/Banner_Category_Buku_Terpouler.png";
import Cover_28 from "../../asset/landing/28_cov.jpg";

const Popular = () => {
	return (
		<div className="section-popular container my-5">
			<h2>Buku-Buku Terpopuler</h2>
			<div className="row book-list mt-3">
				<div className="col-3">
					<div class="banner">
						<img src={Banner} alt=""></img>
					</div>
				</div>
				<div className="col-9">
					<div className="row">
						<div class="col">
							<div class="book-item">
								<div class="book-cover">
									<img src={Cover_28} alt=""></img>
								</div>
								<div class="book-identity">
									<p class="author p-0 mb-1">Author</p>
									<p class="title p-0 m-0">Title</p>
									<p class="price p-0 m-0">Rp.000</p>
									<p class="original-price p-0 m-0">Rp.000</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="book-item">
								<div class="book-cover">
									<img src={Cover_28} alt=""></img>
								</div>
								<div class="book-identity">
									<p class="author p-0 mb-1">Author</p>
									<p class="title p-0 m-0">Title</p>
									<p class="price p-0 m-0">Rp.000</p>
									<p class="original-price p-0 m-0">Rp.000</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="book-item">
								<div class="book-cover">
									<img src={Cover_28} alt=""></img>
								</div>
								<div class="book-identity">
									<p class="author p-0 mb-1">Author</p>
									<p class="title p-0 m-0">Title</p>
									<p class="price p-0 m-0">Rp.000</p>
									<p class="original-price p-0 m-0">Rp.000</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="book-item">
								<div class="book-cover">
									<img src={Cover_28} alt=""></img>
								</div>
								<div class="book-identity">
									<p class="author p-0 mb-1">Author</p>
									<p class="title p-0 m-0">Title</p>
									<p class="price p-0 m-0">Rp.000</p>
									<p class="original-price p-0 m-0">Rp.000</p>
								</div>
							</div>
						</div>
						<div class="col">
							<div class="book-item">
								<div class="book-cover">
									<img src={Cover_28} alt=""></img>
								</div>
								<div class="book-identity">
									<p class="author p-0 mb-1">Author</p>
									<p class="title p-0 m-0">Title</p>
									<p class="price p-0 m-0">Rp.000</p>
									<p class="original-price p-0 m-0">Rp.000</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popular;
