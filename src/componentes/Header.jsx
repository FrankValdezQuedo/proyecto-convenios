import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Header = () => {
  return (
    <header
      style={{
        background: "linear-gradient(45deg, #007bff, #6610f2)",
        padding: "10px 0",
        width: "100%", // Asegura que cubra todo el ancho
      }}
    >
      <div className="container d-flex justify-content-between align-items-center">
        {/* Logo y Título */}
        <div className="d-flex align-items-center">
          <img
            src="../public/logouni.png"
            alt="Logo Universidad"
            height="80"
            className="rounded-circle me-3"
          />
          <h1 className="text-white h4 mb-0">UNJFSC</h1>{" "}
          {/* Título más corto */}
        </div>

        {/* Menú de navegación */}
        <nav>
          <ul className="nav justify-content-center align-items-center">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">
                Acerca de
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/convenios">
                Lista de Convenios
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">
                Contactos
              </a>
            </li>
          </ul>
        </nav>

        {/* Iconos de redes sociales */}
        <div className="d-flex align-items-center">
          <a
            href="https://www.facebook.com/UNJFSCoficial/?locale=es_LA"
            className="text-white me-3"
          >
            <Facebook size={24} />
          </a>
          <a href="#" className="text-white me-3">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-white">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
