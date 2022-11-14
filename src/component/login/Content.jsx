import React from "react";

const Content = () => {
    return (
        <div className="section-header container">
            <div className="row">
                <div className="col-6">
                    <h1>Masuk</h1>
                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="Email"></input>
                        <label for="floatingInput">Email</label>
                    </div>
                    <div class="form-floating">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"></input>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating"><a href="/">Lupa kata sandi?</a></div>
                    <button type="button" class="btn btn-secondary">Masuk</button>
                    <p>Belum Mendaftar?<a href="/">Daftar</a></p>
                </div>
                <div className="col-6">
                    <div className="carousel-1"></div>
                </div>
            </div>
        </div >
    );
};

export default Content;