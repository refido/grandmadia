import "../../component/detail/Detail.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { __getStores } from "../../redux/modules/storeSlice";
import { useEffect } from "react";

const StoreList = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const { bookstores, isLoading, error } = useSelector((state) => state.stores);
	const storesList = bookstores['data'];

    useEffect(() => {
		dispatch(__getStores(id));
	}, []);

    if (isLoading) {
		return <div>Loading</div>;
	}

	if (error) {
		return <div>Error in requesting data...</div>;
	}

    return (
        <div>
            <button className="modal-button" data-bs-toggle="modal" data-bs-target="#TokoModal">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                </svg>
            </button>

            {/* Modal box */}
            <div className="modal fade" id="TokoModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header1">
                            <div className="top-container">
                                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                <h5 className="modal-title" id="exampleModalLabel">Pilih Toko</h5>
                                <div></div>
                            </div>
                            <div className="searchbox">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                                <input placeholder="Cari Toko"></input>
                            </div>
                            <div className="filter">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-filter" viewBox="0 0 16 16">
                                    <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                <span>Filter</span>
                            </div>
                        </div>
                        <div className="modal-body">
                            {storesList.map((toko) => (
                                <div className="modalcard-body" /* onClick={handleClick} */ key={toko._id}>
                                    <img className="card-img-2" alt="" src={toko.cover}></img>
                                    <div className="right-modalbox">
                                        <div className="topbox-container">
                                            <div className="store-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" className="bi bi-shop" viewBox="0 0 16 16">
                                                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                                                </svg>
                                                <span>{toko.storeName}</span>
                                            </div>
                                            <div className="store-container">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a5b9ca" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                                </svg>
                                                <span>{toko.storeLocation}</span>
                                            </div>
                                        </div>
                                        <div className="bottombox-container">
                                            <div className="card-text1">{`Rp ` + toko.price}</div>
                                            <div className="card-text2">{toko.stok}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoreList;