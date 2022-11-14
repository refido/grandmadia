import "../component/detail/Detail.css";
import Navbar from "../component/landing/Navbar";
import Header from "../component/landing/Header";
import Footer from "../component/landing/Footer";
import Recomendation from "../component/landing/Recomendation";


const DetailPage = () => {
  return (
    <div className="containerDetail">
      <Navbar />
      <h1 className="main-title">Book Detail Page</h1>
      <div className="body">
        <div className="container">
          <div className="grid grid-cols-3">
            <div className="grid grid-rows-1 grid-flow-col gap-4">
              <div className="row-span-4">
                <div className="card main-card">
                  <img
                    className="card-img-top"
                    src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  ></img>
                </div>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-flow-col gap-4 ">
              <div className="row-span-8">
                <h3>Books Title</h3>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam cursus vitae neque vel tempus. Aenean sit amet turpis
                  tempor sapien aliquet mollis. Nullam porta libero nisl, ut
                  sodales tortor fringilla id. Ut vel tellus mi. Proin pretium,
                  diam sed tincidunt maximus, tellus augue vestibulum ante, et
                  pellentesque lorem massa ac nibh. Morbi semper rutrum
                  convallis. Pellentesque urna nulla, ultricies vulputate
                  vehicula semper, ultrices a quam. Suspendisse vulputate ante
                  nec maximus ultrices. Etiam elementum urna vitae ligula
                  commodo ultricies. Vestibulum sodales sapien quis quam blandit
                  suscipit. Etiam varius suscipit vestibulum. non. Nullam eu
                  tempus quam. Ut mattis lobortis blandit.
                </span>
              </div>
            </div>

            <div className="grid grid-rows-1 grid-flow-col gap-4 ">
              <div className="row-span-2">
                <div className="card-body  col-10 border border-danger">
                  <h5 className="card-title"> Information </h5>
                  <p className="card-text">
                    entesque urna nulla, ultricies vulputate vehicula semper,
                    ultrices a quam. Suspendisse vulputate ante nec maximus
                    ultrices. Etiam elementum urna vitae ligula commodo
                    ultricies. Vestibulum sodales sapien quis quam blandit
                    suscipit. Etiam varius suscipit vestibulum. non. Nullam eu
                    tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* end grid 3 */}

          {/* start grid 5 */}
          <div className="recomendation">
          <Recomendation />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DetailPage;
