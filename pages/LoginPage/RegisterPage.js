import React from "react";
import "./RegisterPage.css";
import RegisterImg from "./kayitol.jpg"; // yeşil temalı görsel

const RegisterPage = () => {
    return (
        <div className="register-container">
            <div className="register-left">
                <img src={RegisterImg} alt="Register Illustration" />
            </div>
            <div className="register-right">
                <h2>Kayıt Ol</h2>
                <div className="form-row">
                    <input type="text" placeholder="Adınız" />
                    <input type="text" placeholder="Soyadınız" />
                </div>
                <input type="text" placeholder="Kullanıcı Adı" />
                <input type="email" placeholder="E-posta Adresi (isteğe bağlı)" />
                <input type="password" placeholder="Şifre" />
                <input type="password" placeholder="Şifre (Tekrar)" />
                <button className="register-btn">Kayıt Ol</button>
                <p className="login-link">
                    Zaten bir hesabınız var mı? <a href="/login">Giriş Yap</a>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
