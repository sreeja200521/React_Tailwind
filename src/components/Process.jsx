import React from 'react'
import pic from "../assets/steps.webp"
const Process = () => {
  return (
    <section>
        <section className="text-gray-600 body-font bg-BgColor">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f56d7d] inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="2 0 24 24">
          <path transform="translate(2,3)" d="M3 3h2l1 5h13l1.5-4H6M7 13h10l4-8H5m1 8a2 2 0 1 0 4 0m6 0a2 2 0 1 0 4 0"></path>
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1</h2>
            <p className="leading-relaxed">Visit the website or app and browse products add your favorite items to the cart and complete the purchase.Receive order confirmation and tracking details</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f56d7d] inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="1 1 28 28">
          <path transform="translate(2,3)" d="M3 9l9-6 9 6-9 6-9-6v6l9 6 9-6V9"></path>
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Check the packaging and ensure the product is sealed.Read the instructions, ingredients, and expiry date.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f56d7d] inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="1 1 28 28">
          <path transform="translate(2,3)" d="M5 13l4 4L19 7"></path>
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3</h2>
            <p className="leading-relaxed">Apply a small amount on your wrist or behind your ear.Wait 24 hours to check for any allergic reactions.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f56d7d] inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="1 1 28 28">
          <path transform="translate(2,3)" d="M5 12l2 2 4-4M5 6l2 2 4-4M9 17h10M9 11h10M9 5h10"></path>
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4</h2>
            <p className="leading-relaxed">Follow the instructions for the best results.Use clean hands or applicators for hygiene.Blend well and allow time to set.
</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f56d7d] inline-flex items-center justify-center text-white relative z-10">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="1 1 28 28">
          <path transform="translate(2,3)" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH</h2>
            <p className="leading-relaxed">Keep the product in a cool, dry place.Close the lid properly to avoid contamination.Follow the recommended usage frequency.</p>
          </div>
        </div>
      </div>
      <img className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={pic} alt="step" />
    </div>
  </div>
</section>
    </section>
  )
}

export default Process