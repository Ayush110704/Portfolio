import { useEffect, useRef } from "react"; 




export default function ParticleBackground() {
const canvasRef = useRef(null);  // hold canvas element reference

useEffect(() => {
  const canvas = canvasRef.current; // actual canvas dom element ko access karna k liye
  const ctx = canvas.getContext('2d'); // 2d drawing context

  let particles = [];
  const particleCount = 50;
  const colors = [ "rgba(255, 255, 255, 0.7)" ];

  // Particle class
  class particle {
    constructor(){
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 2 + 1; // 1px se 3px me xreate ho ge 
      this.colors = colors[Math.floor(Math.random() * colors.length)]; // random color select karne k liye
      this.speedX = (Math.random() - 0.5) * 0.5; // -0.5 se 0.5 ke beech speed
      this.speedY = (Math.random() - 0.5) * 0.5; 
    }

    draw(){
      ctx.beginPath(); //  new shape ko drw karne start karga
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // circle draw karna
      ctx.shadowBlur=10;
      ctx.shadowColor=this.colors;
      ctx.fillStyle = this.colors;
      ctx.fill(); // paint the particle on canvas  
    }
update(){
   this.x += this.speedX;
   this.y += this.speedY;


if (this.x<0) this.x =canvas.width; // wrap around effect
if (this.x> canvas.width) this.x =0;
if (this.y<0) this.y =canvas.height;
if (this.y> canvas.height) this.y =0;


this.draw(); // update position and redraw 
  }
}

 function createParticles(){
  particles= [];
  for (let i=0; i< particleCount ; i++){  // one by one ek ek particle create karna and add karega
    particles.push(new particle());
  }
 }


function handleResize(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles(); // canves ka size change hone pr particles ko recreate ho ge
}
handleResize(); // inatilies canvas size and particles size when component mounts
window.addEventListener('resize', handleResize); // jab bhi window resize ho gi tab ye call ho ga jis se canvas ka size bhi resize ho jayega

let animationId;
function animate(){
  ctx.clearRect(0,0, canvas.width, canvas.height); // purana frame clear kare ga next pe jane k baad aur naya frame draw karga
  particles.forEach((p)=>p.update());
  animationId = requestAnimationFrame(animate); // sceduling next frame
}
animate(); // start animation loop

return () => {
  cancelAnimationFrame(animationId); // cleanup animation frame on component unmount
  window.removeEventListener('resize', handleResize); // cleanup resize event listener
}

} ,[])


   return (
      <canvas

      ref ={canvasRef}
      className="absolute top-0 left-0 w-full pointer-events-none z-0" // kisi bhi button ya link ko block nhi kare ga
      ></canvas>
   )
}