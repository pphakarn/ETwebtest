import React from 'react'
import Navbar from '../componentes/Navbar/Navbar'
import Footer from '../componentes/Footer/footer'
import AlumniSlider from '../componentes/AlumniSlider'

const AlumniPage = () => {
  return (
    <>
      <Navbar />

      <header className="bg-[#193F7D] text-white pt-24 pb-16 rounded-b-[40px]">
        <h1 className="text-3xl font-bold text-center">
          ความภูมิใจของศิษย์เก่า
        </h1>
      </header>

      <AlumniSlider />

      <Footer />
    </>
  )
}

export default AlumniPage