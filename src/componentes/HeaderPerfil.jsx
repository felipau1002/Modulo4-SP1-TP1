import React from 'react'

const HeaderPerfil = ({ nombre, frase }) => {
  const handlerAlerta = () => {
    alert('Presionaste el botón "Sobre Mi"')
  }

  return (
    <header className="relative overflow-hidden bg-linear-to-br from-surface-soft via-surface to-bg">
      <div className="mx-auto max-w-5xl px-6 py-12 sm:px-8 lg:px-10">
        <div className="rounded-4xl border border-border bg-surface/80 p-8 shadow-soft backdrop-blur-sm md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="space-y-5">

              <div className="space-y-3">
                <h1 className="text-4xl font-bold tracking-tight text-text sm:text-5xl">
                  Hola, soy <span className="text-primary">{nombre}</span>
                </h1>

                <p className="max-w-xl text-lg leading-relaxed text-text-soft">
                  {frase}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={handlerAlerta}
              className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition-transform duration-200 hover:-translate-y-0.5 hover:bg-primary-strong"
            >
              Sobre Mi
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeaderPerfil