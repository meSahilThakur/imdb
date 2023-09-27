import Link from 'next/link'
import React from 'react'

const NavbarItem = ({title, param}) => {
  return (
    <div>
        <Link className='m-4 cursor-pointer text-amber-500 hover:text-amber-700' href={`/?genre=${param}`}>{title}</Link>
    </div>
  )
}

export default NavbarItem