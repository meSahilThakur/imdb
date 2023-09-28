import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='p-4 min-w-full flex justify-center gap-5 dark:bg-gray-600 bg-gray-200'>
        <NavbarItem title={"Trending"} param={"fetchTrending"} />
        <NavbarItem title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  )
}

export default Navbar