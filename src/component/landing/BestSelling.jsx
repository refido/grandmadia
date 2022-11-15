import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { __getBooks } from "../../redux/modules/slice";

const BestSelling = () => {
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
						{books.slice(0, 5).map((book) => (
							<div className="col" key={book.id}>
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
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default BestSelling;
