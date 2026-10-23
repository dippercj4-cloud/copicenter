const COMMERCIAL_CONFIG = {
  whatsappNumber: "573243767360",
  businessName: "Copicenter",
  note: "El pedido no queda confirmado hasta que se confirme la conversación por WhatsApp."
};

const CART_STORAGE_KEY = 'copicenter-cart-v1';

const CATALOG = [
  { id: 'rut-primera-vez', category: 'Trámites', name: 'RUT por primera vez', price: 15000, priceType: 'fixed', unit: 'servicio', description: 'Trámite completo para la primera vez.', requiresDetails: false },
  { id: 'rut-actualizacion', category: 'Trámites', name: 'Actualización del RUT', price: 10000, priceType: 'from', unit: 'servicio', description: 'Ajuste de datos y revisión del documento.', requiresDetails: true },
  { id: 'rut-descarga', category: 'Trámites', name: 'Descarga del RUT', price: 2000, priceType: 'fixed', unit: 'servicio', description: 'Consulta y descarga del documento.', requiresDetails: false },
  { id: 'dian-recuperacion', category: 'Trámites', name: 'Recuperación de contraseña DIAN', price: 5000, priceType: 'from', unit: 'servicio', description: 'Asistencia para recuperar el acceso.', requiresDetails: true },
  { id: 'dian-firma', category: 'Trámites', name: 'Firma electrónica DIAN', price: 5000, priceType: 'from', unit: 'servicio', description: 'Asesoría para la habilitación del certificado.', requiresDetails: true },
  { id: 'facturacion-electronica', category: 'Trámites', name: 'Facturación electrónica', price: 15000, priceType: 'from', unit: 'servicio', description: 'Soporte para configurar la facturación.', requiresDetails: true },
  { id: 'camara-comercio', category: 'Trámites', name: 'Cámara de Comercio', price: 15000, priceType: 'from', unit: 'servicio', description: 'Asistencia informativa y preparación de documentos.', requiresDetails: true },
  { id: 'registro-unico', category: 'Trámites', name: 'Registro Único Empresarial', price: 15000, priceType: 'from', unit: 'servicio', description: 'Revisión documental y orientación.', requiresDetails: true },
  { id: 'tradicion-libertad', category: 'Trámites', name: 'Certificado de Tradición y Libertad', price: 10000, priceType: 'fixed', unit: 'servicio', description: 'Trámite y preparación documental.', requiresDetails: false },
  { id: 'judiciales', category: 'Trámites', name: 'Consulta de procesos judiciales', price: 2000, priceType: 'from', unit: 'consulta', description: 'Revisión de procesos judiciales.', requiresDetails: true },
  { id: 'comparendos', category: 'Trámites', name: 'Consulta de comparendos', price: 2000, priceType: 'fixed', unit: 'consulta', description: 'Consulta del historial de comparendos.', requiresDetails: false },
  { id: 'simit', category: 'Trámites', name: 'Consulta SIMIT', price: 2000, priceType: 'fixed', unit: 'consulta', description: 'Consulta en SIMIT.', requiresDetails: false },
  { id: 'runt', category: 'Trámites', name: 'Consulta RUNT', price: 2000, priceType: 'fixed', unit: 'consulta', description: 'Consulta en RUNT.', requiresDetails: false },
  { id: 'sisben-rui', category: 'Trámites', name: 'SISBÉN / RUI', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y orientación de trámites.', requiresDetails: false },
  { id: 'adres', category: 'Trámites', name: 'ADRES', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y orientación de información.', requiresDetails: false },
  { id: 'seguridad-social', category: 'Trámites', name: 'Seguridad Social', price: 8000, priceType: 'fixed', unit: 'servicio', description: 'Revisión y apoyo documental.', requiresDetails: false },
  { id: 'historia-laboral', category: 'Trámites', name: 'Historia laboral', price: 5000, priceType: 'fixed', unit: 'servicio', description: 'Solicitado para revisión y apoyo.', requiresDetails: false },
  { id: 'certificado-eps', category: 'Trámites', name: 'Certificados EPS', price: 1500, priceType: 'fixed', unit: 'servicio', description: 'Certificado de afiliación o salud.', requiresDetails: false },
  { id: 'certificado-pension', category: 'Trámites', name: 'Certificado de pensión', price: 2000, priceType: 'from', unit: 'servicio', description: 'Consulta y preparación del documento.', requiresDetails: true },
  { id: 'antecedentes-policia', category: 'Trámites', name: 'Antecedentes Policía', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y apoyo en solicitud.', requiresDetails: false },
  { id: 'antecedentes-procuraduria', category: 'Trámites', name: 'Antecedentes Procuraduría', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y apoyo documental.', requiresDetails: false },
  { id: 'antecedentes-contraloria', category: 'Trámites', name: 'Antecedentes Contraloría', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y apoyo documental.', requiresDetails: false },
  { id: 'antecedentes-personeria', category: 'Trámites', name: 'Antecedentes Personería', price: 1500, priceType: 'fixed', unit: 'consulta', description: 'Consulta y apoyo documental.', requiresDetails: false },

  { id: 'carta-sencilla', category: 'Documentos', name: 'Carta sencilla', price: 2000, priceType: 'fixed', unit: 'documento', description: 'Carta breve con estructura estándar.', requiresDetails: false },
  { id: 'carta-redactada', category: 'Documentos', name: 'Carta redactada por hoja', price: 3000, priceType: 'fixed', unit: 'hoja', description: 'Redacción por hoja con estilo profesional.', requiresDetails: false },
  { id: 'carta-laboral', category: 'Documentos', name: 'Carta laboral', price: 3000, priceType: 'fixed', unit: 'documento', description: 'Carta formal para contexto laboral.', requiresDetails: false },
  { id: 'carta-recomendacion', category: 'Documentos', name: 'Carta de recomendación', price: 3000, priceType: 'fixed', unit: 'documento', description: 'Documento de respaldo profesional.', requiresDetails: false },
  { id: 'carta-autorizacion', category: 'Documentos', name: 'Carta de autorización', price: 3000, priceType: 'fixed', unit: 'documento', description: 'Autorización formal con estructura definida.', requiresDetails: false },
  { id: 'carta-membrete', category: 'Documentos', name: 'Carta con membrete', price: 4000, priceType: 'fixed', unit: 'documento', description: 'Formato con membrete institucional.', requiresDetails: false },
  { id: 'derecho-peticion', category: 'Documentos', name: 'Derecho de petición', price: 5000, priceType: 'fixed', unit: 'documento', description: 'Documento de petición y presentación formal.', requiresDetails: false },
  { id: 'derecho-peticion-personalizado', category: 'Documentos', name: 'Derecho de petición personalizado', price: 12000, priceType: 'from', unit: 'documento', description: 'Petición con mayores requerimientos de configuración.', requiresDetails: true },
  { id: 'tutelas', category: 'Documentos', name: 'Tutelas', price: 15000, priceType: 'from', unit: 'documento', description: 'Revisión y elaboración inicial de tutela.', requiresDetails: true },
  { id: 'acciones-cumplimiento', category: 'Documentos', name: 'Acciones de cumplimiento', price: 15000, priceType: 'from', unit: 'documento', description: 'Revisión inicial y redacción del documento.', requiresDetails: true },
  { id: 'recursos-reposicion', category: 'Documentos', name: 'Recursos de reposición', price: 8000, priceType: 'from', unit: 'documento', description: 'Recurso con revisión y redacción inicial.', requiresDetails: true },
  { id: 'recursos-apelacion', category: 'Documentos', name: 'Recursos de apelación', price: 10000, priceType: 'from', unit: 'documento', description: 'Soporte para presentación de recurso.', requiresDetails: true },
  { id: 'pagare', category: 'Documentos', name: 'Pagaré', price: 2500, priceType: 'fixed', unit: 'documento', description: 'Documento financiero elemental.', requiresDetails: false },
  { id: 'contrato-compraventa', category: 'Documentos', name: 'Contrato de compraventa', price: 8000, priceType: 'fixed', unit: 'documento', description: 'Formato de contrato para venta.', requiresDetails: false },
  { id: 'contrato-arrendamiento', category: 'Documentos', name: 'Contrato de arrendamiento', price: 10000, priceType: 'from', unit: 'documento', description: 'Asesoría y elaboración de contrato.', requiresDetails: true },
  { id: 'poder', category: 'Documentos', name: 'Poder', price: 5000, priceType: 'fixed', unit: 'documento', description: 'Documento con estructura estándar.', requiresDetails: false },
  { id: 'declaracion-extrajudicio', category: 'Documentos', name: 'Declaración extrajuicio', price: 8000, priceType: 'from', unit: 'documento', description: 'Preparación de la declaración inicial.', requiresDetails: true },
  { id: 'actas', category: 'Documentos', name: 'Actas', price: 5000, priceType: 'from', unit: 'documento', description: 'Acta con revisión de requerimientos.', requiresDetails: true },
  { id: 'certificaciones', category: 'Documentos', name: 'Certificaciones', price: 3000, priceType: 'from', unit: 'documento', description: 'Documentos con revisión de fondo.', requiresDetails: true },

  { id: 'hoja-vida', category: 'Empleo', name: 'Hoja de vida por hoja', price: 2000, priceType: 'fixed', unit: 'hoja', description: 'Actualización o elaboración por hoja.', requiresDetails: false },
  { id: 'curriculum-profesional', category: 'Empleo', name: 'Currículum profesional', price: 5000, priceType: 'fixed', unit: 'documento', description: 'Formato profesional y estructurado.', requiresDetails: false },
  { id: 'actualizacion-hoja-de-vida', category: 'Empleo', name: 'Actualización de hoja de vida por hoja', price: 3000, priceType: 'fixed', unit: 'hoja', description: 'Ajuste de contenido por hoja.', requiresDetails: false },
  { id: 'carta-presentacion', category: 'Empleo', name: 'Carta de presentación', price: 5000, priceType: 'fixed', unit: 'documento', description: 'Cartas para postulaciones profesionales.', requiresDetails: false },
  { id: 'registro-plataformas', category: 'Empleo', name: 'Registro en plataformas de empleo', price: 5000, priceType: 'from', unit: 'servicio', description: 'Registro y apoyo básico en plataformas.', requiresDetails: true },
  { id: 'correo-electronico', category: 'Empleo', name: 'Creación de correo electrónico', price: 3000, priceType: 'fixed', unit: 'servicio', description: 'Creación y configuración inicial.', requiresDetails: false },

  { id: 'impresion-bn', category: 'Impresiones', name: 'Impresión blanco y negro', price: 1000, priceType: 'unit', unit: 'hoja', description: 'Impresión en papel estándar.', requiresDetails: false },
  { id: 'impresion-color', category: 'Impresiones', name: 'Impresión a color', price: 1500, priceType: 'unit', unit: 'hoja', description: 'Impresiones a color con calidad adecuada.', requiresDetails: false },
  { id: 'impresion-laser-color', category: 'Impresiones', name: 'Impresión láser color', price: 4000, priceType: 'fixed', unit: 'documento', description: 'Impresión láser de alta calidad.', requiresDetails: false },
  { id: 'impresion-laser-bn', category: 'Impresiones', name: 'Impresión láser B/N', price: 2000, priceType: 'unit', unit: 'hoja', description: 'Impresión láser en blanco y negro.', requiresDetails: false },
  { id: 'papel-fotografico', category: 'Impresiones', name: 'Impresión en papel fotográfico', priceMin: 4000, priceMax: 12000, priceType: 'range', unit: 'servicio', description: 'Impresión fotográfica según tamaño y acabado.', requiresDetails: true },
  { id: 'impresion-adhesiva', category: 'Impresiones', name: 'Impresión adhesiva', priceMin: 4000, priceMax: 10000, priceType: 'range', unit: 'servicio', description: 'Adhesivos según cantidad y material.', requiresDetails: true },
  { id: 'fotocopia-bn', category: 'Impresiones', name: 'Fotocopia B/N', price: 400, priceType: 'fixed', unit: 'copia', description: 'Copias en blanco y negro por unidad.', requiresDetails: false },
  { id: 'fotocopia-color', category: 'Impresiones', name: 'Fotocopia a color', price: 600, priceType: 'from', unit: 'copia', description: 'Copias a color con precio mínimo estimado.', requiresDetails: true },
  { id: 'escaneo', category: 'Impresiones', name: 'Escaneo', price: 1200, priceType: 'unit', unit: 'hoja', description: 'Digitalización de documento por hoja.', requiresDetails: false },
  { id: 'pdf', category: 'Impresiones', name: 'Digitalización a PDF', price: 1000, priceType: 'from', unit: 'documento', description: 'Convertir documentos a PDF.', requiresDetails: true },
  { id: 'doble-cara', category: 'Impresiones', name: 'Impresión doble cara', price: 2000, priceType: 'from', unit: 'documento', description: 'Servicio de impresión a doble cara.', requiresDetails: true },
  { id: 'envio-correo', category: 'Impresiones', name: 'Envío por correo', price: 2000, priceType: 'fixed', unit: 'servicio', description: 'Envío de entregas por correo.', requiresDetails: false },

  { id: 'diseno-sencillo', category: 'Diseño', name: 'Diseño sencillo', price: 5000, priceType: 'from', unit: 'servicio', description: 'Diseño básico para piezas simples.', requiresDetails: true },
  { id: 'diseno-profesional', category: 'Diseño', name: 'Diseño profesional', price: 15000, priceType: 'from', unit: 'servicio', description: 'Diseño con mayor nivel de detalle.', requiresDetails: true },
  { id: 'tarjetas-personales', category: 'Diseño', name: 'Tarjetas personales', price: 3000, priceType: 'from', unit: 'servicio', description: 'Tarjetas con diseño inicial.', requiresDetails: true },
  { id: 'tarjetas-presentacion', category: 'Diseño', name: 'Tarjetas de presentación', price: 8000, priceType: 'from', unit: 'servicio', description: 'Diseño profesional de tarjetas.', requiresDetails: true },
  { id: 'invitaciones', category: 'Diseño', name: 'Invitaciones', price: 5000, priceType: 'from', unit: 'servicio', description: 'Invitaciones personalizadas.', requiresDetails: true },
  { id: 'diplomas', category: 'Diseño', name: 'Diplomas', price: 10000, priceType: 'fixed', unit: 'documento', description: 'Diseño de diploma institucional.', requiresDetails: false },
  { id: 'volantes', category: 'Diseño', name: 'Volantes', price: 4000, priceType: 'from', unit: 'servicio', description: 'Diseño de volantes para campañas.', requiresDetails: true },
  { id: 'folletos', category: 'Diseño', name: 'Folletos', price: 4000, priceType: 'from', unit: 'servicio', description: 'Folletos informativos básicos.', requiresDetails: true },
  { id: 'tripticos', category: 'Diseño', name: 'Trípticos', price: 8000, priceType: 'from', unit: 'servicio', description: 'Diseño de trípticos promocionales.', requiresDetails: true },
  { id: 'dipticos', category: 'Diseño', name: 'Dípticos', price: 8000, priceType: 'from', unit: 'servicio', description: 'Diseño de dípticos publicitarios.', requiresDetails: true },
  { id: 'afiches', category: 'Diseño', name: 'Afiche', price: 8000, priceType: 'from', unit: 'servicio', description: 'Diseño de afiches para campañas.', requiresDetails: true },
  { id: 'pendones', category: 'Diseño', name: 'Pendones', price: 0, priceType: 'manual', unit: 'servicio', description: 'El precio depende del tamaño y acabados.', requiresDetails: true },
  { id: 'menus', category: 'Diseño', name: 'Menús', price: 8000, priceType: 'from', unit: 'servicio', description: 'Diseño de menús para restaurantes.', requiresDetails: true },
  { id: 'calendarios', category: 'Diseño', name: 'Calendarios', price: 8000, priceType: 'from', unit: 'servicio', description: 'Calendarios y materiales corporativos.', requiresDetails: true },
  { id: 'etiquetas', category: 'Diseño', name: 'Etiquetas', price: 5000, priceType: 'from', unit: 'servicio', description: 'Etiquetas comerciales y de producto.', requiresDetails: true },
  { id: 'logos', category: 'Diseño', name: 'Logos', price: 20000, priceType: 'from', unit: 'servicio', description: 'Diseño de identidad y marca.', requiresDetails: true },
  { id: 'banners', category: 'Diseño', name: 'Banners', price: 10000, priceType: 'from', unit: 'servicio', description: 'Material gráfico promocional.', requiresDetails: true },
  { id: 'avisos', category: 'Diseño', name: 'Avisos', price: 10000, priceType: 'from', unit: 'servicio', description: 'Avisos para anuncios y campaña.', requiresDetails: true },

  { id: 'transcripciones', category: 'Trabajos Escolares', name: 'Transcripciones', price: 2000, priceType: 'unit', unit: 'página', description: 'Transcripción de textos y materiales.', requiresDetails: false },
  { id: 'informes', category: 'Trabajos Escolares', name: 'Informes', price: 10000, priceType: 'from', unit: 'documento', description: 'Trabajo académico y de presentación.', requiresDetails: true },
  { id: 'ensayos', category: 'Trabajos Escolares', name: 'Ensayos', price: 10000, priceType: 'from', unit: 'documento', description: 'Ensayo con estructura y revisión inicial.', requiresDetails: true },
  { id: 'diapositivas', category: 'Trabajos Escolares', name: 'Diapositivas', price: 4000, priceType: 'fixed', unit: 'unidad', description: 'Diseño de diapositivas por unidad.', requiresDetails: false },
  { id: 'infografias', category: 'Trabajos Escolares', name: 'Infografías', price: 15000, priceType: 'from', unit: 'documento', description: 'Ilustraciones para trabajos académicos.', requiresDetails: true },
  { id: 'mapas-conceptuales', category: 'Trabajos Escolares', name: 'Mapas conceptuales', price: 8000, priceType: 'from', unit: 'documento', description: 'Organizadores gráficos completos.', requiresDetails: true },
  { id: 'mapas-mentales', category: 'Trabajos Escolares', name: 'Mapas mentales', price: 8000, priceType: 'from', unit: 'documento', description: 'Diagramas de ideas y relaciones.', requiresDetails: true },
  { id: 'lineas-tiempo', category: 'Trabajos Escolares', name: 'Líneas del tiempo', price: 8000, priceType: 'from', unit: 'documento', description: 'Cronogramas para exposiciones.', requiresDetails: true },
  { id: 'cuadros-comparativos', category: 'Trabajos Escolares', name: 'Cuadros comparativos', price: 8000, priceType: 'from', unit: 'documento', description: 'Tablas comparativas por tema.', requiresDetails: true },
  { id: 'portadas', category: 'Trabajos Escolares', name: 'Portadas', price: 3000, priceType: 'from', unit: 'documento', description: 'Diseño de portada para trabajos.', requiresDetails: true },
  { id: 'normas-apa', category: 'Trabajos Escolares', name: 'Normas APA', price: 5000, priceType: 'from', unit: 'documento', description: 'Apoyo con formato académico.', requiresDetails: true },
  { id: 'digitalizacion-trabajos', category: 'Trabajos Escolares', name: 'Digitalización de trabajos', price: 3000, priceType: 'from', unit: 'documento', description: 'Digitalización y preparación de archivo.', requiresDetails: true },

  { id: 'formateo-telefono', category: 'Tecnología · Tabaris\' Area', name: 'Formateo de teléfonos', price: 6000, priceType: 'fixed', unit: 'servicio', description: 'Limpieza del sistema y configuración previa.', requiresDetails: false },
  { id: 'config-telefonos', category: 'Tecnología · Tabaris\' Area', name: 'Configuración de teléfonos', price: 6000, priceType: 'fixed', unit: 'servicio', description: 'Ajustes y configuración del dispositivo.', requiresDetails: false },
  { id: 'restablecimiento-fabrica', category: 'Tecnología · Tabaris\' Area', name: 'Restablecimiento de fábrica', price: 6000, priceType: 'fixed', unit: 'servicio', description: 'Restauración del sistema con respaldo y revisión.', requiresDetails: false },
  { id: 'instalacion-apps', category: 'Tecnología · Tabaris\' Area', name: 'Instalación de aplicaciones', price: 2000, priceType: 'from', unit: 'aplicación', description: 'Instalación y configuración inicial.', requiresDetails: true },
  { id: 'instalacion-office', category: 'Tecnología · Tabaris\' Area', name: 'Instalación de Office', price: 15000, priceType: 'from', unit: 'servicio', description: 'Instalación y activación inicial.', requiresDetails: true },
  { id: 'instalacion-windows', category: 'Tecnología · Tabaris\' Area', name: 'Instalación de Windows', price: 25000, priceType: 'from', unit: 'servicio', description: 'Instalación y configuración del sistema.', requiresDetails: true },
  { id: 'instalacion-programas', category: 'Tecnología · Tabaris\' Area', name: 'Instalación de programas', price: 5000, priceType: 'from', unit: 'programa', description: 'Instalación de software según necesidad.', requiresDetails: true },
  { id: 'eliminacion-virus', category: 'Tecnología · Tabaris\' Area', name: 'Eliminación de virus', price: 20000, priceType: 'from', unit: 'servicio', description: 'Limpieza de virus y restauración del equipo.', requiresDetails: true },
  { id: 'config-impresoras', category: 'Tecnología · Tabaris\' Area', name: 'Configuración de impresoras', price: 8000, priceType: 'from', unit: 'servicio', description: 'Instalación y ajustes del hardware.', requiresDetails: true },
  { id: 'config-computadores', category: 'Tecnología · Tabaris\' Area', name: 'Configuración de computadores', price: 15000, priceType: 'from', unit: 'servicio', description: 'Ajustes y soporte general del equipo.', requiresDetails: true },
  { id: 'copia-seguridad', category: 'Tecnología · Tabaris\' Area', name: 'Copia de seguridad', price: 5000, priceType: 'from', unit: 'servicio', description: 'Resguardo de datos en distintos escenarios.', requiresDetails: true },

  { id: 'organizacion-transferencia', category: 'Servicios Digitales', name: 'Organización y transferencia de archivos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Revisión y organización previa para archivar o transferir información.', requiresDetails: true },
  { id: 'recuperacion-basic-files', category: 'Servicios Digitales', name: 'Recuperación básica de archivos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Recuperación de archivos según el nivel de daño o pérdida.', requiresDetails: true },
  { id: 'migracion-archivos', category: 'Servicios Digitales', name: 'Migración de archivos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Traslado de archivos entre dispositivos o sistemas.', requiresDetails: true },

  { id: 'fotos-retoque', category: 'Fotos', name: 'Retocar fotos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Edición fotográfica según el pedido.', requiresDetails: true },
  { id: 'fotos-impresion', category: 'Fotos', name: 'Impresión de fotos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Servicio de impresión según tamaño y cantidad.', requiresDetails: true },

  { id: 'credenciales-docs', category: 'Credenciales', name: 'Credenciales y documentos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Trámites y reproducción de credenciales.', requiresDetails: true },

  { id: 'etiquetas-producto', category: 'Etiquetas', name: 'Etiquetas', price: 0, priceType: 'manual', unit: 'servicio', description: 'Diseño y producción de etiquetas.', requiresDetails: true },

  { id: 'redes-sociales', category: 'Redes', name: 'Diseño y contenido para redes', price: 0, priceType: 'manual', unit: 'servicio', description: 'Material para redes sociales y campañas.', requiresDetails: true },

  { id: 'negocios-visuales', category: 'Negocios', name: 'Material comercial para negocios', price: 0, priceType: 'manual', unit: 'servicio', description: 'Material promocional y piezas de negocio.', requiresDetails: true },

  { id: 'eventos', category: 'Eventos', name: 'Material para eventos', price: 0, priceType: 'manual', unit: 'servicio', description: 'Diseño de invitaciones, banners y piezas para eventos.', requiresDetails: true },

  { id: 'material-escolar', category: 'Material escolar', name: 'Material escolar impreso', price: 0, priceType: 'manual', unit: 'servicio', description: 'Piezas, folletos y elementos para instituciones.', requiresDetails: true },

  { id: 'digital', category: 'Digital', name: 'Servicios digitales a medida', price: 0, priceType: 'manual', unit: 'servicio', description: 'Atención según requerimientos del cliente.', requiresDetails: true },

  { id: 'documentos-digitales', category: 'Documentos digitales', name: 'Documentos digitales', price: 0, priceType: 'manual', unit: 'servicio', description: 'Preparación y organización digital.', requiresDetails: true },

  { id: 'rescate-digital', category: 'Rescate digital', name: 'Rescate digital', price: 0, priceType: 'manual', unit: 'servicio', description: 'Asistencia para material digital perdido o dañando.', requiresDetails: true },

  { id: 'cortes', category: 'Cortes', name: 'Cortes y ajustes', price: 0, priceType: 'manual', unit: 'servicio', description: 'Ajustes según la necesidad del material.', requiresDetails: true }
];

const WORKSHOP_ITEMS = [
  { id: 'ws-formateo', title: 'Formateo de teléfonos', price: 6000, description: 'Limpieza del sistema y configuración básica del equipo.', tag: 'Dispositivos' },
  { id: 'ws-config-phone', title: 'Configuración de teléfonos', price: 6000, description: 'Ajustes, aplicaciones y parámetros del sistema.', tag: 'Móvil' },
  { id: 'ws-factory-reset', title: 'Restablecimiento de fábrica', price: 6000, description: 'Restauración inicial con revisión del dispositivo.', tag: 'Sistema' },
  { id: 'ws-apps', title: 'Instalación de aplicaciones', price: 2000, description: 'Instalación y soporte inicial para apps.', tag: 'Software' },
  { id: 'ws-office', title: 'Instalación de Office', price: 15000, description: 'Preparación, instalación y validación del paquete.', tag: 'Office' },
  { id: 'ws-windows', title: 'Instalación de Windows', price: 25000, description: 'Instalación del sistema operativo y ajustes básicos.', tag: 'Sistema' },
  { id: 'ws-programs', title: 'Instalación de programas', price: 5000, description: 'Software general para trabajo o entretenimiento.', tag: 'Software' },
  { id: 'ws-virus', title: 'Eliminación de virus', price: 20000, description: 'Limpieza y revisión para recuperar rendimiento.', tag: 'Seguridad' },
  { id: 'ws-printer', title: 'Configuración de impresoras', price: 8000, description: 'Instalación y ajustes de conexión y carga.', tag: 'Periféricos' },
  { id: 'ws-computer', title: 'Configuración de computadores', price: 15000, description: 'Ajustes y soporte general para equipos.', tag: 'Equipo' },
  { id: 'ws-backup', title: 'Copias de seguridad', price: 5000, description: 'Resguardo de información para prevenir pérdidas.', tag: 'Datos' },
  { id: 'ws-transfer', title: 'Organización y transferencia de archivos', price: 0, description: 'Organización y traslado de contenido digital.', tag: 'Datos', manual: true },
  { id: 'ws-files', title: 'Recuperación básica de archivos', price: 0, description: 'Recuperación según el tipo de daño o pérdida.', tag: 'Datos', manual: true },
  { id: 'ws-migrate', title: 'Migración de archivos', price: 0, description: 'Traslado entre dispositivos, carpetas o sistemas.', tag: 'Datos', manual: true }
];

const state = {
  query: '',
  category: 'all',
  cart: loadCart()
};

const elements = {
  catalogList: document.getElementById('catalog-list'),
  catalogEmpty: document.getElementById('catalog-empty'),
  searchInput: document.getElementById('catalog-search'),
  categoryFilter: document.getElementById('category-filter'),
  cartItems: document.getElementById('cart-items'),
  subtotal: document.getElementById('cart-subtotal'),
  manualItemsCount: document.getElementById('manual-items-count'),
  clearCart: document.getElementById('clear-cart'),
  prepareWhatsapp: document.getElementById('prepare-whatsapp'),
  exportCartImage: document.getElementById('export-cart-image'),
  diagnosticForm: document.getElementById('diagnostic-form'),
  diagnosticAlert: document.getElementById('diagnostic-alert'),
  contactWhatsapp: document.getElementById('contact-whatsapp'),
  contactAlert: document.getElementById('contact-alert'),
  workshopServices: document.getElementById('workshop-services'),
  openWaButtons: document.querySelectorAll('[data-open-whatsapp]')
};

function currency(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0
  }).format(value || 0);
}

function formatPriceLabel(item) {
  if (item.priceType === 'manual' || item.priceType === 'range' || item.priceType === 'from') {
    return 'Precio por cotizar';
  }

  if (item.priceType === 'fixed') {
    return currency(item.price);
  }

  if (item.priceType === 'unit') {
    return `${currency(item.price)} / ${item.unit}`;
  }

  return 'Precio por cotizar';
}

function getServiceSubtotal(item, qty) {
  if (item.priceType === 'manual' || item.priceType === 'range' || item.priceType === 'from') {
    return 0;
  }

  if (item.priceType === 'fixed' || item.priceType === 'unit') {
    return item.price * qty;
  }

  return 0;
}

function loadCart() {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
}

function getCategories() {
  const categories = [...new Set(CATALOG.map((item) => item.category))].sort();
  return categories;
}

function renderCategoryFilter() {
  const options = ['<option value="all">Todas las categorías</option>'];
  const categories = getCategories();
  for (const category of categories) {
    options.push(`<option value="${escapeHtml(category)}">${category}</option>`);
  }
  elements.categoryFilter.innerHTML = options.join('');
  elements.categoryFilter.value = state.category;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function matchesSearch(item) {
  const query = state.query.trim().toLowerCase();
  if (!query) return true;
  return item.name.toLowerCase().includes(query) || item.category.toLowerCase().includes(query);
}

function renderCatalog() {
  const filtered = CATALOG.filter((item) => {
    const categoryMatch = state.category === 'all' || item.category === state.category;
    return categoryMatch && matchesSearch(item);
  });

  elements.catalogEmpty.classList.toggle('hidden', filtered.length > 0);
  elements.catalogList.innerHTML = filtered
    .map((item) => {
      const serviceClass = item.priceType === 'manual' || item.priceType === 'range' || item.priceType === 'from' ? 'manual-quote' : '';
      const statusLabel = item.priceType === 'fixed' ? 'Precio visible' : 'Precio por cotizar';
      return `
        <article class="service-card ${serviceClass}">
          <div class="service-card-header">
            <span class="service-category">${escapeHtml(item.category)}</span>
            <span class="price-badge">${escapeHtml(formatPriceLabel(item))}</span>
          </div>
          <h3>${escapeHtml(item.name)}</h3>
          <p>${escapeHtml(item.description)}</p>
          <div class="service-meta">
            <span>${escapeHtml(item.unit || 'servicio')}</span>
            <span>${escapeHtml(statusLabel)}</span>
          </div>
          <div class="card-actions">
            <button class="btn-small" type="button" data-details="${item.id}">Ver detalles</button>
            <button class="btn-small btn-primary" type="button" data-add="${item.id}">Añadir</button>
          </div>
        </article>
      `;
    })
    .join('');

  observeRevealElements();
}

let revealObserver;

function observeRevealElements() {
  const revealTargets = document.querySelectorAll(
    '.section-heading, .catalog-panel, .cart-panel, .info-card, .faq-list details, .footer-contact, .footer-links, .service-card'
  );

  if (!('IntersectionObserver' in window)) {
    revealTargets.forEach((target) => target.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12 });
  }

  revealTargets.forEach((target) => {
    if (target.classList.contains('is-visible')) return;
    target.classList.add('reveal-on-scroll');
    revealObserver.observe(target);
  });
}

function addToCart(itemId, quantity = 1) {
  const item = CATALOG.find((service) => service.id === itemId);
  if (!item) return;

  const normalizedQuantity = Math.max(1, Number(quantity) || 1);
  const existing = state.cart.find((entry) => entry.id === itemId);

  if (existing) {
    existing.quantity = Math.max(1, existing.quantity + normalizedQuantity);
  } else {
    state.cart.push({ id: itemId, quantity: normalizedQuantity });
  }

  saveCart();
  renderCart();
  showGlobalMessage(`${item.name} añadido al carrito.`);
}

function updateCartQuantity(itemId, qty) {
  const safeQty = Math.max(1, Number(qty) || 1);
  const entry = state.cart.find((item) => item.id === itemId);
  if (!entry) return;
  entry.quantity = safeQty;
  saveCart();
  renderCart();
}

function removeFromCart(itemId) {
  state.cart = state.cart.filter((item) => item.id !== itemId);
  saveCart();
  renderCart();
}

function clearCart() {
  state.cart = [];
  saveCart();
  renderCart();
}

function createCartImageFile() {
  if (state.cart.length === 0) {
    throw new Error('Añade servicios al carrito antes de exportar el resumen.');
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('El navegador no soporta el contexto 2D del canvas.');
  }

  const width = 1000;
  const padding = 56;

  const items = state.cart.map((entry) => {
    const item = CATALOG.find((service) => service.id === entry.id);
    if (!item) return null;

    return {
      ...item,
      quantity: entry.quantity,
      subtotal: getServiceSubtotal(item, entry.quantity),
      needsQuote: item.priceType !== 'fixed'
    };
  }).filter(Boolean);

  const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
  const pendingItems = items.filter((item) => item.needsQuote);
  const height = Math.max(980, 750 + items.length * 34);
  canvas.width = width;
  canvas.height = height;

  ctx.fillStyle = '#081423';
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = '#0f1f35';
  ctx.fillRect(padding, padding, width - padding * 2, 150);

  ctx.fillStyle = '#3ecf84';
  ctx.font = '700 38px Inter, sans-serif';
  ctx.fillText('Copicenter', padding + 24, padding + 56);

  ctx.fillStyle = '#F3F7FF';
  ctx.font = '800 42px Inter, sans-serif';
  ctx.fillText('Resumen del pedido', padding + 24, padding + 106);

  ctx.fillStyle = '#9BAAC4';
  ctx.font = '500 20px Inter, sans-serif';
  ctx.fillText(`Generado: ${new Date().toLocaleString('es-CO', { dateStyle: 'short', timeStyle: 'short' })}`, padding + 24, padding + 136);

  let y = 240;
  const sectionTitle = (label) => {
    ctx.fillStyle = '#65F5FF';
    ctx.font = '700 24px Inter, sans-serif';
    ctx.fillText(label, padding, y);
    y += 36;
  };

  sectionTitle('Servicios seleccionados');

  items.forEach((item) => {
    const lineHeight = 34;
    const itemText = `• ${item.quantity} x ${item.name}`;
    ctx.fillStyle = '#F3F7FF';
    ctx.font = '600 24px Inter, sans-serif';
    ctx.fillText(itemText, padding + 12, y);

    const priceText = item.needsQuote ? 'Precio por cotizar' : currency(item.subtotal);
    ctx.fillStyle = item.needsQuote ? '#9BAAC4' : '#65F5FF';
    ctx.font = '600 22px Inter, sans-serif';
    ctx.fillText(priceText, width - padding - 220, y);
    y += lineHeight;
  });

  y += 18;
  ctx.fillStyle = '#1f2d45';
  ctx.fillRect(padding, y, width - padding * 2, 170);
  y += 28;

  ctx.fillStyle = '#F3F7FF';
  ctx.font = '700 24px Inter, sans-serif';
  ctx.fillText('Total con precio definido', padding + 24, y);
  ctx.fillStyle = '#65F5FF';
  ctx.font = '800 32px Inter, sans-serif';
  ctx.fillText(currency(subtotal), width - padding - 220, y);
  y += 36;

  ctx.fillStyle = '#F3F7FF';
  ctx.font = '700 24px Inter, sans-serif';
  ctx.fillText('Servicios pendientes de cotización', padding + 24, y);
  ctx.fillStyle = '#9BAAC4';
  ctx.font = '700 26px Inter, sans-serif';
  ctx.fillText(String(pendingItems.length), width - padding - 120, y);
  y += 52;

  ctx.fillStyle = '#D0E6FF';
  ctx.font = '500 20px Inter, sans-serif';
  ctx.fillText('Nota: El presupuesto es estimado y requiere confirmación cuando corresponda.', padding + 24, y + 16);

  const dataUrl = canvas.toDataURL('image/png');
  const imageData = atob(dataUrl.split(',')[1]);
  const imageBytes = Uint8Array.from(imageData, (character) => character.charCodeAt(0));
  return new File([imageBytes], 'resumen-pedido-copicenter.png', { type: 'image/png' });
}

function downloadCartImage(file) {
  const imageUrl = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = file.name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(imageUrl), 1000);
}

function exportCartImage() {
  try {
    downloadCartImage(createCartImageFile());
  } catch (error) {
    console.error(error);
    showGlobalMessage('No se pudo exportar el resumen del pedido. Inténtalo nuevamente.');
  }
}

function sendContactRequest() {
  if (state.cart.length === 0) {
    elements.contactAlert.textContent = 'Añade al menos un servicio al carrito antes de enviar el pedido.';
    return;
  }

  try {
    downloadCartImage(createCartImageFile());
  } catch (error) {
    console.error(error);
    elements.contactAlert.textContent = 'No se pudo generar la imagen del carrito.';
    return;
  }

  openWhatsApp(buildWhatsAppMessage());
  elements.contactAlert.textContent = 'Se descargó la imagen. Adjunta resumen-pedido-copicenter.png al chat de WhatsApp.';
}

function renderCart() {
  if (state.cart.length === 0) {
    elements.cartItems.innerHTML = '<div class="empty-state">Tu carrito está vacío.</div>';
    elements.subtotal.textContent = '$0';
    elements.manualItemsCount.textContent = '0';
    return;
  }

  const items = state.cart.map((entry) => {
    const service = CATALOG.find((item) => item.id === entry.id);
    if (!service) return null;

    const subtotal = getServiceSubtotal(service, entry.quantity);
    const rowPrice = service.priceType === 'manual' || service.priceType === 'range' || service.priceType === 'from' ? 'Precio por cotizar' : currency(subtotal);

    return `
      <div class="cart-item">
        <div class="cart-item-top">
          <div>
            <h4>${escapeHtml(service.name)}</h4>
            <small>${escapeHtml(service.category)}</small>
          </div>
          <button class="cart-item-remove" type="button" data-remove="${service.id}">Eliminar</button>
        </div>
        <div class="cart-item-controls">
          <div class="quantity-control" aria-label="Cantidad de ${escapeHtml(service.name)}">
            <button type="button" data-qty-change="decrease" data-item-id="${service.id}">−</button>
            <input type="number" min="1" value="${entry.quantity}" data-qty-input="${service.id}" />
            <button type="button" data-qty-change="increase" data-item-id="${service.id}">+</button>
          </div>
          <strong>${rowPrice}</strong>
        </div>
      </div>
    `;
  }).filter(Boolean).join('');

  elements.cartItems.innerHTML = items;

  const subtotalValue = state.cart.reduce((sum, entry) => {
    const item = CATALOG.find((service) => service.id === entry.id);
    if (!item) return sum;
    return sum + getServiceSubtotal(item, entry.quantity);
  }, 0);

  const manualCount = state.cart.filter((entry) => {
    const service = CATALOG.find((item) => item.id === entry.id);
    return service && (service.priceType === 'manual' || service.priceType === 'range' || service.priceType === 'from');
  }).length;

  elements.subtotal.textContent = currency(subtotalValue);
  elements.manualItemsCount.textContent = String(manualCount);
}

function showGlobalMessage(message) {
  const existing = document.getElementById('global-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'global-toast';
  toast.setAttribute('role', 'status');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.background = '#0f1827';
  toast.style.color = '#fff';
  toast.style.padding = '0.8rem 1rem';
  toast.style.borderRadius = '12px';
  toast.style.boxShadow = '0 8px 18px rgba(0,0,0,0.2)';
  toast.style.zIndex = '1000';
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 2400);
}

function buildWhatsAppMessage() {
  const lines = [
    '*Solicitud comercial Copicenter*',
    'La solicitud no confirma una compra definitiva.',
    '',
    '*Servicios solicitados:*'
  ];

  for (const entry of state.cart) {
    const service = CATALOG.find((item) => item.id === entry.id);
    if (!service) continue;

    const label = service.priceType === 'manual' || service.priceType === 'range' || service.priceType === 'from'
      ? 'Precio por cotizar'
      : currency(getServiceSubtotal(service, entry.quantity));

    lines.push(`- ${entry.quantity} x ${service.name}: ${label}`);
  }

  if (state.cart.length === 0) {
    lines.push('No hay servicios seleccionados.');
  }

  lines.push('', '*Nota:*', 'Se revisará la solicitud antes de confirmar precio final.');
  return lines.join('\n');
}

function openWhatsApp(message) {
  const number = COMMERCIAL_CONFIG.whatsappNumber;
  if (!number) {
    showGlobalMessage('Número de WhatsApp pendiente de configuración para este negocio.');
    return;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function prepareCartWhatsApp() {
  if (state.cart.length === 0) {
    showGlobalMessage('Añade al menos un servicio antes de preparar la solicitud.');
    return;
  }

  openWhatsApp(buildWhatsAppMessage());
}

function showDiagnosticAlert(message, type = 'success') {
  elements.diagnosticAlert.textContent = message;
  elements.diagnosticAlert.className = `form-alert ${type}`;
}

function prepareWorkshopMessage(formData) {
  return [
    '*Solicitud preliminar de diagnóstico - Rodriguh Workshop*',
    '',
    `Tipo de dispositivo: ${formData.get('deviceType')}`,
    `Sistema operativo: ${formData.get('operatingSystem') || 'No aplica'}`,
    `Categoría del problema: ${formData.get('issueCategory')}`,
    `Servicio solicitado: ${formData.get('serviceRequested')}`,
    '',
    'Descripción del inconveniente:',
    formData.get('description'),
    '',
    'Nota: no compartir contraseñas, claves bancarias ni información sensible.'
  ].join('\n');
}

function renderWorkshopServices() {
  elements.workshopServices.innerHTML = WORKSHOP_ITEMS.map((item) => `
    <article class="workshop-service">
      <span class="tag">${escapeHtml(item.tag)}</span>
      <h4>${escapeHtml(item.title)}</h4>
      <p>${escapeHtml(item.description)}</p>
      <div class="price">${item.manual ? 'Precio por cotizar' : currency(item.price)}</div>
      <button class="button button-secondary" type="button" data-workshop-request="${item.id}">Solicitar asistencia</button>
    </article>
  `).join('');
}

function requestWorkshopService(itemId) {
  const item = WORKSHOP_ITEMS.find((entry) => entry.id === itemId);
  if (!item) return;

  const message = [
    '*Solicitud de asistencia - Rodriguh Workshop*',
    '',
    `Servicio solicitado: ${item.title}`,
    `Precio: ${item.manual ? 'Precio por cotizar' : currency(item.price)}`,
    '',
    'Se requiere revisión inicial para confirmar requisitos y costo real.'
  ].join('\n');

  openWhatsApp(message);
}

function attachEventListeners() {
  if (elements.searchInput) {
    elements.searchInput.addEventListener('input', (event) => {
      state.query = event.target.value;
      renderCatalog();
    });
  }

  if (elements.categoryFilter) {
    elements.categoryFilter.addEventListener('change', (event) => {
      state.category = event.target.value;
      renderCatalog();
    });
  }

  if (elements.clearCart) {
    elements.clearCart.addEventListener('click', () => {
      if (state.cart.length === 0) {
        showGlobalMessage('Tu carrito ya está vacío.');
        return;
      }

      const shouldClear = window.confirm('¿Deseas vaciar el carrito actual?');
      if (!shouldClear) return;

      clearCart();
    });
  }

  if (elements.prepareWhatsapp) {
    elements.prepareWhatsapp.addEventListener('click', prepareCartWhatsApp);
  }

  if (elements.exportCartImage) {
    elements.exportCartImage.addEventListener('click', exportCartImage);
  }

  if (elements.contactWhatsapp) {
    elements.contactWhatsapp.addEventListener('click', sendContactRequest);
  }

  document.addEventListener('click', (event) => {
    const addButton = event.target.closest('[data-add]');
    if (addButton) {
      addToCart(addButton.dataset.add);
      return;
    }

    const detailButton = event.target.closest('[data-details]');
    if (detailButton) {
      const item = CATALOG.find((service) => service.id === detailButton.dataset.details);
      if (item) {
        showGlobalMessage(`${item.name}: ${item.description}`);
      }
      return;
    }

    const removeButton = event.target.closest('[data-remove]');
    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      return;
    }

    const qtyButton = event.target.closest('[data-qty-change]');
    if (qtyButton) {
      const itemId = qtyButton.dataset.itemId;
      const entry = state.cart.find((item) => item.id === itemId);
      if (!entry) return;
      const nextQty = qtyButton.dataset.qtyChange === 'increase' ? entry.quantity + 1 : entry.quantity - 1;
      updateCartQuantity(itemId, nextQty);
      return;
    }

    const workshopRequest = event.target.closest('[data-workshop-request]');
    if (workshopRequest) {
      requestWorkshopService(workshopRequest.dataset.workshopRequest);
      return;
    }

    const dataOpenWa = event.target.closest('[data-open-whatsapp]');
    if (dataOpenWa) {
      const message =
        '*Solicitud de información - Copicenter*\n\nHola, me gustaría consultar servicios y precios de Copicenter.';
      openWhatsApp(message);
    }
  });

  document.addEventListener('input', (event) => {
    const qtyInput = event.target.closest('[data-qty-input]');
    if (!qtyInput) return;

    const itemId = qtyInput.dataset.qtyInput;
    const value = Number(qtyInput.value);
    if (!Number.isFinite(value) || value < 1) {
      qtyInput.value = 1;
    }
    updateCartQuantity(itemId, qtyInput.value);
  });

  if (elements.diagnosticForm) {
    elements.diagnosticForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(elements.diagnosticForm);
      const deviceType = formData.get('deviceType')?.toString().trim();
      const issueCategory = formData.get('issueCategory')?.toString().trim();
      const serviceRequested = formData.get('serviceRequested')?.toString().trim();
      const description = formData.get('description')?.toString().trim();

      if (!deviceType || !issueCategory || !serviceRequested || !description) {
        showDiagnosticAlert('Completa los campos obligatorios antes de preparar la solicitud.', 'error');
        return;
      }

      const message = prepareWorkshopMessage(formData);
      openWhatsApp(message);
      showDiagnosticAlert('Solicitud preparada para WhatsApp. Revisa el resumen antes de confirmar.', 'success');
      elements.diagnosticForm.reset();
    });
  }
}

function init() {
  renderCategoryFilter();
  renderCatalog();
  renderCart();
  if (elements.workshopServices) {
    renderWorkshopServices();
  }
  observeRevealElements();
  attachEventListeners();
}

init();
