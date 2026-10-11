/* Menu (show/hidden) */
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close")

/* Menu (show) */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

/* Menu (hidden) */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/* Mobile menu */
const navLink = document.querySelectorAll(".nav-link")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  navMenu.classList.remove("show-menu")
}
navLink.forEach((n) => n.addEventListener("click", linkAction))

/* Skills (accordion) */
const skillsContent = document.getElementsByClassName("skills-container-content"),
  skillsHeader = document.querySelectorAll(".skills-container-header")

function toggleSkills() {
  let itemClass = this.parentNode.className

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-container-content skills-close";
  }
  if (itemClass === "skills-container-content skills-close") {
    this.parentNode.className = "skills-container-content skills-open"
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills)
})

/* Experience tabs */
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]")

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target)

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("experience-active")
    })
    target.classList.add("experience-active")

    tabs.forEach((tab) => {
      tab.classList.remove("experience-active")
    })
    tab.classList.add("experience-active")
  })
})

/* Scroll sections (active link) */
const sections = document.querySelectorAll("section[id]")

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
    const sectionId = current.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link")
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link")
    }
  })
}
window.addEventListener("scroll", scrollActive)

/* Background header */
function scrollHeader() {
  const nav = document.getElementById("header")

  if (this.scrollY >= 80) nav.classList.add("scroll-header")
  else nav.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/* Show scroll to top */
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up")

  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll")
  else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/* Dark/Light mode */
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun"

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)

  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})

const translations = {
  en: {
    "meta.description": "Professional portfolio for Jyothi S J",
    "ui.language": "Choose language",
    "nav.home": "Home",
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.experience": "Experience",
    "nav.projects": "Projects",
    "nav.workshops": "Workshops",
    "nav.contact": "Contact",
    "theme.label": "Toggle color theme",
    "home.role": "Student in Computer Science",
    "home.description": "Passionate and experienced Software and platform engineering.",
    "home.contact": "Contact Me",
    "home.scroll": "Scroll down",
    "about.title": "About Me",
    "about.subtitle": "February, 2002",
    "about.imageAlt": "Illustration of a developer working at a computer",
    "about.description": "I started in DevOps, keeping CI/CD pipelines and production clusters healthy, and moved into platform engineering on Maersk's internal developer platform (IDP) team, where I wrote backend services in Java and Spring Boot.\nI like work that removes manual steps for other engineers: onboarding automation, pipeline scaffolding, and deployment checks that catch problems before release. I have also developed features using Java and Spring Boot, worked extensively with Temporal workflows, and helped with Kubernetes deployments and infrastructure orchestration.\nCurrently studying at TU Chemnitz and learning German. I am looking for a working-student position where I can keep building backend and cloud systems.",
    "about.years": "Years of<br> experience",
    "about.workshops": "Conducted<br> workshops",
    "about.languages": "Spoken<br> languages",
    "about.download": "Download CV",
    "skills.title": "Skills",
    "skills.subtitle": "A brief overview",
    "skills.technical": "Technical expertise",
    "skills.management": "Project management",
    "skills.coordination": "Coordinating cross-disciplinary projects",
    "skills.mentoring": "Mentoring and guiding peers",
    "skills.agile": "Agile and Scrum Methodologies",
    "skills.software": "Software",
    "skills.languages": "Languages",
    "skills.native": "Native",
    "skills.c1": "C1 proficiency",
    "skills.germanLevel": "A2 - B1 (ongoing)",
    "experience.title": "Experience",
    "experience.subtitle": "Professional journey",
    "experience.education": "Education",
    "experience.work": "Work",
    "experience.msc": "MSc. <br> Master's in Web Engineering (Computer Science)",
    "experience.be": "BE. <br> Electronics and Communication Engineering",
    "experience.platformEngineer": "Platform Engineer",
    "experience.devopsEngineer": "Associate Software Engineer (DevOps)",
    "experience.intern": "DevOps and tooling intern",
    "experience.ambassador": "Microsoft Learn Student Ambassador",
    "experience.trainee": "Digital Nurture 2.0 Certified Skill Development Trainee",
    "projects.title": "Projects",
    "projects.subtitle": "A selection of things I have built",
    "project.canteen.title": "Campus Canteen",
    "project.canteen.description": "A web app for managing college canteen operations, built with HTML, CSS, JavaScript, and Azure Functions.",
    "project.bank.title": "My bank",
    "project.bank.description": "A banking app for transferring money, built in collaboration with RazorPay.",
    "project.store.title": "Jyormiwears",
    "project.store.description": "An e-commerce website offering clothing for men, women, children, and infants.",
    "project.realEstate.title": "Tokenisation of Real Estate",
    "project.realEstate.description": "A blockchain web app for fractional ownership of real estate assets, using Ethereum, MetaMask, and IPFS.",
    "project.sensor.title": "Detection of adulterated liquids using optical fiber",
    "project.sensor.description": "A fiber-optic sensor system simulated in RSoft to explore sensitivity for detecting adulterated liquids. The study found that doubling the bend radius improved sensor sensitivity fourfold, offering a precise way to measure the refractive index of liquids.",
    "project.github.title": "GitHub Integration API",
    "project.github.description": "A Java and Spring Boot backend using GraphQL and REST APIs to visualize contributor activity and repository statistics.",
    "workshops.title": "Workshops",
    "workshops.tagline": "I’m always excited to share what I’ve learned and help others grow.",
    "workshops.imageAlt": "Workshop photo",
    "contact.title": "Contact",
    "contact.subtitle": "Let's get in touch",
    "contact.name": "Your Name",
    "contact.email": "Your Email",
    "contact.subject": "Subject",
    "contact.message": "Message",
    "contact.send": "Send Message",
    "contact.sending": "Sending your message...",
    "contact.sent": "Your message was sent successfully.",
    "contact.sendError": "Your message could not be sent. Please try again later.",
    "footer.role": "Platform Engineer",
  },
  de: {
    "meta.description": "Professionelles Portfolio von Jyothi S J",
    "ui.language": "Sprache auswählen",
    "nav.home": "Start",
    "nav.about": "Über mich",
    "nav.skills": "Fähigkeiten",
    "nav.experience": "Erfahrung",
    "nav.projects": "Projekte",
    "nav.workshops": "Workshops",
    "nav.contact": "Kontakt",
    "theme.label": "Farbschema wechseln",
    "home.role": "Informatikstudentin",
    "home.description": "Begeistert von Software- und Plattform-Engineering mit praktischer Erfahrung.",
    "home.contact": "Kontakt",
    "home.scroll": "Weiter nach unten",
    "about.title": "Über mich",
    "about.subtitle": "Februar 2002",
    "about.imageAlt": "Illustration einer Entwicklerin bei der Arbeit am Computer",
    "about.description": "Ich habe im DevOps-Bereich begonnen und CI/CD-Pipelines sowie produktive Cluster betreut. Anschließend wechselte ich ins Platform Engineering im Team für Maersks interne Entwicklerplattform (IDP), wo ich Backend-Services mit Java und Spring Boot entwickelt habe.\nIch übernehme gerne Aufgaben, die manuelle Arbeit für andere Entwicklerinnen und Entwickler reduzieren: automatisiertes Onboarding, Vorlagen für Pipelines und Deployment-Prüfungen, die Probleme vor einer Veröffentlichung erkennen. Außerdem habe ich Funktionen mit Java und Spring Boot entwickelt, intensiv mit Temporal-Workflows gearbeitet und Kubernetes-Deployments sowie die Orchestrierung der Infrastruktur unterstützt.\nDerzeit studiere ich an der TU Chemnitz und lerne Deutsch. Ich suche eine Werkstudentinnenstelle, in der ich weiterhin Backend- und Cloud-Systeme entwickeln kann.",
    "about.years": "Jahre<br> Erfahrung",
    "about.workshops": "Durchgeführte<br> Workshops",
    "about.languages": "Gesprochene<br> Sprachen",
    "about.download": "Lebenslauf herunterladen",
    "skills.title": "Fähigkeiten",
    "skills.subtitle": "Ein kurzer Überblick",
    "skills.technical": "Fachkenntnisse",
    "skills.management": "Projektmanagement",
    "skills.coordination": "Fachübergreifende Projekte koordinieren",
    "skills.mentoring": "Kolleginnen und Kollegen begleiten und unterstützen",
    "skills.agile": "Agile Methoden und Scrum",
    "skills.software": "Software und Tools",
    "skills.languages": "Sprachen",
    "skills.native": "Muttersprache",
    "skills.c1": "Kenntnisse auf C1-Niveau",
    "skills.germanLevel": "A2–B1 (laufend)",
    "experience.title": "Berufserfahrung",
    "experience.subtitle": "Mein beruflicher Werdegang",
    "experience.education": "Ausbildung",
    "experience.work": "Beruf",
    "experience.msc": "M.Sc. <br> Web Engineering (Informatik)",
    "experience.be": "B.Eng. <br> Elektronik und Kommunikationstechnik",
    "experience.platformEngineer": "Platform Engineer",
    "experience.devopsEngineer": "Associate Software Engineer (DevOps)",
    "experience.intern": "Praktikantin für DevOps und Tools",
    "experience.ambassador": "Microsoft Learn Student Ambassador",
    "experience.trainee": "Zertifizierte Teilnehmerin des Skill-Development-Programms Digital Nurture 2.0",
    "projects.title": "Projekte",
    "projects.subtitle": "Eine Auswahl meiner Projekte",
    "project.canteen.title": "Campus-Mensa",
    "project.canteen.description": "Eine Webanwendung zur Verwaltung des Mensabetriebs, entwickelt mit HTML, CSS, JavaScript und Azure Functions.",
    "project.bank.title": "Meine Bank",
    "project.bank.description": "Eine Banking-App für Geldüberweisungen, entwickelt in Zusammenarbeit mit RazorPay.",
    "project.store.title": "Jyormiwears",
    "project.store.description": "Ein E-Commerce-Shop mit Kleidung für Männer, Frauen, Kinder und Babys.",
    "project.realEstate.title": "Tokenisierung von Immobilien",
    "project.realEstate.description": "Eine Blockchain-Webanwendung für anteiliges Immobilieneigentum mit Ethereum, MetaMask und IPFS.",
    "project.sensor.title": "Nachweis verfälschter Flüssigkeiten mit Glasfasern",
    "project.sensor.description": "Ein in RSoft simuliertes Glasfasersensorsystem zur Untersuchung der Empfindlichkeit beim Nachweis verfälschter Flüssigkeiten. Die Studie zeigte, dass eine Verdopplung des Biegeradius die Sensorempfindlichkeit vervierfachte und so eine präzise Messung des Brechungsindex von Flüssigkeiten ermöglicht.",
    "project.github.title": "GitHub-Integrations-API",
    "project.github.description": "Ein Backend mit Java und Spring Boot, das mithilfe von GraphQL- und REST-APIs Aktivitäten von Mitwirkenden und Repository-Statistiken visualisiert.",
    "workshops.title": "Workshops",
    "workshops.tagline": "Ich teile mein Wissen gerne und freue mich darauf, andere beim Lernen und Wachsen zu unterstützen.",
    "workshops.imageAlt": "Foto von einem Workshop",
    "contact.title": "Kontakt",
    "contact.subtitle": "Lass uns in Kontakt treten",
    "contact.name": "Dein Name",
    "contact.email": "Deine E-Mail-Adresse",
    "contact.subject": "Betreff",
    "contact.message": "Nachricht",
    "contact.send": "Nachricht senden",
    "contact.sending": "Deine Nachricht wird gesendet...",
    "contact.sent": "Deine Nachricht wurde erfolgreich gesendet.",
    "contact.sendError": "Deine Nachricht konnte nicht gesendet werden. Bitte versuche es später erneut.",
    "footer.role": "Platform Engineer",
  }
}

const languageSwitch = document.getElementById("language-switch")
const savedLanguage = localStorage.getItem("selected-language")

function applyLanguage(language) {
  const selectedTranslations = translations[language]
  document.documentElement.lang = language
  languageSwitch.value = language
  languageSwitch.setAttribute("aria-label", selectedTranslations["ui.language"])
  themeButton.setAttribute("aria-label", selectedTranslations["theme.label"])
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = selectedTranslations[element.dataset.i18n]
    if (translation !== undefined) element.innerHTML = translation
  })
  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const translation = selectedTranslations[element.dataset.i18nAlt]
    if (translation !== undefined) element.alt = translation
  })
  document.querySelectorAll("[data-i18n-content]").forEach((element) => {
    const translation = selectedTranslations[element.dataset.i18nContent]
    if (translation !== undefined) element.content = translation
  })
  localStorage.setItem("selected-language", language)
}

const initialLanguage = Object.hasOwn(translations, savedLanguage) ? savedLanguage : "en"
applyLanguage(initialLanguage)
languageSwitch.addEventListener("change", (event) => {
  applyLanguage(event.target.value)
})

themeButton.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault()
    themeButton.click()
  }
})

/* Send the contact form without navigating away from the page. */
document.getElementById("contact-form").addEventListener("submit", async function(event) {
  event.preventDefault()

  const form = this
  const language = languageSwitch.value
  const status = document.getElementById("contact-form-status")
  const submitButton = form.querySelector('button[type="submit"]')
  const formData = new FormData(form)
  formData.append("_subject", formData.get("subject"))
  formData.append("_replyto", formData.get("reply_to"))

  status.textContent = translations[language]["contact.sending"]
  submitButton.disabled = true
  form.setAttribute("aria-busy", "true")

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" }
    })

    if (!response.ok) {
      throw new Error(`Formspree returned HTTP ${response.status}`)
    }

    form.reset()
    status.textContent = translations[language]["contact.sent"]
  } catch (error) {
    console.error("Contact form submission failed", error)
    status.textContent = translations[language]["contact.sendError"]
  } finally {
    submitButton.disabled = false
    form.removeAttribute("aria-busy")
  }
})
