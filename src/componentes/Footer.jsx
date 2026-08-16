import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:px-8 lg:px-10">
        <p className="text-sm text-text-soft">
          © 2026 Hecho con React por <span className="font-semibold text-text">Felipe</span>.
        </p>
      </div>
    </footer>
  )
}

export default Footer