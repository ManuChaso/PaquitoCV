import experienceComponent from '../experienceComp/experienceComp'
import './experience.css'

export default function Experience(){
    const experienceContainer = document.createElement('article')
    experienceContainer.className = 'experience-container career-section'

    const experienceTitle = document.createElement('h2')
    experienceTitle.textContent = 'Experiencia'

    experienceContainer.appendChild(experienceTitle)

    experienceContainer.innerHTML += experienceComponent('Burguer King', 'Mi trabajo principal era la gestión de pedidos', '07/10/1994 | 10/04/1994')

    experienceContainer.innerHTML += experienceComponent('Profesor de mecanografia', 'Impartia clases de mecanografia en la escuela de verano de mi puebloS', '07/10/1995 | 09/04/1995')
    
    experienceContainer.innerHTML += experienceComponent('Oracle', 'Me encargaba de la seguridad de los sistemas internos de la empresa', '05/10/1995 | 08/04/2000')
    
    experienceContainer.innerHTML += experienceComponent('ElevenPaths', 'Formaba parte del red team en el equipo de pentesting', '05/10/2005 | 04/04/2012')
    
    experienceContainer.innerHTML += experienceComponent('Riot Games', 'Trabajé en el sistema de anticheats para el League of Legends', '05/10/2005 | 04/04/2012')
    
    return experienceContainer
}