import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getBooks } from "../../redux/modules/slice";

import Banner from "../../asset/landing/Banner_Category_Buku_Terpouler.png";

const Popular = () => {
	const { books, isLoading, error } = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getBooks());
		console.log('getsbook');
	},);

	if (isLoading) {
		return <h1>Loading</h1>;
	}

	if (error) {
		//if error exists
		return (
			<div className="section-recomendation container my-5">
				<h1>Error in requesting data...</h1>
			</div>
		);
	}
	return (
		<div className="section-popular container my-5">
			<h2>Buku-Buku Terpopuler</h2>
			<div className="row book-list mt-3">
				<div className="col-3">
					<div className="banner">
						<img src={Banner} alt=""></img>
					</div>
				</div>
				<div className="col-9">
					<div className="row">
						{books.slice(0, 5).map((book) => (
							<div className="col" key={book.id}>
								<Link to={`detail/${book.id}`} key={book.id} style={{ textDecoration: "none" }}>
									<div className="book-item">
										<div className="book-cover">
											<img src={book.cover} alt=""></img>
										</div>
										<div className="book-identity">
											<p className="author p-0 mb-1">{book.author}</p>
											<p className="title p-0 m-0">{book.title}</p>
											<p className="price p-0 m-0">Rp {book.newPrice.toLocaleString().replace(",", ".")}</p>
											<p className="original-price p-0 m-0">Rp {book.oldPrice.toLocaleString().replace(",", ".")}</p>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Popular;
