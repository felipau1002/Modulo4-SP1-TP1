import React from 'react'

const TarjetaSkills = ({nombre, nivel}) => {
  return (
    <article className="group rounded-2xl border border-border bg-card p-5 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3>{nombre}</h3>
      </div>

      <div className="mb-4 flex items-center justify-between gap-3">
        <p>{nivel}</p>
      </div>
    </article>
  )
}

export default TarjetaSkills