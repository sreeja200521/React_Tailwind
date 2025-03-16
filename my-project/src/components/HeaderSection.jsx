import React from 'react'
import logo from "../assets/girl.svg";

const HeaderSection = ({change}) => {
  return (
    <section >
    <section className=' m-2 '>
        <header className="text-gray-600 body-font mt-4 bg-[#fda4af]">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
      <img src={logo} alt="Logo" className="w-16 h-16 font-bold text-white p-2 bg-[#db2777] rounded-full" />
      <span className="ml-3 text-xl text-[30px]">The <span className='text-[#db2777] font-bold text-[30px]'>Beauty</span></span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-8 hover:text-[#db2777] text-[25px] font-semibold">Home</a>
      <a className="mr-8 hover:text-[#db2777] text-[25px] font-semibold">About Us</a>
      <a className="mr-8 hover:text-[#db2777] text-[25px] font-semibold">contact</a>
      <a className="mr-8 hover:text-[#db2777] text-[25px] font-semibold">Review</a>
      <a className="mr-8 hover:text-[#db2777] text-[25px] font-semibold">Logout</a>
    </nav>
    <button className="inline-flex items-center hover:bg-[#db2777] border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0"
    onClick={change}>Dark Theme
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-6 h-6 ml-1 font-bold" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    </section>
    </section>
  )
}

export default HeaderSection