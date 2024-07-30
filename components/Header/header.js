import './header.css'


export default function Header(app){
    const headerContainer = document.createElement('header')
    headerContainer.className = 'header'

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'Paquito Cabrera'
    headerTitle.className = 'header-title'

    const navLinks = document.createElement('ul')
    navLinks.className = 'header-nav';

    navLinks.innerHTML = `
        <li><a href="#home">Home</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#career">Trayectoria</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
    `

    headerContainer.append(headerTitle, navLinks)
    app.appendChild(headerContainer)
}