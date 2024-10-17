import React, { useState, useEffect } from 'react';

interface SlideshowProps {
  photos: string[];
}

const Slideshow: React.FC<SlideshowProps> = ({ photos }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [photos]);

  return (
    <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-lg">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Loverin ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentPhotoIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </div>
  );
};

export default Slideshow;