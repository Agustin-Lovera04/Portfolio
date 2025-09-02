import { useEffect } from "react";
import Cards from "../Cards/Cards";
import Form from "../Form/Form";
import Skills from "../Skills/Skills";
import Timeline from "../TimeLine/TimeLine";
import "./Home_Styles.css";

const Home = () => {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container-fluid">
      {/* SECCIÓN 1 */}
      <div className="sc1 row align-items-center" id="inicio">
        <div
          className="col-12 col-md-4 text-center text-md-end"
          data-aos="fade-right"
        >
          <img src="/images/img_perfil.png" alt="" className="img_perfil" />
        </div>
        <div
          className="col-12 col-md-8 d-flex align-items-center"
          data-aos="fade-left"
        >
          <div className="text-center text-light">
            <h1 className="var-h1 text-light">
              Hola! Soy <span className="text-warning">Agustin Lovera</span>
            </h1>
            <div
              className="d-flex justify-content-center"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <h3 className="fw-bold z-index-2 position-relative">
                Full Stack Developer
              </h3>
              <svg
                className="icon-click"
                width="110px"
                height="110px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 7L5.5 5.5M15 7L16.5 5.5M5.5 16.5L7 15M11 5L11 3M5 11L3 11M17.1603 16.9887L21.0519 15.4659C21.4758 15.3001 21.4756 14.7003 21.0517 14.5346L11.6992 10.8799C11.2933 10.7213 10.8929 11.1217 11.0515 11.5276L14.7062 20.8801C14.8719 21.304 15.4717 21.3042 15.6375 20.8803L17.1603 16.9887Z"
                  stroke="#ffc107"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN 2 */}
      <div
        className="sc2 row justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <div className="col-12 col-md-6 text-md-center">
          <img
            src="/images/elemento_sc2.png"
            alt=""
            className="img_elemento_sc2"
            data-aos="zoom-in"
            data-aos-delay="200"
          />
        </div>
        <div className="col-10 col-md-6" id="sobre-mi" data-aos="fade-left">
          <p className="var-txt p_sobreMi">
            Hace 3 años que recorro este increíble oficio de la programación.
            Trabajé y asesoré a distancia y de manera presencial, para agencias,
            startups, particulares, etc. <br /> Me gusta ir más allá del código,
            integrarme al proyecto, generar un sentido de pertenencia, y
            construir soluciones que funcionan.
          </p>
        </div>
      </div>

      {/* SECCIÓN 3 */}
      <div
        className="sc3 row justify-content-center"
        id="proyectos"
        data-aos="fade-up"
      >
        <h1 className="var-h1 col-10" data-aos="fade-down">
          Trabajos Recientes
        </h1>
        <div data-aos="zoom-in-up">
          <Cards />
        </div>
      </div>

      {/* SECCIÓN 4 */}
      <div
        className="sc4 row justify-content-center align-items-center"
        data-aos="fade-up"
      >
        <div className="col-12 col-md-6 text-center" data-aos="fade-right">
          <img
            src="/images/elemento_sc3.png"
            alt=""
            className="img_elemento_sc4"
          />
        </div>
        <h1 className="var-h1 col-10 col-md-6" data-aos="fade-left">
          Hagamos que las ideas <mark>funcionen</mark>
        </h1>
      </div>

      {/* SECCIÓN 5 */}
      <div className="sc5 mt-4">
        <h1
          className="var-h1 text-center text-light"
          id="habilidades"
          data-aos="zoom-in"
        >
          Habilidades
        </h1>
        <Skills />
      </div>

      {/* SECCIÓN 6 */}
      <div
        className="sc6 row justify-content-center"
        id="formacion"
        data-aos="fade-up"
      >
        <h1 className="var-h1 text-center" data-aos="fade-down">
          Formación
        </h1>
        <Timeline />
      </div>

      {/* SECCIÓN 7 */}
      <div className="sc7" id="contacto" data-aos="zoom-in-up">
        <Form />
      </div>
    </div>
  );
};

export default Home;
