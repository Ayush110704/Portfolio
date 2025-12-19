import { useEffect, useState } from "react";




export default function CustomCursor() {

const [position ,SerPosotion] = useState({x:0, y:0});

useEffect (()=>{
  const movehadler = (e) =>{
    SerPosotion({x:e.clientX, y:e.clientY})
  };

  window.addEventListener("mousemove", movehadler); // jab mouse move hoga tab ye function call hoga
 return () => window.removeEventListener("mousemove", movehadler); // cleanup function jo event listener ko remove kar de ga jab component unmount ho jaye
 

})




  return(

    <div className="pointer-events-none fixed top-0 left-0 z-999"
    style={{       transform: `translate3d(${position.x - 40}px, ${position.y - 40}px,0)`     }}

>

<div 
className="w-20 h-20 rounded-full bg-gradient-to-r from-pink-500 to-blue-500 blur-3xl opacity-80"
/>

    </div>


 )
 
}