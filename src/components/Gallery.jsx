import React from 'react';
import Slider from 'react-slick';

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          focusOnSelect: true,
        },
      },
    ],
  };

  return (
    <section id="gallery" className="bg-[#EADDC8] py-16 px-6 md:px-20 text-center overflow-hidden">
      <h2 className="text-4xl font-serif text-[#4B2E2B] mb-12 tracking-wide">Gallery</h2>

      <Slider {...settings} className="gap-x-2" >

        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1521747116042-5a810fda9664"
            alt="Gallery 1"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Coffee Time
            </p>
          </div>
        </div>


        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery 2"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Fresh Pastries
            </p>
          </div>
        </div>


        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1709870845122-bb30d361f5de?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery 3"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Chill Vibes
            </p>
          </div>
        </div>


        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1550048192-f5416a1f132a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery 4"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Espresso Moments
            </p>
          </div>
        </div>


        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1618411640026-24e40dcde1ab?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery 5"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Sweet Treats
            </p>
          </div>
        </div>


        <div className="relative group overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out hover:scale-105 mx-5 my-4">
          <img
            src="https://images.unsplash.com/photo-1555050338-0abc773f7978?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gallery 6"
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="absolute bottom-6 left-6 text-xl font-semibold text-white tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform">
              Cake Perfection
            </p>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default Gallery;
