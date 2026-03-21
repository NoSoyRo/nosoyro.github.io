(function () {
  "use strict";

  var STORAGE_KEY = "nosoyro-cv-lang";

  var STRINGS = {
    en: {
      metaTitle: "José Rodrigo Moreno López — CV",
      metaDescription:
        "Senior data engineer, lecturer, and MSc student. CV and portfolio.",
      skipContent: "Skip to content",
      navAria: "Primary",
      navProfile: "Profile",
      navExperience: "Experience",
      navEducation: "Education",
      navHighlights: "Highlights",
      navSkills: "Skills",
      navContact: "Contact",
      langSwitchAria: "Language",
      heroMexico: "Mexico",
      profileHeading: "Profile",
      profileLead:
        "Senior data engineer and Databricks developer with 7+ years designing, building, and maintaining scalable data pipelines on Azure, GCP, Informatica, TIBCO EBX, and SnapLogic. Strong background in Apache Spark, Databricks, SQL, Python, FastAPI, Spring, and React, modernizing batch ETL and analytical workflows into cloud-native architectures. Proven work in data quality, governance, software architecture, ETL orchestration, and collaboration with analytics and backend teams.",
      experienceHeading: "Experience",
      expSfTitle: "Senior Software Engineer",
      expSfMeta: "Salesforce · Mexico (remote) · Mar 2026 — present",
      expTmAdvTitle: "Advanced Data Engineer & Senior Quality Engineer",
      expTmAdvMeta: "Tech Mahindra · Mexico / remote · Sep 2025 — Mar 2026",
      expTmAdv0:
        "Designed and implemented a configuration-first automation framework for functional testing of ML-driven recommendation flows.",
      expTmAdv1:
        "Integrated Spring-based applications with ReportPortal (metrics/traceability) and QMetry (quality engineering tracking).",
      expTmAdv2:
        "Led data quality, validation, and governance strategies for enterprise data platforms.",
      expTmAdv3:
        "Built performance-testing automation (sudden spike, stochastic TPS noise, endurance, high-TPS scenarios) and improved QMA for existing solutions at scale.",
      expTmQeTitle: "Senior Quality Engineer",
      expTmQeMeta: "Tech Mahindra · remote · Jul 2025 — Nov 2025",
      expLectTitle: "Faculty Lecturer (part-time)",
      expLectMeta:
        "Faculty of Engineering, UNAM · Ciudad Universitaria · Aug 2025 — present",
      expLect0:
        "Data structures and algorithms 2 — industry-oriented course (Spanish).",
      expLect1:
        "Modern data mining patterns for computing engineers (English).",
      expChubbSrTitle: "Senior MDM Data Engineer",
      expChubbSrMeta: "Chubb · Mexico / remote · Jun 2024 — Jun 2025",
      expChubbSr0:
        "Enterprise pipelines with IDMC, IICS, PowerCenter, and Databricks for batch and near-real-time processing.",
      expChubbSr1:
        "Java Spring REST APIs (layered, domain-driven) integrating internal apps with on-prem MDM; reduced data consumption bottlenecks by roughly 30%.",
      expChubbSr2:
        "MDM architecture for customer domains: CTE-heavy SQL, procedures, modeling; support for analytics and insurance/risk reporting.",
      expChubbSr3:
        "Production support and UAT; FastAPI integration with Power BI for ETL job traceability; OpenAPI/Swagger for API schemas.",
      expChubbTitle: "MDM Data Engineer",
      expChubbMeta: "Chubb · Mexico / remote · Aug 2023 — Jun 2024",
      expChubb0:
        "Databricks pipelines ingesting SAS, relational DBs, and APIs; Python ETL and SQL optimization.",
      expChubb1:
        "Workflow integration with Azure (monitoring, CI/CD, storage); Power BI on harmonized datasets.",
      expAllTitle: "MDM Designer & Software Designer (consultant)",
      expAllMeta: "AllDatum · Mexico · Feb 2023 — Jun 2025",
      expAll0:
        "Enterprise integration architectures across SAS, Databricks, TIBCO EBX, and SnapLogic.",
      expAll1:
        "Distributed J2EE workload distribution with governance-as-code, CI/CD, and modular subsystems matured through agile delivery.",
      expAll2:
        "Automated batch, reconciliation, and DQ validation for very large datasets (e.g. ~250M rows) to meet SLOs.",
      expAll3:
        "Extended MDM via Java APIs and REST; FastAPI backends with NoSQL integrating third parties (e.g. Google Maps, OpenAI SDK).",
      expSolTitle: "Software Development Engineer",
      expSolMeta: "Solera · Mexico · Nov 2022 — Jan 2023",
      expSol0:
        "Test automation and backend development with Spring Boot and .NET Core; DDD and data-driven design for two enterprise applications.",
      expAtlasTitle: "MDM & Statistics (Actuarial)",
      expAtlasMeta: "Seguros Atlas · Mexico · Aug 2022 — Nov 2022",
      expAtlas0:
        "Analytical pipelines and BI over SAS actuarial data; automated SQL and SnapLogic ETL.",
      expAniTitle: "Technical Lead & Founder",
      expAniMeta: "Animathica · Mexico · May 2019 — Aug 2022",
      expAni0:
        "Data-driven educational platforms (Python, FastAPI, Manim, Java); CI/CD with GitHub Actions.",
      eduHeading: "Education",
      eduMscTitle: "MSc in Computer Science (PCIC)",
      eduMscMeta: "IIMAS, UNAM · Mexico City · Aug 2024 — present",
      eduMscLead:
        "Focus on solution architectures and tradeoffs, modern software design, and integration with AI operations.",
      eduPhyTitle: "BSc in Physics",
      eduPhyMeta: "Faculty of Sciences, UNAM · Mexico",
      eduPhyLead: "Scientific programming, simulation, and data analysis.",
      eduMathTitle: "BSc in Mathematics",
      eduMathMeta: "Faculty of Sciences, UNAM · Mexico",
      highlightsHeading: "Selected projects",
      highlightsLead:
        "Professional and research work complementing the public repositories listed below.",
      hlCattleTitle: "Cattle accounting system",
      hlCattleMeta: "Python, Databricks, SQL · 2023 — present",
      hlCattleBody:
        "ETL and ML on transactional and historical data to estimate cattle counts from drone video; Spark aggregations for reporting.",
      hlPosTitle: "Connecting (POS platform)",
      hlPosMeta: "Spring, Node.js, React, SQL/NoSQL · 2023 — present",
      hlPosBody:
        "Centralized POS for small businesses using cloud services; monolith plus real-time messaging (WebSockets), token-based auth.",
      hlUrbanTitle: "Urban expansion modeling",
      hlUrbanMeta: "Python · Aug 2022 — Dec 2022",
      hlUrbanHtml:
        'AC–GA pipeline with unsupervised training to forecast urban land use (~80% accuracy) for planning. Related repository: <a href="https://github.com/NoSoyRo/CityModelling">CityModelling</a> (thesis work).',
      ghHeading: "Public GitHub repositories",
      ghLeadBefore: "All public repositories under ",
      ghLeadAfter: " (name, primary language, notes).",
      ghThRepo: "Repository",
      ghThLang: "Language",
      ghThNotes: "Notes",
      ghFootHtml:
        'Earlier visual demos (calculus sums, Fourier, collisions, n-body, and more) live under <a href="https://github.com/NoSoyRo/TheGame">TheGame</a> and <a href="https://github.com/NoSoyRo/Proyectos_Personales">Proyectos_Personales</a>.',
      ghNote0: ".NET coursework and exercises.",
      ghNote1: "Portfolio work as a data analyst.",
      ghNote3: "Practice across languages and paradigms.",
      ghNote4: "Multivariable calculus animations (Manim).",
      ghNote5: "Master's thesis project.",
      ghNote6: "JPA and Spring Security sample (web app).",
      ghNote7: "Random dataset generation for MDM scenarios.",
      ghNote8: "Data structures in Java.",
      ghNote9: "Data structures course (C#).",
      ghNote12: "Django CRUD (function-based views).",
      ghNote14: "MDM inner stages with Spring Batch.",
      ghNote15: "Iterated functions and visualization.",
      ghNote17: "Practice solutions.",
      ghNote18: "MDM-related experiments and notebooks.",
      ghNote21: "Course: application security fundamentals.",
      ghNote22: "This site.",
      ghNote23: "Simulation workflows.",
      ghNote24: "Pi Solutions projects.",
      ghNote25: "MSc advanced programming coursework.",
      ghNote27: "Homework scripts and personal experiments.",
      ghNote28: "ASP.NET Identity exploration.",
      ghNote29: "Dissemination, coursework, and side projects.",
      skillsHeading: "Skills & certifications",
      skProg: "Programming",
      skProgDd:
        "Python (5+ years), Java (Spring Boot/Cloud), SQL (SQL Server), .NET Core",
      skData: "Data engineering",
      skDataDd:
        "Databricks, Apache Spark, ETL, data quality, governance, IICS, PowerCenter, MDM, SnapLogic, TIBCO EBX, Spring Batch, SAS-style modernization",
      skSoft: "Software engineering",
      skSoftDd:
        "Spring ecosystem, FastAPI, Django, React, Node.js, JBoss, Tomcat, NGINX, CI/CD, DDD, microservices, design patterns",
      skCloud: "Cloud & DevOps",
      skCloudDd: "Azure, GCP, Git / GitHub / GitLab",
      skAnalytics: "Analytics",
      skAnalyticsDd: "Power BI, OLAP, feature engineering",
      skLang: "Languages",
      skLangDd: "Spanish (native), English (full professional)",
      certsSub: "Certifications",
      cert0: "Informatica MDM Developer — Aug 2023",
      cert1: "SnapLogic Professional Developer — Jun 2022",
      cert2: "SnapLogic Administrator / Architect — Oct 2022",
      cert3: "Microsoft Azure Fundamentals — Dec 2023",
      contactHeading: "Contact",
      formAria: "Contact form (frontend only)",
      formHint:
        "Form is static on GitHub Pages; wire <code>action</code> to your endpoint if needed.",
      formFirst: "First name",
      formLast: "Last name",
      formMessage: "Message",
      phFirst: "Your name",
      phLast: "Your last name",
      phMessage: "Write something",
      formSubmit: "Submit",
      foot:
        "Last updated March 2026. Source: <a href=\"https://github.com/NoSoyRo/nosoyro.github.io\">nosoyro.github.io</a>",
      badgeFork: "fork",
      typed0: "Senior data engineer and Databricks developer.",
      typed1: "Senior software engineer.",
      typed2: "MSc student in computer science (UNAM / IIMAS).",
      typed3: "Faculty lecturer in algorithms and data mining.",
      typed4: "Physicist and mathematician who builds software."
    },
    es: {
      metaTitle: "José Rodrigo Moreno López — CV",
      metaDescription:
        "Ingeniero de datos senior, profesor y estudiante de maestría. CV y portafolio.",
      skipContent: "Ir al contenido",
      navAria: "Principal",
      navProfile: "Perfil",
      navExperience: "Experiencia",
      navEducation: "Formación",
      navHighlights: "Destacados",
      navSkills: "Competencias",
      navContact: "Contacto",
      langSwitchAria: "Idioma",
      heroMexico: "México",
      profileHeading: "Perfil",
      profileLead:
        "Ingeniero de datos senior y desarrollador Databricks con más de 7 años diseñando, construyendo y operando pipelines escalables en Azure, GCP, Informatica, TIBCO EBX y SnapLogic. Sólida base en Apache Spark, Databricks, SQL, Python, FastAPI, Spring y React, modernizando ETL por lotes y flujos analíticos hacia arquitecturas nativas en la nube. Experiencia comprobada en calidad y gobernanza de datos, arquitectura de software, orquestación de ETL y colaboración con equipos de analítica y backend.",
      experienceHeading: "Experiencia",
      expSfTitle: "Ingeniero de software senior",
      expSfMeta: "Salesforce · México (remoto) · mar. 2026 — actualidad",
      expTmAdvTitle:
        "Ingeniero de datos avanzado e ingeniero senior de calidad",
      expTmAdvMeta: "Tech Mahindra · México / remoto · sep. 2025 — mar. 2026",
      expTmAdv0:
        "Diseño e implementación de un marco de automatización «configuration-first» para pruebas funcionales de flujos de recomendación con ML.",
      expTmAdv1:
        "Integración de aplicaciones Spring con ReportPortal (métricas/trazabilidad) y QMetry (seguimiento de calidad).",
      expTmAdv2:
        "Liderazgo en estrategias de calidad, validación y gobernanza de datos en plataformas empresariales.",
      expTmAdv3:
        "Automatización de pruebas de rendimiento (picos bruscos, ruido estocástico en TPS, resistencia, altos TPS) y mejora de QMA a escala.",
      expTmQeTitle: "Ingeniero senior de calidad",
      expTmQeMeta: "Tech Mahindra · remoto · jul. 2025 — nov. 2025",
      expLectTitle: "Profesor de asignatura (tiempo parcial)",
      expLectMeta:
        "Facultad de Ingeniería, UNAM · Ciudad Universitaria · ago. 2025 — actualidad",
      expLect0:
        "Estructuras de datos y algoritmos 2 — enfoque orientado a la industria (español).",
      expLect1:
        "Patrones modernos de minería de datos para ingenieros en computación (inglés).",
      expChubbSrTitle: "Ingeniero senior de datos MDM",
      expChubbSrMeta: "Chubb · México / remoto · jun. 2024 — jun. 2025",
      expChubbSr0:
        "Pipelines empresariales con IDMC, IICS, PowerCenter y Databricks para procesamiento por lotes y casi en tiempo real.",
      expChubbSr1:
        "APIs REST Java Spring (por capas, DDD) integrando aplicaciones internas con MDM on-prem; reducción aproximada del 30% en cuellos de botella de consumo de datos.",
      expChubbSr2:
        "Arquitectura MDM para dominios de clientes: SQL con CTE, procedimientos y modelado; soporte a analítica y reportes de seguros/riesgo.",
      expChubbSr3:
        "Soporte a producción y UAT; integración FastAPI con Power BI para trazabilidad de jobs ETL; OpenAPI/Swagger para esquemas de API.",
      expChubbTitle: "Ingeniero de datos MDM",
      expChubbMeta: "Chubb · México / remoto · ago. 2023 — jun. 2024",
      expChubb0:
        "Pipelines Databricks que ingieren SAS, bases relacionales y APIs; ETL en Python y optimización SQL.",
      expChubb1:
        "Integración de flujos con Azure (monitoreo, CI/CD, almacenamiento); Power BI sobre conjuntos armonizados.",
      expAllTitle: "Diseñador MDM y de software (consultor)",
      expAllMeta: "AllDatum · México · feb. 2023 — jun. 2025",
      expAll0:
        "Arquitecturas de integración empresarial con SAS, Databricks, TIBCO EBX y SnapLogic.",
      expAll1:
        "Distribución de carga J2EE con gobernanza como código, CI/CD y subsistemas modulares madurados con entrega ágil.",
      expAll2:
        "Automatización de lotes, conciliación y validación de calidad de datos para conjuntos muy grandes (p. ej. ~250M filas) cumpliendo SLOs.",
      expAll3:
        "Extensión de MDM vía APIs Java y REST; backends FastAPI con NoSQL e integraciones (p. ej. Google Maps, SDK de OpenAI).",
      expSolTitle: "Ingeniero de desarrollo de software",
      expSolMeta: "Solera · México · nov. 2022 — ene. 2023",
      expSol0:
        "Automatización de pruebas y desarrollo backend con Spring Boot y .NET Core; DDD y diseño guiado por datos en dos aplicaciones empresariales.",
      expAtlasTitle: "MDM y estadística (actuarial)",
      expAtlasMeta: "Seguros Atlas · México · ago. 2022 — nov. 2022",
      expAtlas0:
        "Pipelines analíticos y BI sobre datos actuariales en SAS; SQL automatizado y ETL SnapLogic.",
      expAniTitle: "Líder técnico y fundador",
      expAniMeta: "Animathica · México · may. 2019 — ago. 2022",
      expAni0:
        "Plataformas educativas orientadas a datos (Python, FastAPI, Manim, Java); CI/CD con GitHub Actions.",
      eduHeading: "Formación",
      eduMscTitle: "Maestría en ciencias de la computación (PCIC)",
      eduMscMeta: "IIMAS, UNAM · Ciudad de México · ago. 2024 — actualidad",
      eduMscLead:
        "Énfasis en arquitecturas de solución y sus tradeoffs, diseño moderno de software e integración con operaciones de IA.",
      eduPhyTitle: "Licenciatura en física",
      eduPhyMeta: "Facultad de Ciencias, UNAM · México",
      eduPhyLead: "Programación científica, simulación y análisis de datos.",
      eduMathTitle: "Licenciatura en matemáticas",
      eduMathMeta: "Facultad de Ciencias, UNAM · México",
      highlightsHeading: "Proyectos destacados",
      highlightsLead:
        "Trabajo profesional y de investigación que complementa los repositorios públicos que aparecen abajo.",
      hlCattleTitle: "Sistema de conteo ganadero",
      hlCattleMeta: "Python, Databricks, SQL · 2023 — actualidad",
      hlCattleBody:
        "ETL y ML sobre datos transaccionales e históricos para estimar existencias desde video de drones; agregaciones Spark para reportes.",
      hlPosTitle: "Connecting (plataforma POS)",
      hlPosMeta: "Spring, Node.js, React, SQL/NoSQL · 2023 — actualidad",
      hlPosBody:
        "POS centralizado para pequeños negocios con servicios en la nube; monolito más mensajería en tiempo real (WebSockets) y autenticación basada en tokens.",
      hlUrbanTitle: "Modelado de expansión urbana",
      hlUrbanMeta: "Python · ago. 2022 — dic. 2022",
      hlUrbanHtml:
        'Tubería AC–GA con entrenamiento no supervisado para pronosticar uso de suelo urbano (~80% de exactitud) con fines de planeación. Repositorio relacionado: <a href="https://github.com/NoSoyRo/CityModelling">CityModelling</a> (tesis).',
      ghHeading: "Repositorios públicos en GitHub",
      ghLeadBefore: "Todos los repositorios públicos en ",
      ghLeadAfter: " (nombre, lenguaje principal, descripción breve).",
      ghThRepo: "Repositorio",
      ghThLang: "Lenguaje",
      ghThNotes: "Notas",
      ghFootHtml:
        'Demos visuales anteriores (sumas inferiores, Fourier, choques, n-cuerpos, etc.) en <a href="https://github.com/NoSoyRo/TheGame">TheGame</a> y <a href="https://github.com/NoSoyRo/Proyectos_Personales">Proyectos_Personales</a>.',
      ghNote0: "Ejercicios y trabajos con .NET.",
      ghNote1: "Portafolio como analista de datos.",
      ghNote3: "Práctica en varios lenguajes y paradigmas.",
      ghNote4: "Animaciones de cálculo multivariable (Manim).",
      ghNote5: "Proyecto de tesis de maestría.",
      ghNote6: "Ejemplo web con JPA y Spring Security.",
      ghNote7: "Generación de datos sintéticos para escenarios MDM.",
      ghNote8: "Estructuras de datos en Java.",
      ghNote9: "Curso de estructuras de datos (C#).",
      ghNote12: "CRUD en Django (vistas basadas en funciones).",
      ghNote14: "Etapas internas MDM con Spring Batch.",
      ghNote15: "Funciones iteradas y visualización.",
      ghNote17: "Soluciones de práctica.",
      ghNote18: "Experimentos y notebooks sobre MDM.",
      ghNote21: "Curso: fundamentos de seguridad en aplicaciones.",
      ghNote22: "Este sitio.",
      ghNote23: "Flujos de simulación.",
      ghNote24: "Proyectos Pi Solutions.",
      ghNote25: "Trabajos de programación avanzada (maestría).",
      ghNote27: "Scripts de tareas y experimentos personales.",
      ghNote28: "Exploración con ASP.NET Identity.",
      ghNote29: "Divulgación, cursos y proyectos varios.",
      skillsHeading: "Competencias y certificaciones",
      skProg: "Programación",
      skProgDd:
        "Python (5+ años), Java (Spring Boot/Cloud), SQL (SQL Server), .NET Core",
      skData: "Ingeniería de datos",
      skDataDd:
        "Databricks, Apache Spark, ETL, calidad y gobernanza de datos, IICS, PowerCenter, MDM, SnapLogic, TIBCO EBX, Spring Batch, modernización tipo SAS",
      skSoft: "Ingeniería de software",
      skSoftDd:
        "Ecosistema Spring, FastAPI, Django, React, Node.js, JBoss, Tomcat, NGINX, CI/CD, DDD, microservicios, patrones de diseño",
      skCloud: "Nube y DevOps",
      skCloudDd: "Azure, GCP, Git / GitHub / GitLab",
      skAnalytics: "Analítica",
      skAnalyticsDd: "Power BI, OLAP, ingeniería de características",
      skLang: "Idiomas",
      skLangDd: "Español (nativo), inglés (nivel profesional completo)",
      certsSub: "Certificaciones",
      cert0: "Informatica MDM Developer — ago. 2023",
      cert1: "SnapLogic Professional Developer — jun. 2022",
      cert2: "SnapLogic Administrator / Architect — oct. 2022",
      cert3: "Microsoft Azure Fundamentals — dic. 2023",
      contactHeading: "Contacto",
      formAria: "Formulario de contacto (solo interfaz)",
      formHint:
        "El formulario es estático en GitHub Pages; conecta el <code>action</code> a tu endpoint si lo necesitas.",
      formFirst: "Nombre",
      formLast: "Apellido",
      formMessage: "Mensaje",
      phFirst: "Tu nombre",
      phLast: "Tus apellidos",
      phMessage: "Escribe tu mensaje",
      formSubmit: "Enviar",
      foot:
        "Actualizado en marzo de 2026. Código: <a href=\"https://github.com/NoSoyRo/nosoyro.github.io\">nosoyro.github.io</a>",
      badgeFork: "fork",
      typed0: "Ingeniero de datos senior y desarrollador Databricks.",
      typed1: "Ingeniero de software senior.",
      typed2: "Estudiante de maestría en computación (UNAM / IIMAS).",
      typed3: "Profesor de algoritmos y minería de datos.",
      typed4: "Físico y matemático que construye software."
    }
  };

  function getLang() {
    var saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") return saved;
    var nav = navigator.language || navigator.userLanguage || "";
    return nav.toLowerCase().indexOf("es") === 0 ? "es" : "en";
  }

  function setLang(lang) {
    if (lang !== "en" && lang !== "es") return;
    localStorage.setItem(STORAGE_KEY, lang);
    apply(lang);
  }

  var typedInstance = null;

  function startTyped(lang) {
    var el = document.querySelector(".mov");
    if (!el || typeof Typed === "undefined") return;
    if (typedInstance) {
      typedInstance.destroy();
      typedInstance = null;
    }
    var T = STRINGS[lang];
    typedInstance = new Typed(".mov", {
      strings: [T.typed0, T.typed1, T.typed2, T.typed3, T.typed4],
      typeSpeed: 42,
      backSpeed: 28,
      backDelay: 1400,
      loop: true,
      smartBackspace: true
    });
  }

  function apply(lang) {
    var T = STRINGS[lang];
    document.documentElement.lang = lang === "es" ? "es" : "en";
    document.title = T.metaTitle;
    var meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", T.metaDescription);

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var key = node.getAttribute("data-i18n");
      if (key && T[key] !== undefined) node.textContent = T[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-html");
      if (key && T[key] !== undefined) node.innerHTML = T[key];
    });

    var skip = document.getElementById("skip-link");
    if (skip) skip.textContent = T.skipContent;
    var nav = document.querySelector("nav.site-nav");
    if (nav) nav.setAttribute("aria-label", T.navAria);
    var langSwitch = document.querySelector(".lang-switch");
    if (langSwitch) langSwitch.setAttribute("aria-label", T.langSwitchAria);
    var form = document.querySelector(".cv-form");
    if (form) form.setAttribute("aria-label", T.formAria);

    var ghLead = document.getElementById("gh-lead");
    if (ghLead) {
      ghLead.innerHTML =
        T.ghLeadBefore +
        '<a href="https://github.com/NoSoyRo">NoSoyRo</a>' +
        T.ghLeadAfter;
    }

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isOn = btn.getAttribute("data-set-lang") === lang;
      btn.classList.toggle("is-active", isOn);
      btn.setAttribute("aria-pressed", isOn ? "true" : "false");
    });

    document.querySelectorAll("[data-i18n-badge]").forEach(function (node) {
      if (T.badgeFork) node.textContent = T.badgeFork;
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-placeholder");
      if (key && T[key] !== undefined) node.setAttribute("placeholder", T[key]);
    });

    document.querySelectorAll("[data-i18n-value]").forEach(function (node) {
      var key = node.getAttribute("data-i18n-value");
      if (key && T[key] !== undefined) node.setAttribute("value", T[key]);
    });

    startTyped(lang);
  }

  function init() {
    var lang = getLang();
    apply(lang);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var next = btn.getAttribute("data-set-lang");
        if (next) setLang(next);
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
