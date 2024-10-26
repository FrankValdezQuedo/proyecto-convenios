import React from "react";

const AcercaDe = () => {
  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Acerca de</h2>
      <p className="lead text-center">
        Bienvenido a la Universidad Nacional José Faustino Sánchez Carrión.
        Nuestra misión es proporcionar educación de calidad y formación integral
        a nuestros estudiantes.
      </p>
      <div className="text-center">
        <img
          id="fondoimg"
          src="/public/image.png"
          alt="Descripción de la imagen"
          className="img-fluid rounded"
        />
      </div>
    </section>
  );
};

export default AcercaDe;
