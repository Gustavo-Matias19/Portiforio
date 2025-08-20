// Dados dos seus projetos
const projects = [
    {
        title: 'SpotiFEI',
        description: 'O Spotifei é uma plataforma para compartilhamento de informações sobre músicas. O projeto simula funcionalidades similares ao Spotify, com foco no cadastro, busca e gerenciamento de músicas, aplicando conceitos de orientação a objetos e persistência de dados com banco relacional.',
        link: 'https://github.com/Gustavo-Matias19/Spotifei'
    },
    {
        title: 'Site Pessoal (Portifório)',
        description: 'Um blog responsivo desenvolvido com React',
        link: 'https://github.com/Gustavo-Matias19/Portiforio'
    }
];

// Dados do resumo profissional
const about = {
    bio: " Estudante de Ciência da Computação, com conhecimentos em Python e frameworks/bibliotecas como Django e Selenium, além de fundamentos de análise de dados. Busco oportunidade para aplicar e desenvolver habilidades técnicas, contribuindo para a melhoria de processos por meio da tecnologia.",
    skills: ["Python", "Django", "Selenium", "SQL", "Git"]
};

// Dados da sua formação acadêmica
const education = [
    {
        course: "Ensino Médio",
        institution: "Colégio Leonardo da Vinci",
        period: "Conclusão: 2023"
    },
    {
        course: "Ciências da Computação",
        institution: "FUNDAÇÃO EDUCACIONAL INACIANA PADRE SABOIA DE MEDEIROS-(FEI)",
        period: "Ano de ínicio: 02/2024 | Ano de Conclusão: 12/2027"
    }
];

// Dados dos seus certificados
const certificates = [
    {
        name: 'Curso de Python 3 completo: PySide6, Django, Selenium, Regexp, Testes, TDD, POO, Design Patterns GoF, algoritmos e programação',
        platform: 'Udemy',
        link: 'https://www.udemy.com/course/python-3-do-zero-ao-avancado/'
    },
    {
        name: 'SQL para Análise de Dados: Do básico ao avançado',
        platform: 'Udemy',
        link: 'https://www.udemy.com/course/sql-para-analise-de-dados/?couponCode=MT180825G1'
    }
];

// --- Funções para Renderizar as Seções ---

function renderAbout() {
    const aboutContainer = document.getElementById('about-container');
    const skillsListHtml = about.skills.map(skill => `<li class="skill-item">${skill}</li>`).join('');
    
    aboutContainer.innerHTML = `
        <p>${about.bio}</p>
        <ul class="skills-list">${skillsListHtml}</ul>
    `;
}

function renderEducation() {
    const educationContainer = document.getElementById('education-container');
    
    education.forEach(item => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';
        
        educationItem.innerHTML = `
            <h3>${item.course}</h3>
            <p>${item.institution} | ${item.period}</p>
        `;
        
        educationContainer.appendChild(educationItem);
    });
}

function renderProjects() {
    const projectContainer = document.getElementById('project-container');
    
    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';
        
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank" rel="noopener noreferrer">
                Ver Projeto
            </a>
        `;
        
        projectContainer.appendChild(projectItem);
    });
}

function renderCertificates() {
    const certificateContainer = document.getElementById('certificate-container');
    
    certificates.forEach(certificate => {
        const certificateItem = document.createElement('div');
        certificateItem.className = 'certificate-item';
        
        certificateItem.innerHTML = `
            <h3>${certificate.name}</h3>
            <p>Plataforma: ${certificate.platform}</p>
            <a href="${certificate.link}" target="_blank" rel="noopener noreferrer">
                Ver Certificado
            </a>
        `;
        
        certificateContainer.appendChild(certificateItem);
    });
}

// --- Chamada das Funções ---

// Define o ano atual no rodapé
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderAbout();
    renderEducation();
    renderProjects();
    renderCertificates();
});