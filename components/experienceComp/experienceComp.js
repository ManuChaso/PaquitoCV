import './experienceComp.css'

export default function experienceComponent(name, description, date){
    return `
        <div class="exp-comp">
            <h4>${name}</h4>
            <p>${description}</p>
            <p>${date}</p>
        </div>
    `
}