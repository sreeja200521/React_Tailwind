import React from 'react'

const HeroSection = () => {
  return (
        <section className="text-gray-600 body-font bg-BgColor">
  <div className="container mx-auto flex px-4 py-20 items-center justify-center flex-col">
  <h1 className='text-center font-bold text-[35px] text-[#ec8591]'>Welcome  </h1>
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-contain object-center rounded " alt="hero" src="https://st2.depositphotos.com/1010669/6303/i/950/depositphotos_63032761-stock-photo-brush-with-powder.jpg/820x700" />
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">The Beauty of yours</h1>
      <p className="mb-8 leading-relaxed text-[18px]">The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart is nothing but <span className='text-pink-500 font-medium'>BEAUTY</span><br/>
      Healthy skin doesn't just radiate beauty, it also radiates love</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-[#ec8591] border-0 py-2 px-6 focus:outline-none rounded text-lg">Learn More</button>
        </div>
    </div>
  </div>
    </section>
  )
}

export default HeroSection