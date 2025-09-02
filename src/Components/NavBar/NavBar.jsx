import { Link } from "react-scroll";
import { useEffect, useState } from 'react';
import "./Navbar_Style.css";
import logo from '../../assets/Logo_recorte.png'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // cuando baja más de 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top p-4 ${scrolled ? "scrolled" : ""}`}>
     <div class="container-fluid">
        <img
          src={logo}
          alt="logo"
          className="logo_img navbar-brand"
        />

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Link
              to="sobre-mi"
              className="nav-link text-center"
              smooth={true}
              duration={500}
              spy={true}
              offset={-200}
            >
              Sobre mi
            </Link>
            <Link
              to="proyectos"
              className="nav-link text-center"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
            >
              Proyectos
            </Link>
            <Link
              to="habilidades"
              className="nav-link text-center"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
            >
              Habilidades
            </Link>
            <Link
              to="formacion"
              className="nav-link text-center"
              smooth={true}
              duration={500}
              spy={true}
              offset={-100}
            >
              Formación
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
