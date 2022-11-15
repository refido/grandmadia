import React from "react";
import "./Landing.css";

const Header = () => {
	return (
		<div className="section-header container">
			<div className="row">
				<div className="col-8">
					<div className="carousel-1">
						<img className="promo-banner" src="https://cdn.gramedia.com/uploads/marketing/Special_Offer_Blue_Lock_06_Storefront__wauto_h336.jpg" alt="" />
					</div>
				</div>
				<div className="col-4">
					<div className="row">
						<div className="col-12">
							<div className="promo-item">
								<img className="promo-banner" src="https://cdn.gramedia.com/uploads/marketing/Special_Offer_Kamus_Besar_Pertamaku_Storefront__wauto_h164.jpg" alt="" />
							</div>
						</div>
						<div className="col-12">
							<div className="promo-item mt-3">
								<img className="promo-banner" src="https://cdn.gramedia.com/uploads/marketing/Gramedia_Year_End_Sale_Periode1_Storefront_Z65dhno__wauto_h164.jpg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
