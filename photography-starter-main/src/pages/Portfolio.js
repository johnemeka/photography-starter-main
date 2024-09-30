import React, {useContext} from 'react';
import Image1 from '../img/portfolio/1.png';
import Image2 from '../img/portfolio/2.png';
import Image3 from '../img/portfolio/3.png';
import Image4 from '../img/portfolio/4.png';

import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import {transition1} from '../transitions'

import { CursorContext } from "../context/CursorContext";


const Portfolio = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return (  
  <motion.section 
  initial={{opacity:0, y: '-80%'}}
  animate={{opacity: 1, y: 0} }
  exit={{ opacity: 0, y: '-80%'}}
  transition={transition1}
  className='section'>
      <div className="container mx-auto h-full relative  mt-[100px] md:mt-0">
      <div className=" flex flex-col lg:flex-row h-full justify-center text-center items-center gap-x-24 lg:text-left lg:pt-36 pt-24 pb-8" >
        {/* text */}
        <motion.div
         initial={{opacity:0, y: '100%'}}
         animate={{opacity: 1, y: 0} }
         exit={{ opacity: 0, y: '100%'}}
         transition={transition1} 
         onMouseEnter={mouseEnterHandler}
         onMouseLeave={mouseLeaveHandler}
        className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className='h1'>portfolio</h1>
          <p className='MB-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos animi dolore consequuntur quasi laudantium officia aliquam? Ab, praesentium nihil. 
            <br /> 
            <br /> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, numquam!
          </p>

          <Link to={'/contact'} className='btn mt-4'>Hire me</Link>
        </motion.div>

        {/* images */}
        <div 
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
        className='grid grid-cols-2 lg:gap-2'> 

          <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img src={Image1} alt=""  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img src={Image2} alt=""  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img src={Image3} alt=""  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
          <div className="max-w-[250px] lg:max-w[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
            <img src={Image4} alt=""  className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500'/>
          </div>
        </div>
      </div>

    </div>
  </motion.section>);
};

export default Portfolio;
