import { useState } from 'react'
import './App.css'
import HeaderPerfil from './componentes/HeaderPerfil'
import ListaSkills from './componentes/ListaSkills'
import Footer from './componentes/Footer'


function App() {
  return (
    <>
      <HeaderPerfil nombre="Felipe" frase="Desarrollador Junior apasionado por aprender y mejorar constantemente mis habilidades." />

      <ListaSkills />

      <Footer />
    </>
  )
}

export default App
