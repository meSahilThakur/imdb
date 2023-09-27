import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className=' min-w-full flex justify-center gap-5'>
        <NavbarItem title={"Trending"} param={"fetchTrending"} />
        <NavbarItem title={"Top Rated"} param={"fetchTopRated"} />
    </div>
  )
}

export default Navbar