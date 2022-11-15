import React from "react";

import Cover_28 from "../../asset/landing/28_cov.jpg";

const BestSelling = () => {
	return (
		<div className="section-best-seller container my-5">
			<h2>Novel Paling Laris</h2>
			<div className="row book-list mt-3">
				<div className="col-3">
					<div className="banner">
						<img src="https://cdn.gramedia.com/uploads/category-list/Banner_Category_Gcom_2_Novel_Paling_Laris__w204_hauto.png" alt=""></img>
					</div>
				</div>
				<div className="col-9">
					<div className="row">
						<div className="col">
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
						<div className="col">
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
						<div className="col">
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
						<div className="col">
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
						<div className="col">
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
	);
};

export default BestSelling;
