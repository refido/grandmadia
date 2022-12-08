import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Icon_facebook from "../../asset/login/Facebook_icon.svg.png";
import Icon_google from "../../asset/login/Google__G__Logo.svg.png";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import { signupUser } from "../../redux/modules/userSlice";
const schema = yup.object({
  fullname: yup.string().required("Nama Lengkap is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Email is not valid."),
  password: yup.string().required("Password is required"),
  passwordConfirm: yup
    .string()
    .required("Konfirmasi Password is required")
    .oneOf([yup.ref("password"), null], "Password must match"),
});

const Content = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [termsCheck, setTermsCheck] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
  });

  const signup = (data) => {
    if (!termsCheck) {
      return toast.error("Syarat & Ketentuan Must Be Checked", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    const response = dispatch(
      signupUser({
        name: data.fullname,
        email: data.email,
        password: data.password,
      })
    );
    response.then((data) => {
      console.log("here", data);
      if (data.payload.status === 412) {
        return toast.error(data.payload.data.errorMessage, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      toast.success("Akun berhasil dibuat", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      reset();
      navigate("/login");
    });
    // console.log("respionse", response);
    // if (response?.errorMessage) {
    //   return toast.error(response?.errorMessage, {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // } else {
    //   toast.success("Akun berhasil dibuat", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    //   reset({});
    //   navigate("/login");
    // }
    // const response = dispatch(registerUser(data));
  };

  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const createAccount = async () => {
  //     try {
  //       await axios.post(
  //         "https://grandemedia-clone-server.herokuapp.com/accounts",
  //         { name, email, password }
  //       );
  //       setName("");
  //       setEmail("");
  //       setPassword("");
  //       navigate("/cart");
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const handleChangeName = (event) => {
  //     setName(event.target.value);
  //   };
  //   const handleChangeEmail = (event) => {
  //     setEmail(event.target.value);
  //   };
  //   const handleChangePassword = (event) => {
  //     setPassword(event.target.value);
  //   };
  //   const handleRegister = (event) => {
  //     event.preventDefault(); // prevent reloading while submitting
  //     if (!name && email && password) return;
  //     createAccount();
  //   };
  return (
    <div className="section-header container">
      <ToastContainer />
      <div className="row">
        <h1 className="text-primary">Daftar</h1>
        <div className="col-5 text-center">
          <form onSubmit={handleSubmit(signup)}>
            <div className="form-floating mb-3">
              <input
                {...register("fullname")}
                className={
                  errors.fullname?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInputName"
                placeholder="Fullname"
              />
              {errors.fullname?.message ? (
                <label htmlFor="floatingInputNameInvalid">
                  {errors.fullname?.message}
                </label>
              ) : (
                <label htmlFor="floatingInputName">Nama Lengkap</label>
              )}
            </div>
            <div className="form-floating mb-3">
              <input
                {...register("email")}
                className={
                  errors.email?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInputEmail"
                placeholder="example@mail.com"
              />
              {errors.email?.message ? (
                <label htmlFor="floatingInputEmailInvalid">
                  {errors.email?.message}
                </label>
              ) : (
                <label htmlFor="floatingInputEmail">Email</label>
              )}
            </div>
            <div className="form-floating mb-4">
              <input
                {...register("password")}
                className={
                  errors.password?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInputPassword"
                placeholder="password"
                type="password"
              />
              {errors.password?.message ? (
                <label htmlFor="floatingInputPasswordInvalid">
                  {errors.password?.message}
                </label>
              ) : (
                <label htmlFor="floatingInputPassword">Password</label>
              )}
            </div>
            <div className="form-floating mb-4">
              <input
                {...register("passwordConfirm")}
                className={
                  errors.passwordConfirm?.message
                    ? "form-control is-invalid"
                    : "form-control"
                }
                id="floatingInputPasswordConfirm"
                placeholder="password"
                type="password"
              />
              {errors.passwordConfirm?.message ? (
                <label htmlFor="floatingInputPasswordConfirmInvalid">
                  {errors.passwordConfirm?.message}
                </label>
              ) : (
                <label htmlFor="floatingInputPasswordConfirm">
                  Konfirmasi Password
                </label>
              )}
            </div>
            <div className="form-check mb-4 text-start text-primary">
              <input
                className="form-check-input"
                type="checkbox"
                id="flexCheckDefault"
                onChange={() => setTermsCheck(!termsCheck)}
              ></input>
              <label className="form-check-label" for="flexCheckDefault">
                Dengan pembuatan akun, Anda menyetujui <u>Syarat & Ketentuan</u>{" "}
                serta <u>Kebijakan Privasi</u> Gramedia.com
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-light w-100 mb-4 text-primary"
            >
              Daftar
            </button>
          </form>
          <p>
            Sudah Mendaftar? <a href="/login">Masuk</a>
          </p>
        </div>
        <div
          className="col-2 text-center"
          style={{
            width: "55px",
            marginLeft: "50px",
            marginRight: "50px",
            color: "GrayText",
          }}
        >
          <div className="vr" style={{ height: "150px" }}></div>
          atau
          <div className="vr" style={{ height: "150px" }}></div>
        </div>
        <div className="col-5 text-center">
          <div>
            <button
              type="button"
              className="btn border border-dark w-100 mb-4 text-primary"
            >
              <img
                src={Icon_facebook}
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              ></img>
              Masuk dengan Facebook
            </button>
            <button
              type="button"
              className="btn border border-dark w-100 mb-4 text-primary"
            >
              <img
                src={Icon_google}
                alt=""
                style={{ width: "30px", height: "30px", marginRight: "10px" }}
              ></img>
              Masuk dengan Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
