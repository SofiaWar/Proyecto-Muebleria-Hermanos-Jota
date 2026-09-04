const productos = [
  {
    id: 1,
    nombre: "Mesa de comedor Pampa",
    precio: 1800000,
    descripcion:
      "Mesa extensible de roble macizo con tablero biselado y sistema de apertura suave. Su diseño robusto y elegante se adapta perfectamente a reuniones íntimas o grandes celebraciones familiares, extendiéndose de 6 a 10 comensales.",
    caracteristicas: [
      "Material: roble macizo",
      "Capacidad: 6 a 10 comensales",
      "Sistema de apertura suave",
      "Tablero biselado",
      "Diseño extensible",
      "Terminación natural",
    ],
    imagen: "img/Mesa_Comedor_Pampa.png",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Sillón Copacabana",
    precio: 930000,
    descripcion:
      "Sillón lounge en cuero cognac con base giratoria en acero Burnt Sienna. Inspirado en la estética brasilera moderna de los 60, combina comodidad excepcional con un diseño icónico que trasciende tendencias y épocas.",
    caracteristicas: [
      "Tapizado: cuero cognac",
      "Base giratoria",
      "Estructura de acero",
      "Estética brasilera de los años 60",
      "Diseño lounge",
      "Alto nivel de confort",
    ],
    imagen: "img/Sillon_Copacabana.png",
    destacado: true,
  },
  {
    id: 3,
    nombre: "Biblioteca Recoleta",
    precio: 320000,
    descripcion:
      "Sistema modular de estantes abierto que combina estructura de acero Sage Green y repisas en roble claro. Perfecta para colecciones y objetos de diseño, su diseño versátil se adapta a cualquier espacio contemporáneo con elegancia funcional.",
    caracteristicas: [
      "Estructura de acero Sage Green",
      "Repisas de roble claro",
      "Sistema modular",
      "Diseño abierto",
      "Ideal para libros y objetos decorativos",
      "Diseño adaptable",
    ],
    imagen: "img/Biblioteca_Recoleta.png",
    destacado: true,
  },
  {
    id: 4,
    nombre: "Mesa de Noche Aconcagua",
    precio: 520000,
    descripcion:
      "Mesa de noche con cajón oculto y repisa inferior en roble certificado FSC®. Su diseño limpio y funcional permite convivir con diferentes estilos de dormitorio, ofreciendo almacenamiento discreto y elegante para objetos personales.",
    caracteristicas: [
      "Material: roble certificado FSC®",
      "Cajón oculto",
      "Repisa inferior",
      "Almacenamiento discreto",
      "Diseño funcional",
      "Terminación natural",
    ],
    imagen: "img/Mesa_de_Noche_Aconcagua.png",
    destacado: false,
  },
  {
    id: 5,
    nombre: "Aparador Uspallata",
    precio: 1250000,
    descripcion:
      "Aparador de seis puertas fabricado en nogal sostenible con tiradores metálicos en acabado latón. Su silueta minimalista realza el veteado natural de la madera, creando una pieza que combina funcionalidad y elegancia atemporal para espacios contemporáneos.",
    caracteristicas: [
      "Medidas: 180 × 45 × 75 cm",
      "Materiales: Nogal macizo FSC®, herrajes de latón",
      "Acabado: Aceite natural ecológico",
      "Peso: 68 kg",
      "Capacidad: 6 compartimentos interiores",
    ],
    imagen: "img/Aparador_Uspallata.png",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Butaca Mendoza",
    precio: 850000,
    descripcion:
      "Butaca tapizada en bouclé Dusty Rose con base de madera de guatambú. El respaldo curvo abraza el cuerpo y ofrece máximo confort, mientras que su diseño orgánico aporta calidez y sofisticación a cualquier ambiente contemporáneo.",
    caracteristicas: [
      "Medidas: 80 × 75 × 85 cm",
      "Materiales: Guatambú macizo, tela bouclé",
      "Acabado: Cera vegetal, tapizado premium",
      "Tapizado: Repelente al agua y manchas",
      "Confort: Espuma alta densidad",
    ],
    imagen: "img/Butaca_Mendoza.png",
    destacado: false,
  },
  {
    id: 7,
    nombre: "Mesa de Centro Araucaria",
    precio: 780000,
    descripcion:
      "Mesa de centro con sobre circular de mármol Patagonia y base de tres patas en madera de nogal. Su diseño minimalista se convierte en el punto focal perfecto para cualquier sala de estar contemporánea, combinando la frialdad del mármol con la calidez de la madera.",
    caracteristicas: [
      "Medidas: 90 × 90 × 45 cm",
      "Materiales: Sobre de mármol Patagonia, patas de nogal",
      "Acabado: Mármol pulido, aceite natural en madera",
      "Peso: 42 kg",
      "Carga máxima: 25 kg distribuidos",
    ],
    imagen: "img/Mesa_de_Centro_Araucaria.png",
    destacado: false,
  },
  {
    id: 8,
    nombre: "Sofá Patagonia",
    precio: 2500000,
    descripcion:
      "Sofá de tres cuerpos tapizado en lino Warm Alabaster con patas cónicas de madera. Los cojines combinan espuma de alta resiliencia con plumón reciclado, ofreciendo comodidad duradera y sostenible para el hogar moderno.",
    caracteristicas: [
      "Medidas: 220 × 90 × 80 cm",
      "Estructura: Madera de eucalipto certificada FSC®",
      "Tapizado: Lino 100% natural premium",
      "Relleno: Espuma HR + plumón reciclado",
      "Sostenibilidad: Materiales 100% reciclables",
    ],
    imagen: "img/Sofa_Patagonia.png",
    destacado: false,
  },
  {
    id: 9,
    nombre: "Sillas Córdoba",
    precio: 340000,
    descripcion:
      "Set de cuatro sillas apilables en contrachapado moldeado de nogal y estructura tubular pintada en Sage Green. Su diseño ergonómico y materiales de calidad garantizan comodidad y durabilidad en el uso diario, perfectas para comedores contemporáneos.",
    caracteristicas: [
      "Medidas: 45 × 52 × 80 cm (cada una)",
      "Materiales: Contrachapado nogal, tubo de acero",
      "Acabado: Laca mate, pintura epoxi",
      "Apilables: Hasta 6 sillas",
      "Incluye: Set de 4 sillas",
    ],
    imagen: "img/Sillas_Cordoba.png",
    destacado: false,
  },
  {
    id: 10,
    nombre: "Escritorio Costa",
    precio: 560000,
    descripcion:
      "Escritorio compacto con cajón organizador y tapa pasacables integrada en bambú laminado. Ideal para espacios de trabajo en casa, combina funcionalidad moderna con estética minimalista y sostenible, perfecto para el trabajo remoto.",
    caracteristicas: [
      "Medidas: 120 × 60 × 75 cm",
      "Materiales: Bambú laminado, herrajes ocultos",
      "Acabado: Laca mate resistente",
      "Almacenamiento: 1 cajón con organizador",
      "Cables: Pasacables integrado",
    ],
    imagen: "img/Escritorio_Costa.png",
    destacado: false,
  },
  {
    id: 11,
    nombre: "Silla de Trabajo Belgrano",
    precio: 0,
    descripcion:
      "Silla ergonómica regulable en altura con respaldo de malla transpirable y asiento tapizado en tejido reciclado. Diseñada para largas jornadas de trabajo con máximo confort y apoyo lumbar, ideal para oficinas en casa y espacios de coworking.",
    caracteristicas: [
      "Medidas: 60 × 60 × 90-100 cm",
      "Materiales: Malla técnica, tejido reciclado",
      "Acabado: Base cromada, tapizado premium",
      "Regulación: Altura + inclinación respaldo",
      "Certificación: Ergonomía europea EN 1335",
    ],
    imagen: "img/Silla_de_Trabajo_Belgrano.png",
    destacado: false,
  },
];

// Simulamos una carga asíncrona como pide el Sprint
const getProductos = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 500); // 500ms simulando petición de red
  });
};
