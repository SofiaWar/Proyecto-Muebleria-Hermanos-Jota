import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({ nombre: '', email: '', telefono: '', motivo: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <section className="contacto-contenido">
      <div className="contacto-info">
        <h4 className="etiqueta">Casa Taller</h4>
        <h2>Vení a conocernos</h2>
        <p>Nuestro espacio es también nuestro taller: un lugar donde la madera, el oficio y las nuevas ideas se encuentran.</p>
        
        <br />
        <p><strong>Dirección</strong><br />Av. San Juan 2847<br />C1232AAB · San Cristóbal<br />Ciudad Autónoma de Buenos Aires</p>
        <br />
        <p><strong>Horarios</strong><br />Lunes a viernes · 10:00 a 19:00<br />Sábados · 10:00 a 14:00</p>
      </div>

      <div className="contacto-formulario">
        {enviado ? (
          <div className="compra-exitosa" style={{ display: 'block', padding: '2rem' }}>
            <div className="check-compra">✓</div>
            <h2>¡Gracias por escribirnos!</h2>
            <p>Recibimos tu mensaje correctamente. Te responderemos a la brevedad.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <h4 className="etiqueta">Escribinos</h4>
            <h2>¿En qué podemos ayudarte?</h2>
            
            <div className="campo">
              <label htmlFor="nombre">Nombre y apellido</label>
              <input type="text" id="nombre" name="nombre" placeholder="Ej. Ana Gómez" value={formData.nombre} onChange={handleChange} required />
            </div>

            <div className="campo">
              <label htmlFor="email">Correo electrónico</label>
              <input type="email" id="email" name="email" placeholder="nombre@ejemplo.com" value={formData.email} onChange={handleChange} required />
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" placeholder="Contanos qué estás buscando..." value={formData.mensaje} onChange={handleChange} required></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensaje</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactForm;