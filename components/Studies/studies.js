import experienceComponent from '../experienceComp/experienceComp'
import './studies.css'

export default function Studies(){
    const studiesContainer = document.createElement('article')
    studiesContainer.className = 'studies-container career-section'

    const studiesTitle = document.createElement('h2')
    studiesTitle.textContent = 'Estudios'

    studiesContainer.appendChild(studiesTitle)
    
    studiesContainer.innerHTML += experienceComponent('Autodidacta', 'Estudie por mi cuenta porque soy un fiera', '07/10/1982 | ')

    studiesContainer.innerHTML += experienceComponent('Udemy', 'Curso de ciber seguridad y hacking', '01/10/2019 | 03/04/2020')
    
    studiesContainer.innerHTML += experienceComponent('ThePower', 'Master en pentesting y scripting con Python', '01/01/2023 | 08/04/2024')

    const diploma = document.createElement('img')
    diploma.className = 'diploma'
    diploma.src = '../../assets/images/diploma.jpg'

    studiesContainer.appendChild(diploma)
    

    return studiesContainer
}