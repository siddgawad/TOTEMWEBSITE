import React from 'react';
import galleryImage from '../../assets/aboutassets/gallery.png';

const ResponsiveImageGallery = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-52">
      <div className="relative w-full">
        <img
          src={galleryImage}
          alt="Image Gallery"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default ResponsiveImageGallery;