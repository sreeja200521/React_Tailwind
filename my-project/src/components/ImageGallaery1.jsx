import React from 'react'
import pic1 from "../assets/p1.webp";
import pic2 from "../assets/p2.jpg";
import pic3 from "../assets/p3.png";
import pic4 from "../assets/p4.webp";
import pic5 from "../assets/p5.jpg";
import pic6 from "../assets/p6.jpg";
import pic7 from "../assets/p7.jpg";
import pic8 from "../assets/p8.jpg";
import hlogo from "../assets/heart.svg";
const ImageGallaery1 = () => {
  return (
    <section>
    <h1 className='text-center text-[50px] font-bold text-[#ec8591]  bg-BgColor'>Products</h1>
    <section className="text-gray-600 body-font bg-BgColor">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 ">
      <div className=" relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between"  >
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>

        <a href={pic1} alt="product" className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block "  src={pic1} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h2 className="text-gray-900 title-font text-lg font-medium">Loreal Kit</h2>
          <p className="mt-1">₹1500.00</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic2} className="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic2} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Loreal Eyeliner</h2>
          <p className="mt-1">₹800.15</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic3} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block " src={pic3} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Loreal Lipstick</h2>
          <p className="mt-1">₹999.00</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic4} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic4} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Small Kit</h2>
          <p className="mt-1">₹1000.00</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic5} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic5} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Lakme Face Cream</h2>
          <p className="mt-1">₹890.00</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic6} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic6} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Lakme 9to5</h2>
          <p className="mt-1">₹690.15</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
       <a  href={pic7} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic7} />
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Lakme Primer</h2>
          <p className="mt-1">$960.00</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
      <div className="relative lg:w-1/4  md:w-1/2 p-4 w-full h-auto border-2 hover:border-[#ec8591] flex flex-col justify-between">
      <svg 
  className="w-8 h-8 absolute top-2 right-2 text-gray-600 hover:text-pink-600 cursor-pointer transition duration-300"
  xmlns="http://www.w3.org/2000/svg" 
  viewBox="0 0 24 24" 
  fill="currentColor"
>
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg><br/>
        <a href={pic8} className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-contain object-center w-full h-full block" src={pic8}/>
        </a>
        <div className="mt-4 flex flex-col items-center">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Lakme Foundation</h2>
          <p className="mt-1">₹820.40</p>
          <button className="px-4 py-2 bg-[#ec8591] text-white rounded-lg hover:bg-[#e96877] transition">
      Add to Cart
    </button>
        </div>
      </div>
    </div>
  </div>
</section>
   </section>
  )
}

export default ImageGallaery1