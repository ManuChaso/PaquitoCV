import Career from './components/Career/career'
import Header from './components/Header/header'
import Home from './components/Home/home'
import Skills from './components/Skills/skills'
import './style.css'

const app = document.querySelector('#app')

Header(app)
Home(app)
Skills(app)
Career(app)