import Experience from '../Experience/experience'
import Studies from '../Studies/studies';
import './career.css'

export default function Career(app){

    const experienceComponent = Experience();
    const studiesComponent = Studies();

    const careerContainer = document.createElement('section')
    careerContainer.className = 'career-container'
    careerContainer.id = 'career'

    const buttonsContainer = document.createElement('div')
    buttonsContainer.className = 'buttons-container'

    const experienceButton = document.createElement('button')
    experienceButton.className = 'career-buttons'
    experienceButton.textContent = 'Experiencia'
    const studiesButton = document.createElement('button')
    studiesButton.className = 'career-buttons'
    studiesButton.textContent = 'Estudios'

    experienceButton.addEventListener('click', () => {
        const studies = document.querySelector('.studies-container')
        studies.classList.add('fade-out-studies')

        setTimeout(() => {
            studies.classList.remove('fade-out-studies')
            studies.remove()
            careerContainer.appendChild(experienceComponent);

        }, 500)
    })

    studiesButton.addEventListener('click', () => {
        const experience = document.querySelector('.experience-container')
        experience.classList.add('fade-out-experience')

        setTimeout(() => {
            experience.classList.remove('fade-out-experience');
            experience.remove()
            careerContainer.appendChild(studiesComponent)

        }, 500)

    })


    buttonsContainer.append(experienceButton, studiesButton)

    careerContainer.append(buttonsContainer, experienceComponent)

    app.appendChild(careerContainer)
}