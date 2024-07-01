import React, { useState } from 'react';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex + items.length - 1) % items.length);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative flex overflow-hidden">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="p-5 w-screen h-screen">
              <div className="bg-white rounded-lg shadow-xl">
                <div className="p-5">
                  <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <button onClick={prev} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">Prev</button>
        <button onClick={next} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 ml-2">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
