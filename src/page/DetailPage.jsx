import "../App.css";

const DetailPage = () => {
  return (
    <div className="containerDetail">
      <h1 className="main-title">Book Detail Page</h1>
      <div className="header">
        <div className="container text-center">
          <div className="row">
            <div className="col title-grandmedia">
              <h4>GrandeMedia.com </h4>
            </div>
            <div className="col-6">
              <input
                className="form-control"
                placeholder="Search Product"
              ></input>
            </div>
            <div className="col title-grandmedia">
              <h4>Login</h4>
            </div>
          </div>
        </div>
      </div>
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
            <h4> Recomendation</h4>
            <div className="grid grid-cols-5">
              <div class="card list-card">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  className="card-img-top"
                  alt=""
                ></img>
                <div className="card-body">
                  <p>
                    ae ligula commodo ultricies. Vestibulum sodales sapien quis
                    quam blandit suscipit. Etiam varius suscipit vestibulum.
                    non. Nullam eu tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
              <div class="card list-card">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  className="card-img-top"
                  alt=""
                ></img>
                <div className="card-body">
                  <p>
                    ae ligula commodo ultricies. Vestibulum sodales sapien quis
                    quam blandit suscipit. Etiam varius suscipit vestibulum.
                    non. Nullam eu tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
              <div class="card list-card">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  className="card-img-top"
                  alt=""
                ></img>
                <div className="card-body">
                  <p>
                    ae ligula commodo ultricies. Vestibulum sodales sapien quis
                    quam blandit suscipit. Etiam varius suscipit vestibulum.
                    non. Nullam eu tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
              <div class="card list-card">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  className="card-img-top"
                  alt=""
                ></img>
                <div className="card-body">
                  <p>
                    ae ligula commodo ultricies. Vestibulum sodales sapien quis
                    quam blandit suscipit. Etiam varius suscipit vestibulum.
                    non. Nullam eu tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
              <div class="card">
                <img
                  src="https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//94/MTA-28352263/no_brand_novel_tere_liye_bedebah_di_ujung_tanduk_full01_emvp6a1.jpg"
                  className="card-img-top"
                  alt=""
                ></img>
                <div className="card-body">
                  <p>
                    ae ligula commodo ultricies. Vestibulum sodales sapien quis
                    quam blandit suscipit. Etiam varius suscipit vestibulum.
                    non. Nullam eu tempus quam. Ut mattis lobortis blandit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
