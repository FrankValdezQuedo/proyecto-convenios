import React, { useState } from "react";
import { Mail, User, MessageCircle } from "lucide-react"; // Iconos utilizados en el formulario y la información de contacto

const Contactos = () => {
  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Estado para manejar los errores de validación del formulario
  const [errors, setErrors] = useState({});

  // Maneja los cambios en los campos del formulario
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value, // Actualiza el valor del campo correspondiente en el estado
    }));
  };

  // Valida los campos del formulario
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es requerido";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón para validar correos electrónicos
    if (!formData.email.trim()) {
      newErrors.email = "El correo electrónico es requerido";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Correo electrónico inválido";
    }

    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es requerido";
    }

    setErrors(newErrors); // Guarda los errores encontrados
    return Object.keys(newErrors).length === 0; // Devuelve true si no hay errores
  };

  // Maneja el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", formData); // Simula el envío de datos

      setFormData({
        name: "",
        email: "",
        message: "",
      }); // Limpia el formulario

      alert("Mensaje enviado exitosamente"); // Notificación al usuario
    }
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4 text-primary">Contáctanos</h2>
      <div className="row">
        {/* Sección de Información de Contacto */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">
                <Mail className="me-2 text-primary" /> Información de Contacto
              </h4>
              <div className="contact-info">
                <p>
                  <strong>Dirección:</strong> Av. Universitaria 123, Huacho,
                  Perú
                </p>
                <p>
                  <strong>Correo Electrónico:</strong>{" "}
                  <a
                    href="mailto:contacto@unjfsc.edu.pe"
                    className="text-decoration-none"
                  >
                    contacto@unjfsc.edu.pe
                  </a>
                </p>
                <p>
                  <strong>Teléfono:</strong> +51 999 999 999
                </p>
                <p>
                  <strong>Horario de Atención:</strong> Lunes a Viernes, 9:00 AM
                  - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Formulario */}
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h4 className="card-title mb-4">
                <MessageCircle className="me-2 text-primary" /> Envíanos tu
                Consulta
              </h4>
              <form onSubmit={handleSubmit}>
                {/* Campo Nombre */}
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <User className="me-2" /> Nombre
                  </label>
                  <input
                    type="text"
                    className={`form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    placeholder="Escribe tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>

                {/* Campo Correo Electrónico */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <Mail className="me-2" /> Correo Electrónico
                  </label>
                  <input
                    type="email"
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    placeholder="nombre@ejemplo.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>

                {/* Campo Mensaje */}
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    <MessageCircle className="me-2" /> Mensaje
                  </label>
                  <textarea
                    className={`form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    rows="4"
                    placeholder="Escribe tu mensaje"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>

                {/* Botón de Envío */}
                <button type="submit" className="btn btn-primary w-100">
                  Enviar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactos;
