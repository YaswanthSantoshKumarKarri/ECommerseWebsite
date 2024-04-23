import React from 'react'

const CompareProds = () => {
  return (
    <>
        <div className="bg-white py-4 sm:py-4">
          <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-1">
            <div className="max-w-7xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Products Comparision</h2>
              <p className="mt-6 mb-6 text-lg leading-8 text-gray-600">
                We get the best for you
              </p>
            </div>
            <div className="flex flex-col items-center justify-start w-full space-y-5">
                <div className='grid grid-cols-2 gap-10'>
                    <div className='grid grid-cols-1'>
                        <img className="w-60"src='https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png?width=1440&height=1440&size=710277'/>
                        <div>Company Name</div>
                        <div>model Name</div>
                        <div>price</div>
                        <div>Rating</div>
                        <div>features</div>                        
                    </div>
                    <div className='grid grid-cols-1'>
                        <img className="w-60"src='https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png?width=1440&height=1440&size=710277'/>
                        <div>Company Name</div>
                        <div>model Name</div>
                        <div>price</div>
                        <div>Rating</div>
                        <div>features</div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h2 className='flex justify-center items-center font-mono font-bold text-3xl'>The best of the both</h2>
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
            </div>
           </div>
        </div>
    </>
  )
}

export default CompareProds