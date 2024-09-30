import React, {useContext} from 'react'; 

import WomenImg from '../img/about/woman.png';
import {motion} from 'framer-motion'; 


import { Link } from 'react-router-dom';
import {transition1} from '../transitions'

import { CursorContext } from "../context/CursorContext";


const About = () => {
  const { mouseEnterHandler, mouseLeaveHandler} = useContext(CursorContext)

  return ( 
  <motion.section 
  initial={{opacity:0, y: '100%',}}
  animate={{opacity: 1, y: 0} }
  exit={{ opacity: 0, y: '100%',}}
  transition={transition1}
  className='section'>

    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    className="container mx-auto h-full relative mt-36 lg:mt-10">
      <div className=" flex flex-col lg:flex-row h-full justify-center text-center items-center gap-x-24 lg:text-left lg:pt-16" >
        <div className="flex-1 max-h-96 lg:max-h-max  order-2 lg:order-none  ">
          <img src={WomenImg} alt=""  className='h-[600px]'/>
        </div>

        <motion.div 
        initial={{opacity:0, y: '-80%'}}
        animate={{opacity: 1, y: 0} }
        exit={{ opacity: 0, y: '-80%'}}
        transition={transition1}
        className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start">
          <h1 className='h1'>About me</h1>
          <p className='MB-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, quos animi dolore consequuntur quasi laudantium officia aliquam? Ab, praesentium nihil. 
            <br /> 
            <br /> 
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis, numquam!
          </p>

          <Link to={'/portfolio'} className='btn mt-4'>View my work</Link>
        </motion.div>
      </div>

    </div>
  </motion.section>
    
  );
};

export default About;
