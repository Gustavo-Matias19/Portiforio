// ============================================================
//  DADOS — baseados no currículo atualizado de Gustavo Matias
// ============================================================

const about = {
    bio: "Estudante de Ciência da Computação com Python em nível intermediário/avançado e Excel avançado, com conhecimentos em SQL. Possuo experiência prática com automação de planilhas em Excel utilizando VBA e automação de processos com n8n. Tenho interesse em desenvolvimento de sistemas, análise de dados, automação de processos e finanças, buscando uma oportunidade de estágio para aplicar e desenvolver minhas habilidades técnicas.",
    skills: ["Python", "n8n", "Excel Avançado", "VBA", "SQL", "Git / GitHub", "Banco de Dados Relacional", "POO"]
};

const experience = [
    {
        title: "Embalador",
        company: "JMD",
        period: "Ago/2025 — Atualmente",
        description: "Atuação no empacotamento e organização de produtos com foco em eficiência e padronização dos processos. Utilização frequente do Microsoft Excel para controle e organização de dados internos. Desenvolvimento de planilhas automatizadas e aplicação de VBA para controle do fluxo de produtos e apoio às rotinas operacionais."
    }
];

const education = [
    {
        course: "Ciência da Computação",
        institution: "FEI — Fundação Educacional Inaciana Padre Sabóia de Medeiros",
        period: "Fev/2024 — Dez/2027 (previsão)"
    },
    {
        course: "Ensino Médio",
        institution: "Colégio Leonardo da Vinci",
        period: "Conclusão: 2023"
    }
];

const projects = [
    {
        icon: "🤖",
        title: "Automação Financeira com n8n",
        description: "Workflows no n8n para automação de processos financeiros: coleta e consolidação de dados, alertas automáticos e integração entre planilhas e APIs. Projeto focado em lógica de automação em contextos reais do setor financeiro.",
        link: "https://github.com/Gustavo-Matias19",
        linkText: "Ver no GitHub"
    },
    {
        icon: "📦",
        title: "Controle de Fluxo de Produtos — JMD",
        description: "Solução em Excel com VBA para controle de entrada e saída de produtos. Automatiza registros, validações e organização do fluxo de materiais, contribuindo para maior controle operacional e redução de erros manuais.",
        link: "https://github.com/Gustavo-Matias19",
        linkText: "Ver no GitHub"
    },
    {
        icon: "🎵",
        title: "SpotiFEI",
        description: "Sistema para cadastro, busca e gerenciamento de músicas simulando funcionalidades de plataformas de streaming. Aplicação de POO, persistência de dados e banco de dados relacional.",
        link: "https://github.com/Gustavo-Matias19/Spotifei",
        linkText: "Ver no GitHub"
    },
    {
        icon: "🌐",
        title: "Site Pessoal (Portfólio)",
        description: "Blog e portfólio pessoal desenvolvido com JavaScript puro, HTML e CSS. Apresenta projetos, habilidades e trajetória profissional de forma limpa e responsiva.",
        link: "https://gustavomatias-sobre.vercel.app/",
        linkText: "Acessar site"
    }
];

const certificates = [
    {
        name: "Curso Avançado de Excel",
        platform: "Bradesco",
        link: "https://www.ev.org.br/"
    },
    {
        name: "Curso de Python 3 Completo: Django, Regexp, Testes, POO, Design Patterns GoF e mais",
        platform: "Udemy",
        link: "https://www.udemy.com/course/python-3-do-zero-ao-avancado/"
    },
    {
        name: "SQL para Análise de Dados: Do básico ao avançado",
        platform: "Udemy",
        link: "https://www.udemy.com/course/sql-para-analise-de-dados/"
    }
];

// ============================================================
//  RENDER FUNCTIONS
// ============================================================

function renderAbout() {
    document.getElementById("about-bio").textContent = about.bio;

    const container = document.getElementById("skills-container");
    about.skills.forEach(skill => {
        const li = document.createElement("li");
        li.className = "skill-tag";
        li.textContent = skill;
        container.appendChild(li);
    });
}

function renderExperience() {
    const container = document.getElementById("experience-container");
    experience.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <div class="timeline-header">
                <span class="timeline-title">${item.title}</span>
                <span class="timeline-period">${item.period}</span>
            </div>
            <div class="timeline-sub">${item.company}</div>
            <p class="timeline-desc">${item.description}</p>
        `;
        container.appendChild(div);
    });
}

function renderEducation() {
    const container = document.getElementById("education-container");
    education.forEach(item => {
        const div = document.createElement("div");
        div.className = "timeline-item";
        div.innerHTML = `
            <div class="timeline-header">
                <span class="timeline-title">${item.course}</span>
                <span class="timeline-period">${item.period}</span>
            </div>
            <div class="timeline-sub">${item.institution}</div>
        `;
        container.appendChild(div);
    });
}

function renderProjects() {
    const container = document.getElementById("project-container");
    projects.forEach(project => {
        const div = document.createElement("div");
        div.className = "project-card";
        div.innerHTML = `
            <div class="project-icon">${project.icon}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a class="project-link" href="${project.link}" target="_blank" rel="noopener noreferrer">
                ${project.linkText} <i class="fas fa-arrow-right"></i>
            </a>
        `;
        container.appendChild(div);
    });
}

function renderCertificates() {
    const container = document.getElementById("certificate-container");
    certificates.forEach(cert => {
        const a = document.createElement("a");
        a.className = "cert-card";
        a.href = cert.link;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.innerHTML = `
            <div class="cert-icon"><i class="fas fa-certificate"></i></div>
            <div>
                <h3>${cert.name}</h3>
                <span class="cert-platform">${cert.platform}</span>
            </div>
            <i class="fas fa-arrow-right cert-arrow"></i>
        `;
        container.appendChild(a);
    });
}

// ============================================================
//  SCROLL SPY — highlight active nav link
// ============================================================

function initScrollSpy() {
    const sections = document.querySelectorAll("section[id], header[id]");
    const navLinks = document.querySelectorAll(".sidenav a");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    }, { threshold: 0.35 });

    sections.forEach(s => observer.observe(s));
}

// ============================================================
//  SECTION REVEAL ON SCROLL
// ============================================================

function initReveal() {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(s => observer.observe(s));
}

// ============================================================
//  INIT
// ============================================================

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("current-year").textContent = new Date().getFullYear();
    renderAbout();
    renderExperience();
    renderEducation();
    renderProjects();
    renderCertificates();
    initScrollSpy();
    initReveal();
});