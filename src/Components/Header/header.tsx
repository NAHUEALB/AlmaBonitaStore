import React, { useState, useEffect } from "react";
import icon_header from "../../assets/icons/icon_header.svg";
import "./header.css";



function Header() {
  return (
    <div className="header">

      <div className="icon">
        <a href="https://react.dev" target="_blank">
          <img src={icon_header} className="logo react" alt="React logo" />
        </a>
      </div>

      <div className="search">
        <input type="text" placeholder="Buscar" />
      </div>

      <div className="btn-login">
        <button>Iniciar sesión</button>
        <button>Regístrate</button>
      </div>

    </div>
  );
}

export default Header;
