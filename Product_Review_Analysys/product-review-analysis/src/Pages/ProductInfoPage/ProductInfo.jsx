import React from 'react'

import {Link} from "react-router-dom"

const ProductInfo = () => {
  return (
    <>
        <div className="bg-white py-4 sm:py-4">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
            <div className="max-w-7xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Product Details</h2>
              <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
                "Quality is not an act, it is a habit." - Aristotle
              </p>
                </div>
            </div>
            <div className=' flex justify-center items-center p-12 grid grid-cols-2 gap-0 ' >
                <div className='flex justify-center items-center'>
                    <img className='w-80' src="https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png?width=1440&height=1440&size=710277"/>
                </div>
                <div className='flex justify-center items-center grid grid-cols-1 gap-0'>
                    <h1 className='font-mono font-bold text-2xl'>realme</h1>
                    <h3 className='font-sans font-semibold text-xl'>11 Pro+ 5G (Sunrise Beige, 12GB RAM, 256GB Storage)</h3>
                    <div className='rating'></div>
                    <h2 className=' text-slate-600 font-sans font-semibold text-xl'>₹29,890 <span className='text-base'>M.R.P: ₹32,999</span> </h2>
                    <h6 className=' text-slate-600 font-sans font-semibold text-sm'>(9% off)</h6>
                    <p className=''>The realme 11 Pro+ is a cutting-edge smartphone designed to deliver a premium mobile experience. With a stunning display, powerful processing capabilities, and an impressive camera system, this device is engineered to meet the demands of modern smartphone users. The 6.5-inch AMOLED display provides vibrant colors and sharp details, making every interaction a visual delight. </p>
                </div>
            </div>
            <div className='revies p-16'>
             <h2 className='relative mb-2 text-xl font-bold text-center'>Reviews</h2>   

<div class="grid mb-8 border border-gray-300 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Excellent Performance</h3>
            <p class="my-4">"Realme 11 Pro+ delivers blazing-fast performance, handling tasks effortlessly."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Bonnie Green</div>
                <div class="text-sm text-gray-500 dark:text-gray-400 ">Email.id1</div>
                <div className='rating text-sm text-gray-500 dark:text-gray-400'> 5 stars</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Stunning Display</h3>
            <p class="my-4">"The AMOLED display on the Realme 11 Pro+ is vibrant and breathtaking, making visuals come to life."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Roberta Casas</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">email.id-2</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">4.2 stars</div>
            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Impressive Camera Quality</h3>
            <p class="my-4">"Capture every detail with the Realme 11 Pro+'s exceptional camera performance."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Jese Leos</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">email.id-2</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">4.5 stars</div>            </div>
        </figcaption>    
    </figure>
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-white border-gray-200 rounded-b-lg md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Camera Overprocessing</h3>
            <p class="my-4"> "Realme 11 Pro+'s camera tends to overprocess, resulting in artificial-looking photos."</p>
        </blockquote>
        <figcaption class="flex items-center justify-center ">
            <img class="rounded-full w-14 h-14" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
            <div class="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
                <div>Joseph McFall</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">email.id-4</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">3.2 stars</div>            </div>
        </figcaption>    
    </figure>
</div>
            <div className='flex justify-center'>
                <Link to={"/CompareProds"}>
                    <button className='border-solid rounded-full border-2 p-1 pl-4 pr-4 border-sky-600 bg-sky-400 hover:bg-sky-300 border-sky-500 '>Compare</button>
                </Link>
            </div>
            </div>
        </div>
    </>
    
  )
}

export default ProductInfo