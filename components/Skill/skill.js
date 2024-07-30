import './skill.css'

export default function Skill(text, image, progress) {
    const skillContainer = document.createElement('div')
    skillContainer.className = 'skill-container'

    const skillIcon = document.createElement('img');
    skillIcon.className = 'skill-icon'
    skillIcon.src = image

    const skillName = document.createElement('h4')
    skillName.className = 'skill-name'
    skillName.textContent = text

    const percentageContainer = document.createElement('div')
    percentageContainer.className = 'percentage-container';

    const percentage = document.createElement('div')
    percentage.className = 'percentage'
    percentage.style.width = `${progress}%`

    const percentageText = document.createElement('p')
    percentageText.className = 'percentage-text'
    percentageText.textContent = `${progress}%`

    percentage.append(percentageText)
    percentageContainer.appendChild(percentage)


    skillContainer.append(skillIcon, skillName, percentageContainer)
    return skillContainer
}