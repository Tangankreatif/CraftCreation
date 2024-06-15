import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginPenjual, reset } from "../features/authSlice";
import '../components/Login.css';
import Logo from "../img/Logo2.png";
import Object from "../img/OBJECTS.svg";
import { IoLogoGoogle, IoLogoFacebook, IoLogoTwitter} from "react-icons/io5";

const Login = () => {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { penjual, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (penjual || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [penjual, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginPenjual({ email, password }));
  };

    return (
        <div style={{ backgroundColor: '#f7f7f7', fontFamily: 'Montserrat' }}>
            <div className="half-background">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-3 py-5" style={{ textAlign: 'center', color: '#124E31', paddingLeft: '50px', fontSize: '30px' }}>
                                <h2><b>Nyalakan Kreativitasmu!</b></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <img src={Object} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-2 offset-1 py-3">
                            <div className="gambar">
                                <img src={Logo} alt="" className="img-fluid" style={{ maxWidth: '55%', paddingRight: '700px'}} />
                            </div>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-2 offset-1" style={{ color: '#124E31', textAlign: 'center', paddingRight: '680px', fontSize: '30px' }}>
                            <h4><b>Masuk</b></h4>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                            <div className="form-container">
                            <form onSubmit={Auth}>
                            {isError && <p className="has-text-centered">{message}</p>}
                                    <div className="form-group">
                                        <label htmlFor="email">Email:</label>
                                        <input type="email" id="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Kata Sandi:</label>
                                        <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingLeft: '100px' }}>
                    <div className="col-3">
                        <form id="formSelectAll">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="selectAll" />
                                <label className="form-check-label" htmlFor="selectAll">
                                    Ingatkan Saya
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="col-2" style={{ paddingTop: '10px' }}>
                        <a href="/" style={{ textDecoration: 'none' }}>Lupa Kata Sandi?</a>
                    </div>
                </div>
                <div className="row" style={{ paddingLeft: '320px' }}>
                    <div className="col-4 offset-1">
                        <div className="social-links py-4">
                            <a href="!#"><IoLogoFacebook/></a>
                            <a href="!#"><IoLogoGoogle/></a>
                            <a href="!#"><IoLogoTwitter/></a>
                        </div>
                    </div>
                </div>
                <div className="row" style={{ paddingLeft: '310px' }}>
                    <div className="col-2 offset-1">
                        <button href="/Beranda.html" type="submit" className="custom-button">{isLoading ? "Loading..." : "Masuk"}</button>
                        <br />
                        <br />
                        <p>Buat Akun?<a href="/Daftar">Daftar</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
