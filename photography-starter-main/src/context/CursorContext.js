import React, { useState, useEffect, createContext } from 'react';

export const CursorContext = createContext(); // Keep the context name

const CursorProvider = ({ children }) => { // Rename the component to CursorProvider
  const [cursorPos, setCursorPos] = useState({
    x: 0,
    y: 0,
  });
  // cursor bg state
  const [cursorBG, setCursorBG] = useState('default');

  const mobileViewportIsActive = window.innerWidth < 768 ;

  useEffect(() => {
    console.log(mobileViewportIsActive);
    
    if (!mobileViewportIsActive) {

      const move = (e) => {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        });
      };
      window.addEventListener('mousemove', move);
  
   
      return () => {
        window.removeEventListener('mousemove', move);
      };
    } else {
      setCursorBG('none')
    }
  }, []); // Add an empty dependency array to run the effect only once on mount

  const cursorVarients = {
    default: {
      x: cursorPos.x - 16,
      y: cursorPos.y - 16,
      backgroundColor: '#0e1112',
    },
    text: {
      width: '150px',
      height: '150px',
      x: cursorPos.x - 72,
      y: cursorPos.y - 72,
      backgroundColor: '#fff',
      mixBlendMode: 'difference'
    },
    none: {
      width: 0,
      height:0,
      backgroundColor: 'rgba(255,255,255,1)',
    }
  }


      // mouse leave handler
      const mouseLeaveHandler = () =>{
        setCursorBG('default');
      }
     // mouse enter handler
     const mouseEnterHandler = () =>{
      setCursorBG('text');
    }


  return (
    <CursorContext.Provider value={{cursorVarients, cursorBG, mouseEnterHandler, mouseLeaveHandler}}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider; // Export the renamed component
