import React from 'react'
import TarjetaSkills from './TarjetaSkills'
import {skills} from '../data/skills.js'

const ListaSkills = () => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 sm:px-8 lg:px-10">
      <h3 className="mb-6 text-3xl font-bold tracking-tight text-text sm:text-4xl">
        Mis habilidades
      </h3>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <TarjetaSkills
            key={skill.id}
            nombre={skill.nombre}
            nivel={skill.nivel}
          />
        ))}
      </div>
    </section>
  )
}

export default ListaSkills