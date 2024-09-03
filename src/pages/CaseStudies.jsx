import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Home/Navbar';
import JoinOurTribeBanner from '../components/About/AboutBanner';
import crakk from '../assets/service/crakk.png';

const caseStudies = [
    { id: 1, title: 'Crakk: The Run', image: crakk },
    { id: 2, title: 'Crakk: The Run', image: crakk },
    { id: 3, title: 'Crakk: The Run', image: crakk },
    { id: 4, title: 'Crakk: The Run', image: crakk },
    { id: 5, title: 'Crakk: The Run', image: crakk },
    { id: 6, title: 'Crakk: The Run', image: crakk },
    { id: 7, title: 'Crakk: The Run', image: crakk },
    { id: 8, title: 'Crakk: The Run', image: crakk },
  ];
  
  const CaseStudyCard = ({ id, title, image }) => (
    <Link to={`/case-study/${id}`} className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 mt-10">
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4">
        <h3 className="text-green-500 text-lg font-semibold">{title}</h3>
      </div>
    </Link>
  );
  
  const CaseStudies = () => {
    return (
      <div className="bg-black min-h-screen">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-white text-5xl font-bold text-center mb-12">CASE STUDIES</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} {...study} />
            ))}
          </div>
        </div>
        <JoinOurTribeBanner />
      </div>
    );
  };
  
  export default CaseStudies;