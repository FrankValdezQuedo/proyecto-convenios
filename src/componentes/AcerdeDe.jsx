import React from "react";
import { Award, University, GraduationCap } from "lucide-react"; // Importación de iconos desde la librería 'lucide-react'

const AcercaDe = () => {
  return (
    <section className="container my-5">
      {/* Contenedor principal con margen vertical */}
      <div className="row">
        <div className="col-12">
          {/* Encabezado principal de la sección */}
          <h2 className="text-center mb-4 text-primary">Acerca de Nosotros</h2>
          <p className="lead text-center mb-5">
            Bienvenido a la Universidad Nacional José Faustino Sánchez Carrión.
            Nuestra misión es proporcionar educación de calidad y formación
            integral a nuestros estudiantes.
          </p>
        </div>
      </div>

      {/* Sección de tarjetas informativas */}
      <div className="row align-items-center">
        {/* Tarjeta: Nuestra Historia */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3">
                <University className="me-2 text-primary" /> Nuestra Historia
              </h4>
              <p className="card-text">
                Fundada en 1963, la Universidad Nacional José Faustino Sánchez
                Carrión es una institución líder en educación superior,
                comprometida con el desarrollo académico y profesional de sus
                estudiantes.
              </p>
            </div>
          </div>
        </div>

        {/* Tarjeta: Misión */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-3">
                <GraduationCap className="me-2 text-primary" /> Misión
              </h4>
              <p className="card-text">
                Formar profesionales altamente competentes, con valores éticos,
                pensamiento crítico y compromiso social, capaces de contribuir
                al desarrollo de la región y el país.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Imagen central representativa */}
      <div className="row">
        <div className="col-12">
          <div className="text-center">
            <img
              id="fondoimg"
              src="/public/image.png"
              alt="Campus Universitario"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>

      {/* Sección de valores institucionales */}
      <div className="row mt-5">
        <div className="col-12">
          <div className="card bg-light">
            <div className="card-body text-center">
              <h4 className="card-title mb-3">
                <Award className="me-2 text-primary" /> Nuestros Valores
              </h4>
              {/* Lista de valores alineada horizontalmente */}
              <ul className="list-unstyled d-flex justify-content-center">
                <li className="mx-3">Excelencia Académica</li>
                <li className="mx-3">Integridad</li>
                <li className="mx-3">Inclusión</li>
                <li className="mx-3">Innovación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaDe;
