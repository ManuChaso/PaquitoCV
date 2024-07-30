import './home.css'

export default function Home(app) {
    const homeContainer = document.createElement('section')
    homeContainer.className = 'home-container'

    const homeSection = document.createElement('div')
    homeSection.className = 'home-section'

    const homeTitle = document.createElement('h2')
    homeTitle.className = 'home-title'
    homeTitle.textContent = 'Ingeniero de software profesional'

    const homeText = document.createElement('p');
    homeText.className = 'home-text';
    homeText.textContent = 'Desarrollador de software senior apasionado y con más de 20 años de experiencia en la creación de aplicaciones web robustas y escalables. Mi experiencia abarca tanto el frontend como el backend, lo que me permite tener una visión integral del ciclo de vida del desarrollo de software.'

    const paquitoImage = document.createElement('img')
    paquitoImage.className = 'paquito-image';
    paquitoImage.src = '../../assets/images/paquito2.png'

    const decorative = document.createElement('div');
    decorative.className = 'decorative'

    homeSection.append(homeTitle, homeText)
    homeContainer.append(homeSection, paquitoImage, decorative)

    app.appendChild(homeContainer)
}