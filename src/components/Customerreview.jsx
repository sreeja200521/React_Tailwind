import React from 'react'
import women1 from '../assets/w1.jpg'
import women2 from '../assets/w2.jpg'
import women3 from '../assets/w3.jpg'
import women4 from '../assets/w4.jpg'
import women5 from '../assets/w5.jpg'
import women6 from '../assets/w6.jpg'
const Customerreview = () => {
  return (
    <section>
         <section className="text-gray-600 body-font bg-BgColor">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium  text-[mb-4 text-[#f56d7d]">Customer Reviews</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-[20px]">Here we are mentioning some of our top customers who ofenly buy products i hope you will be one of them soon</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={women1} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[20px] title-font font-medium text-[#f56d7d] mb-1"> Sophia Patel</h2>
            <p className="leading-relaxed">Absolutely love this foundation! It blends seamlessly and gives my skin a flawless look. Lasts all day without creasing!</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={women2}/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[20px] title-font font-medium text-[#f56d7d] mb-1">Ava Sharma</h2>
            <p className="leading-relaxed">The lipstick has a rich pigment and feels super hydrating. The only downside is that it transfers a bit. Otherwise, perfect!</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={women3} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[20px] title-font font-medium text-[#f56d7d] mb-1">Emily Jones</h2>
            <p className="leading-relaxed">The eyeliner is so smooth and smudge-proof! I can wear it all day without reapplying. Definitely a must-have!</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={women4} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[20px] title-font font-medium text-[#f56d7d] mb-1">Liam Rodriguez</h2>
            <p className="leading-relaxed">Bought the skincare kit for my sister, and she loved it! The moisturizer feels light, and the packaging is premium.</p>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-contain object-center" src={women6} />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-[20px] title-font font-medium text-[#f56d7d] mb-1">Olivia Fernandez</h2>
            <p className="leading-relaxed">The face cream is a game-changer! My skin feels soft and glows naturally. Will repurchase for sure!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </section>
  )
}

export default Customerreview