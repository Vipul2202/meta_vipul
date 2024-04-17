import React from 'react';
import v from '../assets/v.png';
import j from '../assets/j.png';

const Analytics = () => {
  return (
    <div className='bg-white py-16 px-4 md:px-0' style={{ backgroundImage: `url(${j})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:gap-8 items-center'>
        <img className='w-full md:w-[500px] mx-auto my-4 rounded-3xl' src={v} alt='/' />
        <div className='text-center md:text-left'>
          <p className='text-[#00df9a] font-bold text-3xl mb-4 md:mb-2'>MULTIPLAYER VR GAMES & EXPERIENCES</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-white italic '>Dive into a realm of endless excitement with 30+ MULTIPLAYER VR ARCADE GAMES and EXPERIENCES. With new content consistently added, every visit unveils a new adventure waiting to be explored!</h1>
          
          <button className='bg-black text-[#00df9a] w-full md:w-[200px] rounded-md font-medium my-6 md:my-0 py-3 mx-auto md:mx-0'>Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
