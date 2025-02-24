import React from 'react';
import image1 from '../../assets/service/image1.png'
import image2 from '../../assets/service/image2.png'
import image3 from '../../assets/service/image3.png'
import image4 from '../../assets/service/image4.png'


const ExpertiseCard = ({ image, title, description }) => {
  return (
    <div className="bg-[#000e00] border border-gray-700 rounded-lg overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-[#02c503] text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm">{description}</p>
      </div>
    </div>
  );
};

const ExpertiseSection = () => {
  const expertiseData = [
    {
      image: image1,
      title: 'CGI & 3D Modeling',
      description: 'Creating lifelike characters, environments, and effects that blend seamlessly into any scene',
    },
    {
      image: image2,
      title: 'Compositing',
      description: 'Merging layers of magic to create a flawless final image',
    },
    {
      image: image3,
      title: 'Special Effects',
      description: 'From explosions to natural phenomena, we make it all look real',
    },
    {
      image: image4,
      title: 'Post-Production',
      description: 'Polishing every pixel to perfection',
    },
  ];

  return (
    <div className="bg-[#000e00] text-center py-16">
      <h2 className="text-white text-4xl font-bold mb-12">OUR EXPERTISE</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4 md:px-12">
        {expertiseData.map((item, index) => (
          <ExpertiseCard
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpertiseSection;
