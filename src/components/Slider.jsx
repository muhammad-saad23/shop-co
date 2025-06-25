import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ImageSlider = () => {
  const images = [
    { name: "Vomero", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/0ca35e1b-3525-42dd-9923-9256f2f9b929/men-s-shoes-clothing-accessories.jpg' },
    { name: "C1TY", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/290542af-0464-4c20-955e-4f34a697e097/men-s-shoes-clothing-accessories.jpg' },
    { name: "Air Jordan 1", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/89df24eb-fdba-46ff-954e-4855fa28a3f1/men-s-shoes-clothing-accessories.jpg' },
    { name: "Dunk", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/bf72d974-05db-437e-a315-778b4289ffc9/men-s-shoes-clothing-accessories.jpg' },
    { name: "Field General", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/7828c351-2346-41e5-8563-c00a72e7ee97/men-s-shoes-clothing-accessories.jpg' },
    { name: "Air Max", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/6552af7c-a310-4336-943a-9679faa13de4/men-s-shoes-clothing-accessories.jpg' },
    { name: "Pegasus", img: 'https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/h_300,c_limit/2221cfe3-4dfa-4273-9043-563ddeb36fd1/men-s-shoes-clothing-accessories.jpg' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageWidth = 320; // Includes padding/gap
  const visiableCards=6;

  const maxWidth=images.length-visiableCards;

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const handleNext = () => {
    if (currentIndex < maxWidth) setCurrentIndex(currentIndex + 1);
  };

  return (
    <div  className="my-10 w-full overflow-hidden">
      <h1 data-aos="fade-up" data-aos-duration="1000" className='text mx-8 mb-5 text-3xl capitalize'>classic jordan</h1>
      <div data-aos="fade-up" data-aos-duration="1500" className="relative w-full px-5">
        <motion.div
          className="flex"
          animate={{ x: -currentIndex * imageWidth }}
          transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="w-[200px] flex-shrink-0 mx-2 flex flex-col items-center"
            >
              <img
                src={src.img}
                alt={`Slide ${i + 1}`}
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <p className="mt-2 text-center text-xl font-medium">{src.name}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1500" className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrev}
          className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50"
          disabled={currentIndex === 0}
        >
          <ArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 disabled:opacity-50"
          disabled={currentIndex === images.length - 1}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
