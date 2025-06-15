import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <ul className="nav-list">
                    <li>
                        <NavLink to="/" end className="nav-link home">
                            Ana Sayfa
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" className="nav-link login">
                            Giriş Yap
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sayac" className="nav-link sayac">
                            YKS Sayacı
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/moduller" className="nav-link moduller">
                            Modüller
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/sinavlar" className="nav-link sinavlar">
                            Sınavlar
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/iletisim" className="nav-link iletisim">
                            İletişim
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
