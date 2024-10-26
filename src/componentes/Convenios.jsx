import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

const Convenios = () => {
  const [buscar, setBuscar] = useState("");
  const [convenios, setConvenios] = useState([]);

  const formatearFecha = (fechaISO) => {
    const fecha = new Date(fechaISO);
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const anio = fecha.getFullYear();
    return `${dia}/${mes}/${anio}`;
  };

  useEffect(() => {
    const fetchConvenios = async () => {
      try {
        const response = await axios.get("http://localhost:8080/convenio");
        setConvenios(response.data);
      } catch (error) {
        console.error("Hubo un error obteniendo los convenios: ", error);
      }
    };
    fetchConvenios();
  }, []);

  const conveniosFiltrados = convenios.filter((convenio) =>
    Object.values(convenio).some((valor) =>
      valor?.toString().toLowerCase().includes(buscar.toLowerCase())
    )
  );

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">Lista de Convenios</h2>

      <div className="input-group mb-4">
        <input
          type="text"
          placeholder="Buscar convenio..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
          className="form-control"
        />
        <span className="input-group-text">
          <FaSearch />
        </span>
      </div>

      <ConveniosTable
        convenios={conveniosFiltrados}
        formatearFecha={formatearFecha}
      />
    </section>
  );
};

// Función que verifica si un convenio está vigente o vencido
const estadoConvenio = (fechaCaducidad) => {
  const hoy = new Date();
  const fechaCad = new Date(fechaCaducidad);
  return fechaCad >= hoy; // Retorna true si el convenio está vigente
};

const ConveniosTable = ({ convenios, formatearFecha }) => (
  <div className="table-responsive">
    <table className="table table-striped table-hover">
      <thead className="thead-light">
        <tr>
          <th>Institución</th>
          <th>Tipo de Convenio</th>
          <th>Vigencia</th>
          <th>Rubro</th>
          <th>Fecha de Suscripción</th>
          <th>Fecha de Caducidad</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {convenios.length > 0 ? (
          convenios.map((convenio, index) => (
            <tr key={index}>
              <td>{convenio.institucion}</td>
              <td>{convenio.tipoConvenioMarco}</td>
              <td>{convenio.vigencia}</td>
              <td>{convenio.rubro}</td>
              <td>{formatearFecha(convenio.fechaSuscripcion)}</td>
              <td>{formatearFecha(convenio.fechaCaducidad)}</td>
              <td>
                {estadoConvenio(convenio.fechaCaducidad) ? (
                  <button className="btn btn-success">Vigente</button>
                ) : (
                  <button className="btn btn-danger">Vencido</button>
                )}
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              No se encontraron convenios.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
);

export default Convenios;
