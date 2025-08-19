// Dados dos seus projetos
const projects = [
    {
        title: 'SpotiFEI',
        description: 'O Spotifei é uma plataforma para compartilhamento de informações sobre músicas. O projeto simula funcionalidades similares ao Spotify, com foco no cadastro, busca e gerenciamento de músicas, aplicando conceitos de orientação a objetos e persistência de dados com banco relacional.',
        link: 'https://github.com/Gustavo-Matias19/Spotifei'
    },
    {
        title: 'API de Clima',
        description: 'Uma API em Node.js que retorna a previsão do tempo de uma cidade.',
        link: 'https://github.com/seu-usuario/api-clima'
    },
    {
        title: 'Site Pessoal (Portifório)',
        description: 'Um blog responsivo desenvolvido com React',
        link: 'https://github.com/Gustavo-Matias19/Portiforio'
    }
];

// Dados do resumo profissional
const about = {
    bio: "Estudante de Ciência da Computação, com conhecimentos em Python (incluindo Frameworks) e fundamentos de análise de dados. Busco oportunidade para aplicar e desenvolver habilidades técnicas, contribuindo para a melhoria de processos por meio da tecnologia.",
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
        name: 'React: O Guia Completo',
        platform: 'Udemy',
        link: 'https://www.udemy.com/certificate/seu-certificado-react/'
    },
    {
        name: 'JavaScript Avançado',
        platform: 'Alura',
        link: 'https://www.alura.com.br/certificate/seu-certificado-javascript/'
    },
    {
        name: 'Curso de UI/UX Design',
        platform: 'Coursera',
        link: 'https://www.coursera.org/verify/seu-certificado-ui-ux/'
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