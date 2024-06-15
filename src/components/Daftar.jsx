import React from 'react';
import './Daftar.css';
import Logo from "../img/Logo2.png";
import Object from "../img/OBJECTS.svg";

const Daftar = () => {
    return (
        <div className="container-fluid" style={{ backgroundColor: '#f7f7f7', fontFamily: 'Montserrat' }}>
            <div className="half-background">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-6 offset-3 py-5 text-center" style={{ color: '#124E31' }}>
                                <h2><b>Temukan Inspirasi Baru!</b></h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-8 offset-2">
                                <img src={Object} alt="object" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                    <div className="row">
                        <div className="col-2 offset-1 py-3">
                            <div className="gambar">
                                <img src={Logo} alt="" className="img-fluid" style={{ maxWidth: '60%', paddingRight: '750px' }} />
                            </div>
                        </div>
                    </div>
                    <div className="row py-1">
                        <div className="col-2 offset-1" style={{ color: '#124E31', textAlign: 'left', paddingLeft: '260px', fontSize: '30px' }}>
                            <h4><b>Daftar</b></h4>
                        </div>
                    </div>

                <div className="row py-1">
                    <div className="col-2">
                        <div className="form-container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="firstName">Nama Depan:</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className="form-container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="lastName">Nama Belakang:</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5">
                        <div className="form-container">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="password">Kata Sandi:</label>
                                    <input type="password" id="password" name="password" required />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label htmlFor="confirmPassword">Konfirmasi Kata Sandi:</label>
                                    <input type="password" id="confirmPassword" name="confirmPassword" required />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="row">
                        <div className="col-2 offset-1" style={{paddingLeft: '220px', paddingTop: '20px' }}>
                            <button className="custom-button"><b>Daftar</b></button>
                        </div>
                        <br />
                        <div className="col-2 offset-1" style={{paddingLeft: '170px' }}>
                            <p>Sudah punya akun?      <a href="/">Masuk</a></p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Daftar;