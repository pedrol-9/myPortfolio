import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "welcome": "Welcome to my portfolio",
      "about": "About me",
      "projects": "Projects",
      "contact": "Contact",
      "my_portfolio": "My Portfolio",
      "profession": "- Full Stack Web Developer",
      "about_me": "In 2020, due to the pandemic, I decided to start training in programming. I began by independently studying the basics, such as HTML, CSS, and JavaScript. After the global quarantine ended and the economy resumed, I returned to my career in the hospitality industry, primarily working in reception and as a bilingual customer service representative.",
      "about_me_2": "At the beginning of this year (2024), I had the opportunity to attend a Java bootcamp with Mindhub. This course allowed me to immerse myself in a field that not only developed my logical thinking and creativity but also opened doors to broad employment opportunities in the tech sector. Now, after completing the bootcamp, I continue to practice and learn autonomously with great motivation to refine my technical skills in both backend and frontend development, although I must admit I have a stronger affinity for frontend.",
      "about_me_3": "When I'm not coding, I enjoy relaxing at home, organizing, reading, watching series, playing with my pets, or simply spending free time with friends.",
      "experience": "Experience",
      "first_date": "- March, 2024 - Present",
      "homebanking_project": "Full Stack Web Developer at Homebanking App",
      "homebanking_description":"I developed a web application based on the MVC design pattern, utilizing Java and Spring Boot for the backend, and React with Vite for the frontend. This application provides comprehensive banking services, managing accounts, loans, credit and debit cards, and facilitating transactions. The user interface was designed using Tailwind CSS along with several libraries from this framework, ensuring the application is fully responsive.",
      "moviestack_project": "Frontend Web Developer at MovieStack App",
      "moviestack_description": "I developed this application to advance my knowledge of JavaScript and apply styling with Tailwind CSS. The main goal was to practice higher-order functions and learn to modularize functions for import and reuse. Currently, I am improving the appearance and taking the application to the next level.",
      "transcripts": "Transcripts",
      "transcript_1": "Bootcamp Full Stack Web Developer in JAVA",
      "skills": "Technical Skills",
      "transcript_1_description": "The accredited individual is capable of developing responsive web applications using HTML5, CSS3, JavaScript, Tailwind, React JS, and JAVA, through the most commonly used frameworks and integrating third-party APIs. Additionally, they are able to address a client's requirement, analyze it, work in a team, and carry out its development on time and in accordance with best market practices and agile methodologies.",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
    }
  },
  es: {
    translation: {
      "welcome": "Bienvenido a mi portafolio",
      "about": "Sobre mí",
      "projects": "Proyectos",
      "contact": "Contacto",
      "my_portfolio": "Mi Portafolio",
      "profession": "- Desarrollador Web Full Stack",
      "about_me": "En 2020, debido a la pandemia, decidí comenzar a capacitarme en programación. Empecé a estudiar de manera autónoma los fundamentos básicos como HTML, CSS y JavaScript. Tras la reactivación económica posterior a la cuarentena global, retomé mi carrera en el campo de la hotelería, trabajando principalmente en recepción y como representante de servicio al cliente bilingüe.",
      "about_me_2": "A principios de este año (2024), tuve la oportunidad de hacer un bootcamp de Java con Mindhub. Este curso me permitió sumergirme en una disciplina que no solo desarrolló mi pensamiento lógico y creatividad, sino que también me abrió las puertas a amplias oportunidades laborales en el sector tecnológico. Ahora, después de completar el bootcamp, continúo practicando y aprendiendo de manera autónoma con gran motivación para perfeccionar mis habilidades técnicas tanto en el desarrollo backend como en el frontend, aunque debo reconocer que tengo una mayor afinidad por el front-end.",
      "about_me_3": "Cuando no estoy programando, me gusta relajarme en casa, organizarme, leer, ver series, jugar con mis mascotas o disfrutar de mi tiempo libre con amigos.",
      "experience": "Experiencia",
      "first_date": "- March, 2024 - Presente",
      "homebanking_project": "Desarrollador Web Full Stack en Homebanking App",
      "homebanking_description":"Desarrollé una aplicación web basada en el patrón de diseño MVC, utilizando Java y Spring Boot para el backend y React con Vite para el frontend. Esta aplicación proporciona servicios bancarios completos, gestionando cuentas, préstamos, tarjetas de crédito y débito, y facilitando transacciones. La interfaz de usuario fue diseñada con Tailwind CSS y varias librerías de este framework, asegurando que la aplicación sea completamente responsive.",
      "moviestack_project": "Frontend Web Developer en MovieStack App",
      "moviestack_description": "Desarrollé esta aplicación para avanzar en mis conocimientos de JavaScript y en la aplicación de estilos con Tailwind CSS. El objetivo principal era practicar funciones de orden superior y aprender a modularizar funciones para su importación y reutilización. Actualmente, sigo mejorando la apariencia y llevando la aplicación a un nivel superior.",
      "transcripts": "Certificados",
      "transcript_1": "Bootcamp Desarrollador Web Full Stack JAVA",
      "skills": "Habilidades Técnicas",
      "transcript_1_description": "La persona acreditada es capaz de desarrollar aplicaciones web responsivas utilizando HTML5, CSS3, Javascript, Tailwind, React Js. y JAVA, a través de los frameworks más utilizados e integrando API´s de terceros. Asimismo, es capaz de abordar un requerimiento de un cliente, analizarlo, trabajar en equipo y llevar a cabo su desarrollo en tiempo y forma, cumpliendo con las mejores prácticas de mercado y bajo metodologías ágiles.",
      "": "",
      "": "",
      "": "",
      "": "",
      "": "",
    }
  }
};

i18n
  .use(initReactI18next) // Vincula con React
  .init({
    resources,
    lng: "en", // Idioma por defecto
    interpolation: {
      escapeValue: false // React ya se encarga de escapar los valores
    }
  });

export default i18n;
