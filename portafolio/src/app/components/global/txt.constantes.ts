import { Project } from "../project-modal/model/project.model";


export const TXT = {
  nav: {
    logo: 'Portafolio Juan David',
    links: ['Inicio', 'Sobre mí', 'Proyectos', 'Skills', 'Contacto'],
    cta: 'Contactame',
  },

  hero: {
    badge: 'Disponible para trabajar',
    greeting: 'Hola, soy',
    name: 'Juan David',
    role: 'Desarrollador Full Stack · Java / Spring Boot + Angular',
    desc: 'Construyo aplicaciones web completas, desde la base de datos hasta la interfaz. Me apasiona escribir código limpio, resolver problemas reales y aprender constantemente.',
    btnMain: 'Ver proyectos',
    btnSec: 'Descargar CV',
    stats: [
      { value: '2+', label: 'Años de experiencia' },
      { value: '10+', label: 'Tecnologías' },
    ],
  },

  about: {
    label: 'Sobre mí',
    title: 'Quién soy',
    bio: 'Soy desarrollador Full Stack basado en Medellín, Colombia. Me especializo en el backend con Java y Spring Boot y en el frontend con Angular. Disfruto construir productos que resuelvan problemas reales y que escalen bien.',
    experience: [
      {
        year: '2025 – 2026',
        role: 'Desarrollador Analista Full Stack · Quipux S.A.S',
        stack: 'Java · Spring Boot · Angular · Oracle DB',
        desc: 'Desarrollo y mantenimiento de aplicaciones web empresariales con Java, Spring Boot, Angular y Oracle Database. Participación en implementación de funcionalidades, consumo de APIs REST, pruebas unitarias, corrección de incidencias y migración tecnológica de Angular 15 a Angular 19, incluyendo la transición de Bootstrap a PrimeNG para modernizar la interfaz y mejorar la experiencia de desarrollo.',
        archievements: 'Logros destacados',
        descArchievements: [
      {
        title: 'Migración de Angular 15 a Angular 19'
      },
      {
        title: 'Transición de Bootstrap a PrimeNG'
      },
      {
        title: 'Implementación de nuevas funcionalidades y corrección de incidencias.'
      },
      {
        title: 'Optimización de la experiencia del usuario en aplicaciones empresariales.'
      },
      {
        title: 'Desarrollo y consumo de APIs REST.'
      },
      {
        title: 'Implementación de pruebas unitarias con JUnit y Mockito.'
      },
      {
        title: 'Soporte técnico y resolución de incidencias en entornos de calidad y preproducción.'
      }
    ]
      },

    ],
    education: [
      {
        education: 'Tecnico en Desarrollo de Software · Sena',
        year: '2022 – 2024',
      },

      {
        education: 'Tecnologo en Sistemas · Institucion Universitaria Salazar y Herrera',
        year: '2025 – Actualidad',
      },
    ],
  },

  projects: {
    label: 'Proyectos',
    title: 'Lo que he construido',
    list: <Project[]>[

      {
        name: 'CampusLost · Objetos perdidos',
        desc: 'Plataforma universitaria para reportar y reclamar objetos perdidos. Flujo de aprobación admin, notificaciones por email y panel de gestión completo.',
        stack: ['Java 21', 'Spring Boot', 'Angular', 'MySQL', 'Railway', 'Vercel'],
        code: 'https://github.com/JuanDa17E/campuslost',
        thumb: 'assets/img/campuslost/CampusLost_Logo.png',
        gallery: [
          { img: 'assets/img/campuslost/CampusLost_IniciarSesion.png', title: 'Inicio de Sesión', description: 'El estudiante accede mediante su correo institucional y contraseña.' },
          { img: 'assets/img/campuslost/CampusLost_RecuperarContrasena.png', title: 'Olvidó su contraseña', description: 'Si no recuerda su contraseña, puede solicitar un correo de recuperación.' },
          { img: 'assets/img/campuslost/CampusLost_Registro.png', title: 'Registro de usuario', description: 'El estudiante se registra con sus datos y correo institucional, el cual recibirá un correo de confirmación.' },
          { img: 'assets/img/campuslost/CampusLost_InicioUsuario.png', title: 'Inicio Usuario', description: 'Panel principal desde el que el estudiante puede registrar objetos, buscar objetos y revisar sus solicitudes.' },
          { img: 'assets/img/campuslost/CampusLost_RegistroObjeto.png', title: 'Registro de objeto', description: 'El estudiante registra un objeto encontrado indicando su ubicación, descripción y respondiendo preguntas de verificación.' },
          { img: 'assets/img/campuslost/CampusLost_BuscarObjetoPerdido.png', title: 'Buscar objeto', description: 'El estudiante puede buscar objetos perdidos y consultar su información básica.' },
          { img: 'assets/img/campuslost/CampusLost_FormularioObjetoRecuperacion.png', title: 'Formulario de reclamación', description: 'El estudiante responde preguntas de verificación que permiten evaluar la autenticidad del reclamo.' },
          { img: 'assets/img/campuslost/CampusLost_SolicitudesReclamacion.png', title: 'Seguimiento de reclamación', description: 'El estudiante puede ver el estado de sus solicitudes y saber cuándo el objeto está disponible para reclamarlo.' },
          { img: 'assets/img/campuslost/CampusLost_PerfilUsuario.png', title: 'Perfil de usuario', description: 'El estudiante puede actualizar su nombre y cambiar su contraseña.' },
          { img: 'assets/img/campuslost/CampusLost_InicioAdmin.png', title: 'Inicio Admin', description: 'El administrador tiene acceso a todas las funcionalidades del sistema más las opciones de gestión y aprobación de solicitudes.' },
          { img: 'assets/img/campuslost/CampusLost_SolicitudesReclamacionAdmin.png', title: 'Solicitudes de reclamación', description: 'El administrador revisa las solicitudes de reclamación pendientes y puede aprobarlas o rechazarlas.' },
          { img: 'assets/img/campuslost/CampusLost_RevisionReclamacion.png', title: 'Revisión de reclamación', description: 'El administrador consulta la información detallada del objeto y del reclamante.' },
          { img: 'assets/img/campuslost/CampusLost_RevisionReclamacionPreguntas.png', title: 'Revisión de preguntas', description: 'El administrador compara las respuestas del registrador y del reclamante para evaluar la solicitud.' },
          { img: 'assets/img/campuslost/CampusLost_RevisionReclamacionResolucionAdministrativa.png', title: 'Resolución administrativa', description: 'El administrador toma la decisión final sobre la solicitud y aprueba o rechaza la reclamación.' },
          { img: 'assets/img/campuslost/CampusLost_CrudAdmin.png', title: 'Administración', description: 'Panel de control para gestionar usuarios, objetos, preguntas, categorías y más.' },
        ],
        details: 'CampusLost es una aplicación web full stack desarrollada para optimizar la gestión de objetos perdidos y encontrados en entornos universitarios. Implementa autenticación de usuarios, recuperación de contraseña mediante correo electrónico, control de roles, gestión de reclamaciones y validación de identidad mediante preguntas de verificación. El sistema permite registrar objetos encontrados, realizar búsquedas avanzadas, gestionar solicitudes de recuperación y mantener trazabilidad completa del proceso hasta la entrega final. Desde el panel administrativo es posible gestionar usuarios, categorías, preguntas de validación y aprobar o rechazar reclamaciones. El proyecto fue desarrollado aplicando principios de arquitectura modular, seguridad basada en roles y buenas prácticas de desarrollo web, con el objetivo de ofrecer una solución escalable, segura y centrada en la experiencia del usuario.'
      },

    ],
  },

  skills: {
    label: 'Skills',
    title: 'Stack Tecnológico',
    categories: [
      {
        name: 'Backend',
        items: [
          { name: 'Java 21' },
          { name: 'Spring Framework' },
          { name: 'Spring Boot' },
          { name: 'Spring Security' },
          { name: 'JPA' },
          { name: 'REST APIs' },
          { name: 'Spring MVC' },
        ],
      },
      {
        name: 'Frontend',
        items: [
          { name: 'Angular (15,19,21)' },
          { name: 'TypeScript' },
          { name: 'HTML / SCSS'},
          { name: 'RxJS' },
          { name: 'PrimeNG' },
        ],
      },
      {
        name: 'Bases de datos',
        items: [
          { name: 'PostgreSQL' },
          { name: 'MySQL'},
          { name: 'Oracle DB' },
          { name: 'Supabase'},
        ],
      },
      {
        name: 'Herramientas',
        items: [
          { name: 'Git / GitHub' },
          { name: 'Maven' },
          { name: 'Eclipse / VS Code'},
          { name: 'Postman'},
          { name: 'Talent Api'},
          { name: 'Docker (Básico)' },
        ],
      },
       {
        name: 'Testing',
        items: [
          { name: 'JUnit' },
          { name: 'Mockito' },
          { name: 'Pruebas Unitarias' },
     
        ],
      },
    ],
  },

  contact: {
    label: 'Contacto',
    title: '¿Hablamos?',
    desc: 'Estoy disponible para nuevas oportunidades. Si tienes un proyecto o una posición en mente, escríbeme.',
    email: 'jd.agudelorestrepo@gmail.com',
    linkedin: 'linkedin.com/in/juan-david-agudelo-19a3613aa',
    github: 'github.com/JuanDa17E',
    location: 'Medellín, Colombia',
  },

  footer: {
    copy: '© 2026 · Juan David · Medellín, Colombia.',
    made: ' Hecho con Angular',
  },
};