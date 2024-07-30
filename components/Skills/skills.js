import Skill from '../Skill/skill';
import './skills.css'

const skills = [
    {
        skill: "HTML",
        icon: "../../assets/icons/HTML.png",
        progress: 100
    },
    {
        skill: "Javascript",
        icon: "../../assets/icons/js.png",
        progress: 85
    },
    {
        skill: "NodeJs",
        icon: "../../assets/icons/nodeJs.png",
        progress: 65
    },
    {
        skill: "React",
        icon: "../../assets/icons/react.png",
        progress: 90
    },
    {
        skill: "MongoDB",
        icon: "../../assets/icons/mongo.webp",
        progress: 55
    },
    {
        skill: "PHP",
        icon: "../../assets/icons/php.png",
        progress: 95
    },
]

const langs = ["Español", "Ingles", "Chino", "Ruso", "Klignon", "Esperanto", "Lengua de signos"]


export default function Skills(app) {
    const skillsContainer = document.createElement('section');
    skillsContainer.id = 'skills'
    skillsContainer.className = 'skills-container'

    const skillsTitle = document.createElement('h2')
    skillsTitle.textContent = 'Skills'
    skillsTitle.className = 'skills-title'

    const skillsSection = document.createElement('div');
    skillsSection.className = 'skills-section'

    skills.forEach(skill => {
        const skillElement = Skill(skill.skill, skill.icon, skill.progress)
        skillsSection.appendChild(skillElement)
    })
    
    const langsContainer = document.createElement('ul')
    langsContainer.className = 'langs-container';
    
    const langTitle = document.createElement('h2');
    langTitle.textContent = 'Idiomas'

    const langsSection = document.createElement('div');
    langsSection.className = 'langs-section'

    langs.forEach(lang => {
        const langElement = document.createElement('li')
        langElement.textContent = lang;

        langsSection.appendChild(langElement)
    })

    langsContainer.append(langTitle, langsSection)

    const aboutText = document.createElement('p');
    aboutText.textContent = 'Soy un líder natural con experiencia en la gestión de equipos multidisciplinarios, fomentando un ambiente colaborativo y promoviendo la mejora continua. Poseo habilidades excepcionales de comunicación, permitiendo la transmisión de ideas técnicas complejas a audiencias no técnicas de manera clara y concisa. Además, mi enfoque analítico y meticuloso me permite identificar y resolver problemas técnicos de manera eficiente, asegurando el éxito de los proyectos.'
    aboutText.className = 'about-text'

    skillsContainer.append(skillsTitle, skillsSection, langsContainer, aboutText)
    app.appendChild(skillsContainer)
}