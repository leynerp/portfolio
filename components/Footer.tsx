import React from 'react'
const currentYear = new Date().getFullYear()

export default function Footer () {
  return (
    <footer
      className='mx-auto mb-10 mt-20  w-full  md:max-w-[750px]'
    >
      <span className='text-sm text-red-200 sm:text-center'>© {currentYear} leyner . Todos los derechos reservados </span>
    </footer>

  )
}
