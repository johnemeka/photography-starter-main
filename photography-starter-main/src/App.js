import React, { useContext } from 'react';
import Header from './components/Header';
import AnimeRoutes from './components/AnimRoutes';



import {BrowserRouter as Router} from 'react-router-dom';

import {motion} from 'framer-motion';
import  { CursorContext } from './context/CursorContext'


const App = () => {
  const { cursorVarients,cursorBG} = useContext(CursorContext)
  return <>
    <Router>
      <Header/>
      <AnimeRoutes/>
    </Router>

    <motion.div 
    variants={cursorVarients}
    animate={cursorBG}
    className='w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50 rounded-full'></motion.div>
  </>;
};

export default App;
