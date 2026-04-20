import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { alumniData } from '../mockData/alumniData'

const AlumniSlider = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          speed={900}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          loop
          pagination={{ clickable: true }}
          navigation
          slidesPerView={1}
          spaceBetween={60}
          className="pb-14"
        >
          {alumniData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">

                {/* LEFT */}
                <div className="space-y-5 pr-2">
                  <div className="border-l-4 border-red-600 pl-4">
                    <h2 className="text-3xl font-bold text-gray-800">
                      {item.name}
                    </h2>
                  </div>

                  <p className="text-gray-700 text-lg">
                    {item.position}
                    <br />
                    <span className="text-gray-500">
                      {item.company}
                    </span>
                  </p>

                  {item.faculty && (
                    <p className="text-base text-gray-500">
                      {item.faculty}
                    </p>
                  )}
                </div>

                {/* RIGHT */}
                <div className="flex justify-center lg:justify-end lg:-ml-8">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="
        w-72 h-72 lg:w-80 lg:h-80
        object-cover rounded-2xl
        shadow-xl
        transition-transform duration-700
        hover:scale-105
      "
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  )
}

export default AlumniSlider