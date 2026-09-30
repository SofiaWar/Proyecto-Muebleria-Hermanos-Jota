import React from 'react';

function Nosotros() {
  return (
    <div className="nosotros-page" style={{ paddingBottom: '4rem' }}>
      <section className="nosotros-principal">
        <div className="nosotros-texto">
          <h4 className="etiqueta">Hermanos Jota</h4>
          <h1>Herencia e innovación,<br />hechas para vivir</h1>
          <p>Hermanos Jota nace del redescubrimiento de un arte: crear muebles que no solo cumplen una función, sino que también forman parte de nuestra vida.</p>
          <p>Nuestra propuesta encuentra un punto de encuentro entre la herencia de la artesanía y una mirada contemporánea, donde cada pieza busca honrar el pasado mientras abraza el futuro.</p>
        </div>
        <div className="nosotros-imagen">
          {/* Imagen ubicada en client/public/img/fabrica.jpg */}
          <img src="/img/fabrica.jpg" alt="Taller Hermanos Jota" />
        </div>
      </section>

      <section className="nosotros-filosofia">
        <h4 className="etiqueta">Nuestra Filosofía</h4>
        <h2>Cada pieza cuenta una historia</h2>
        <p>La calidez y la nostalgia forman parte de la primera impresión de Hermanos Jota. Pero detrás de cada pieza hay mucho más: materiales cuidadosamente seleccionados, principios de diseño atemporal y una historia de artesanía.</p>
        <p>Para nosotros, un mueble no es solamente un objeto. Es una pieza que puede acompañar los rituales cotidianos, envejecer con gracia y adquirir carácter con el paso del tiempo.</p>
      </section>

      <section className="nosotros-sustentabilidad">
        <h4 className="etiqueta">Sustentabilidad y Materiales</h4>
        <h2>Diseñar pensando en el futuro</h2>
        <p>Nuestro compromiso con el medio ambiente y las futuras generaciones guía cada decisión de nuestro proceso creativo y productivo.</p>
        <p>Trabajamos con madera certificada FSC de bosques responsables argentinos y priorizamos maderas nativas como algarrobo, quebracho y caldén. También utilizamos acabados y adhesivos de bajo COV y priorizamos proveedores locales.</p>
        <div className="sustentabilidad-datos" style={{ marginTop: '1.5rem' }}>
          <p><strong>30%</strong> mínimo de materiales recuperados o reciclados</p>
          <p><strong>0</strong> plásticos de un solo uso en toda la cadena</p>
          <p><strong>FSC</strong> madera proveniente de bosques responsables</p>
        </div>
      </section>

      <section className="herencia-viva">
        <h4 className="etiqueta">Herencia Viva</h4>
        <h2>Muebles para durar, cuidar y volver a vivir</h2>
        <p>Nuestro compromiso con la longevidad se materializa en el programa <strong>Herencia Viva</strong>, pensado para extender la vida de nuestras piezas y preservar su historia.</p>
        <ul>
          <li><strong>10 años</strong> de garantía en estructura.</li>
          <li><strong>5 años</strong> de garantía en acabados.</li>
          <li>Servicio de restauración para recuperar y renovar piezas antiguas.</li>
          <li>Taller de cuidados y capacitación gratuita para clientes.</li>
          <li>Recompra garantizada de hasta el 40% del valor en piezas bien cuidadas.</li>
          <li>Certificado de trazabilidad del origen de los materiales utilizados.</li>
        </ul>
      </section>
    </div>
  );
}

export default Nosotros;