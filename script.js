const projects = [
  {
    title: "Makeup App Home Page",
    type: "mobile",
    label: "Mobile App UI/UX",
    year: "Published July 20, 2023",
    image: "assets/projects/behance-makeup-app.webp",
    url: "https://www.behance.net/gallery/175763839/Makeup-App-Home-Page",
    stats: "1 appreciation - 18 views on Behance",
    tags: ["home page", "UI/UX", "Figma", "ui design", "Mobile app", "ux/ui", "Website", "MAKEUP APP DESIGN"],
    summary: "A polished makeup app home page concept focused on beauty product discovery, clean mobile navigation, and a visually appealing Figma interface for a modern lifestyle app.",
  },
  {
    title: "Ekuate Webs Design",
    type: "web",
    label: "Website UI/UX",
    year: "Published July 20, 2023",
    image: "assets/projects/behance-ekuate-webs.webp",
    url: "https://www.behance.net/gallery/175763613/Ekuate-Webs-Design",
    stats: "6 views on Behance",
    tags: ["websitedesign", "Webdesign", "UI/UX", "landing page", "user interface", "Mobile app", "application"],
    summary: "Website and landing page interface design for Ekuate, combining responsive web layout thinking, UI clarity, and product-focused visual hierarchy.",
  },
  {
    title: "CowBoy",
    type: "web",
    label: "Landing Page UI",
    year: "Published July 20, 2023",
    image: "assets/projects/behance-cowboy.webp",
    url: "https://www.behance.net/gallery/175763533/CowBoy",
    stats: "11 views on Behance",
    tags: ["Bicycle", "UI UX design", "landing page", "Figma", "user interface", "Mobile app", "Website", "design"],
    summary: "A bicycle-focused landing page and interface concept built around strong product presentation, user-friendly structure, and modern UI/UX design patterns.",
  },
  {
    title: "Case Study",
    type: "web",
    label: "UI/UX Case Study",
    year: "Published July 20, 2023",
    image: "assets/projects/behance-case-study.webp",
    url: "https://www.behance.net/gallery/175763433/Case-Study",
    stats: "2 views on Behance",
    tags: ["Website Design", "UI/UX", "Figma", "ui design", "user interface", "Mobile app", "user experience", "landing page"],
    summary: "A UI/UX case study covering website and mobile interface direction, with attention to user experience, landing page clarity, and Figma-based screen design.",
  },
  {
    title: "Mental Health App",
    type: "mobile",
    label: "Health App UI/UX",
    year: "Published July 5, 2023",
    image: "assets/projects/behance-mental-health-app.webp",
    url: "https://www.behance.net/gallery/174597253/Mental-Health-App",
    stats: "1 appreciation - 8 views on Behance",
    tags: ["mental health", "Health App Design", "UI/UX", "Figma", "Mobile app", "user interface", "ui design", "ux"],
    summary: "A mental health mobile app UI concept designed for calm interaction, accessible navigation, supportive user flows, and a clear wellness-focused experience.",
  },
  {
    title: "Learning App Design",
    type: "mobile",
    label: "Education App UI/UX",
    year: "Published May 31, 2023",
    image: "assets/projects/behance-learning-app.webp",
    url: "https://www.behance.net/gallery/171946217/Learning-App-Design",
    stats: "1 appreciation - 7 views on Behance",
    tags: ["UI UX design", "learning app", "UI/UX", "ui design", "user interface", "Mobile app", "UX design", "Figma"],
    summary: "An education and learning app interface designed around simple navigation, engaging mobile screens, and a clean user experience for students or learners.",
  },
  {
    title: "TODO Task App Design",
    type: "mobile",
    label: "Productivity App UI/UX",
    year: "Published May 31, 2023",
    image: "assets/projects/behance-todo-task-app.webp",
    url: "https://www.behance.net/gallery/171945237/TODO-Task-App-Design",
    stats: "2 appreciations - 20 views on Behance",
    tags: ["UI UX design", "user interface", "ui design", "Mobile app", "UI/UX", "Figma", "app design", "user experience"],
    summary: "A task management app UI design focused on productivity, readable task flows, practical mobile interaction, and a clean Figma interface system.",
  },
  {
    title: "Mulsim App Design",
    type: "mobile",
    label: "Mobile App UI/UX",
    year: "Published May 31, 2023",
    image: "assets/projects/behance-mulsim-app.webp",
    url: "https://www.behance.net/gallery/171944951/Mulsim-App-Design",
    stats: "10 views on Behance",
    tags: ["ui ux", "UI UX design", "Figma", "ui design", "user interface", "Mobile app", "user experience", "UI/UX"],
    summary: "A mobile app UI/UX concept with Figma interface design, structured user experience, and clean mobile screens for a focused app workflow.",
  },
  {
    title: "Educational Website Logo Design",
    type: "logo",
    label: "Client Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-01.webp",
    stats: "Brand identity project",
    tags: ["logo", "education", "website logo", "branding", "graphic design"],
    summary: "Logo design for an educational website with a clean, memorable visual identity built for online learning and digital brand recognition.",
  },
  {
    title: "Construction Logo",
    type: "logo",
    label: "Client Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-02.webp",
    stats: "Brand mockup project",
    tags: ["logo", "construction", "brand identity", "mockup", "graphic design"],
    summary: "Construction brand logo presented in a realistic mockup, designed for strong recognition, trust, and practical business use.",
  },
  {
    title: "SHAW Graphics",
    type: "logo",
    label: "Brand Identity",
    year: "Previous Portfolio",
    image: "assets/projects/project-03.webp",
    stats: "Identity concept",
    tags: ["brand identity", "logo", "typography", "graphic design", "company branding"],
    summary: "Brand and company identity concept with confident typography, a sharp visual direction, and flexible use across business touchpoints.",
  },
  {
    title: "Bike Company Logo Design",
    type: "logo",
    label: "Client Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-04.webp",
    stats: "Commercial logo project",
    tags: ["bike", "logo design", "branding", "company logo", "graphic design"],
    summary: "Logo design for a bike company, built for brand recognition, bold presentation, and flexible usage across digital and print channels.",
  },
  {
    title: "Website Logo Design",
    type: "logo",
    label: "Web Branding",
    year: "Previous Portfolio",
    image: "assets/projects/project-05.webp",
    stats: "Digital branding project",
    tags: ["website logo", "logo", "web branding", "digital brand", "graphic design"],
    summary: "Website-focused logo design for a digital brand or online service, created to feel simple, modern, and recognizable at small sizes.",
  },
  {
    title: "Signature Logo Design",
    type: "logo",
    label: "Client Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-06.webp",
    stats: "Signature brand mark",
    tags: ["signature logo", "personal branding", "logo design", "identity", "graphic design"],
    summary: "Elegant signature-style logo concept for personal or business branding, balancing a premium handwritten feel with clean presentation.",
  },
  {
    title: "V+M Text Logo Design",
    type: "logo",
    label: "Text Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-07.webp",
    stats: "Lettermark concept",
    tags: ["lettermark", "text logo", "initials", "V M", "minimal logo"],
    summary: "Lettermark logo exploration using V and M initials with a minimal identity style suitable for a clean modern brand system.",
  },
  {
    title: "SuperMarket Logo Design",
    type: "logo",
    label: "Retail Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-08.webp",
    stats: "Retail brand concept",
    tags: ["supermarket", "retail logo", "logo design", "branding", "graphic design"],
    summary: "Retail logo concept for a supermarket brand with practical commercial usage, friendly recognition, and clear visual communication.",
  },
  {
    title: "D Logo Design",
    type: "logo",
    label: "Lettermark",
    year: "Previous Portfolio",
    image: "assets/projects/project-09.webp",
    stats: "Minimal logo concept",
    tags: ["D logo", "lettermark", "minimal logo", "brand mark", "logo design"],
    summary: "Minimal lettermark logo focused on a bold D-shaped visual identity with simple structure and strong brand mark potential.",
  },
  {
    title: "Minimalistic Logo Design",
    type: "logo",
    label: "Minimal Logo",
    year: "Previous Portfolio",
    image: "assets/projects/project-10.webp",
    stats: "Minimal identity project",
    tags: ["minimal logo", "logo design", "branding", "clean design", "graphic design"],
    summary: "Minimal logo exploration with clean forms, simple brand communication, and a modern identity direction for digital or print use.",
  },
  {
    title: "Vector Art Work",
    type: "vector",
    label: "Vector Art",
    year: "Previous Portfolio",
    image: "assets/projects/project-11.webp",
    stats: "Illustration project",
    tags: ["vector art", "illustration", "digital artwork", "graphic design", "scalable art"],
    summary: "Custom vector artwork created for a client project with sharp scalable illustration, clean shapes, and polished digital composition.",
  },
  {
    title: "Vector Art Work Concept",
    type: "vector",
    label: "Vector Art",
    year: "Previous Portfolio",
    image: "assets/projects/project-12.webp",
    stats: "Creative illustration",
    tags: ["vector art", "illustration", "digital composition", "artwork", "graphic design"],
    summary: "Self-directed vector artwork showcasing illustration skill, digital composition, and expressive visual design in a scalable format.",
  },
  {
    title: "Professional Card Design",
    type: "print",
    label: "Business Card",
    year: "Previous Portfolio",
    image: "assets/projects/project-13.webp",
    stats: "Print identity project",
    tags: ["business card", "print design", "stationery", "brand identity", "graphic design"],
    summary: "Professional card design mockup for client branding and printed identity, created for a clean, credible business presentation.",
  },
  {
    title: "Card Design",
    type: "print",
    label: "Print Design",
    year: "Previous Portfolio",
    image: "assets/projects/project-14.webp",
    stats: "Business card project",
    tags: ["card design", "business card", "print design", "stationery", "graphic design"],
    summary: "Business card and print identity design for professional brand presentation, with practical layout and clear contact hierarchy.",
  },
  {
    title: "Web/UI/UX Design",
    type: "uiux",
    label: "UI/UX",
    year: "Previous Portfolio",
    image: "assets/projects/project-15.webp",
    stats: "Service area preview",
    tags: ["UI/UX", "web design", "prototype", "front-end design", "interface design"],
    summary: "Front-end design, prototype design, UI/UX planning, and clean user interface direction for responsive websites and digital products.",
  },
  {
    title: "Software Development",
    type: "software",
    label: "Software",
    year: "Previous Portfolio",
    image: "assets/projects/project-16.webp",
    stats: "Development service preview",
    tags: ["software development", "web development", "frontend", "responsive interface", "application design"],
    summary: "Software and web development work using modern programming skills, responsive interface planning, and user-focused application design.",
  },
];

const processSteps = {
  1: {
    title: "UI/UX Projects",
    body: "Mobile applications, web applications, landing pages, dashboard interfaces, SaaS platforms, and user flows designed around clarity and usability.",
    outcome: "Focus: research, structure, wireframes, prototypes, responsive UI, and design systems.",
  },
  2: {
    title: "Graphic Design Projects",
    body: "Branding, logos, social media campaigns, corporate identity, marketing materials, and presentation decks built to communicate with impact.",
    outcome: "Focus: visual identity, creative direction, typography, composition, and brand consistency.",
  },
  3: {
    title: "Software Projects",
    body: "Web applications, frontend development, interactive systems, product interfaces, and digital platforms engineered for real users.",
    outcome: "Focus: UI implementation, performance optimization, application design, and scalable planning.",
  },
};

const root = document.documentElement;
const projectGrid = document.querySelector("#projectGrid");
const projectSearch = document.querySelector("#projectSearch");
const projectCount = document.querySelector("#projectCount");
const filters = document.querySelectorAll(".filter");
const themeToggle = document.querySelector("#themeToggle");
const menuButton = document.querySelector("#menuButton");
const mobilePanel = document.querySelector("#mobilePanel");
const processCard = document.querySelector("#processCard");
const processButtons = document.querySelectorAll(".timeline-item");
const form = document.querySelector("#contactForm");
const status = document.querySelector("#formStatus");
const cursorLight = document.querySelector(".cursor-light");
const projectModal = document.querySelector("#projectModal");
const modalImage = document.querySelector("#modalImage");
const modalCategory = document.querySelector("#modalCategory");
const modalTitle = document.querySelector("#modalTitle");
const modalSummary = document.querySelector("#modalSummary");
const modalYear = document.querySelector("#modalYear");
const modalLink = document.querySelector("#modalLink");
const minimumDetailsLength = 50;
let cursorFrame = null;
let cursorX = 0;
let cursorY = 0;

function validateProjectDetails(details) {
  const normalized = details.replace(/\s+/g, " ").trim();
  const words = normalized.match(/[a-zA-Z]{2,}/g) || [];
  const hasEnoughCharacters = normalized.length >= minimumDetailsLength;
  const hasEnoughWords = words.length >= 8;
  const looksRepeated = /(.)\1{12,}/.test(normalized);
  const looksPlaceholder = /^(test|demo|sample|asdf|qwerty|hello|none|n\/a)$/i.test(normalized);

  return hasEnoughCharacters && hasEnoughWords && !looksRepeated && !looksPlaceholder;
}

function showFormStatus(message, type = "success") {
  status.textContent = message;
  status.classList.toggle("error", type === "error");
}

let activeProjectFilter = "all";

function renderProjects(filter = activeProjectFilter) {
  activeProjectFilter = filter;
  const searchTerm = projectSearch.value.trim().toLowerCase();
  const visibleProjects = projects.filter((project) => {
    const matchesFilter = filter === "all" || filter === "uiux" || project.type === filter;
    const searchableText = `${project.title} ${project.label} ${project.summary} ${project.tags.join(" ")}`.toLowerCase();
    const matchesSearch = !searchTerm || searchableText.includes(searchTerm);

    return matchesFilter && matchesSearch;
  });

  projectCount.textContent = `${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} found`;

  projectGrid.innerHTML = visibleProjects
    .map(
      (project) => {
        const projectIndex = projects.indexOf(project);

        return `
        <article class="project-card" tabindex="0" role="button" data-project-index="${projectIndex}" aria-label="Open ${project.title} project details">
          <div class="project-image">
            <img src="${project.image}" alt="${project.title} project preview" loading="lazy" decoding="async" width="720" height="540">
            <span class="view-badge">View details</span>
          </div>
          <div class="project-content">
            <div class="project-meta">
              <span>${project.label}</span>
              <span>${project.stats}</span>
            </div>
            <h3>${project.title}</h3>
            <p>${project.summary}</p>
            ${project.url ? `<a class="project-link" href="${project.url}" target="_blank" rel="noopener noreferrer" aria-label="View ${project.title} on Behance">View on Behance</a>` : ""}
          </div>
        </article>
      `;
      },
    )
    .join("") || `<p class="empty-state">No projects found. Try another category or search term.</p>`;
}

function openProjectModal(project) {
  modalImage.src = project.image;
  modalImage.alt = `${project.title} full project preview`;
  modalCategory.textContent = project.label;
  modalTitle.textContent = project.title;
  modalSummary.textContent = project.summary;
  modalYear.textContent = `${project.year} - ${project.stats}`;
  modalLink.hidden = !project.url;
  if (project.url) {
    modalLink.href = project.url;
    modalLink.textContent = "View full project on Behance";
  } else {
    modalLink.removeAttribute("href");
    modalLink.textContent = "";
  }
  projectModal.classList.add("open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  projectModal.querySelector(".modal-close").focus();
}

function closeProjectModal() {
  projectModal.classList.remove("open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  modalImage.removeAttribute("src");
}

function renderProcess(step = "1") {
  const detail = processSteps[step];
  processCard.innerHTML = `
    <h3>${detail.title}</h3>
    <p>${detail.body}</p>
    <p><strong>${detail.outcome}</strong></p>
  `;
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

projectSearch.addEventListener("input", () => {
  renderProjects();
});

projectGrid.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    return;
  }

  const card = event.target.closest(".project-card");
  if (!card) return;

  openProjectModal(projects[Number(card.dataset.projectIndex)]);
});

projectGrid.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;

  const card = event.target.closest(".project-card");
  if (!card) return;

  event.preventDefault();
  openProjectModal(projects[Number(card.dataset.projectIndex)]);
});

projectModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-modal-close]")) {
    closeProjectModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && projectModal.classList.contains("open")) {
    closeProjectModal();
  }
});

processButtons.forEach((button) => {
  button.addEventListener("click", () => {
    processButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProcess(button.dataset.step);
  });
});

themeToggle.addEventListener("click", () => {
  root.classList.toggle("dark");
  localStorage.setItem("portfolio-theme", root.classList.contains("dark") ? "dark" : "light");
});

menuButton.addEventListener("click", () => {
  const isOpen = mobilePanel.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

mobilePanel.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobilePanel.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get("name").toString().trim();
  const projectType = data.get("projectType");
  const details = data.get("details").toString().trim();
  const service =
    {
      uiux: "a UI/UX design project with user flows, wireframes, and polished interfaces",
      graphic: "a graphic design project with strong visuals and brand communication",
      software: "a software engineering project with modern frontend execution",
    }[projectType] || "a digital experience project";

  if (!validateProjectDetails(details)) {
    showFormStatus(
      "Please provide proper project details: at least 50 characters, clear words, and a real project description.",
      "error",
    );
    form.elements.details.focus();
    return;
  }

  showFormStatus(`${name || "Thanks"}: your inquiry preview is ready for ${service}.`);
  form.reset();
});

if (window.matchMedia("(pointer: fine)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  window.addEventListener("mousemove", (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;

    if (cursorFrame) return;

    cursorFrame = requestAnimationFrame(() => {
      cursorLight.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      cursorLight.style.opacity = "1";
      cursorFrame = null;
    });
  });
}

const storedTheme = localStorage.getItem("portfolio-theme");
if (storedTheme === "dark") {
  root.classList.add("dark");
}

renderProjects();
renderProcess();
