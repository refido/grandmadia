import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getBooks } from "../../redux/modules/slice";

import "./Landing.css";

const Recomendation = () => {
	const { books, isLoading, error } = useSelector((state) => state.books);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(__getBooks());
	}, []);

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
		<div className="section-recomendation container my-5">
			<h2>Rekomendasi Gramedia Untukmu</h2>
			<div className="row book-list mt-3">
				{books.slice(0, 6).map((book) => (
					<div className="col-2 mb-3" key={book.id}>
						<Link to={`detail/${book.id}`} key={book.id} style={{ textDecoration: "none" }}>
							<div className="book-item">
								<div className="book-cover">
									<img src={book.cover} alt="Book Cover"></img>
								</div>
								<div className="book-identity">
									<p className="author p-0 mb-1">{book.author}</p>
									<p className="title p-0 m-0">{book.title}</p>
									<div>
										<p className="price p-0 m-0">Rp {book.newPrice.toLocaleString().replace(",", ".")}</p>
									</div>
									<p className="original-price p-0 m-0">Rp {book.oldPrice.toLocaleString().replace(",", ".")}</p>
								</div>
							</div>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recomendation;
