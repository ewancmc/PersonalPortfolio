import React from 'react';
import { NavBar } from "./NavBar";

export const Header = () => {
  return <header className="h-20 flex bg-black items-center fixed top-0 w-full text-white z-10">
    <div className="container mx-auto h-full flex items-center justify-center lg:justify-between">
      <div className='w-1/4 hidden lg:block font-black'>Ewan Clarke-McIntyre</div>
      <div className='w-1/4 lg:hidden font-black'>Ewan C-Mc</div>
      <NavBar/>
    </div>
  </header>
}
