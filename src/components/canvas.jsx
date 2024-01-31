import './styles/canvas.sass'
import { useEffect } from 'react';
import { useRef } from 'react';
 
const Canvas = () => {
     let ref = useRef();
     function Shape(x,y,w,h,c){
        this.x = x,this.y = y,this.w = w,this.h = h,this.c = c
     }
     function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
        return color;
      }      
     useEffect(() => {
         const canvas = ref.current,
               pen = canvas.getContext('2d'),
               myRect =[]
         let [x,y,w,h,dx,dy] = [0,0,10,10,2,2]
         for (let i = 0; i < 3; i++) 
         myRect.push(new Shape([...Array(4)].map(()=>Math.round(Math.random()*40))),getRandomColor())
         console.log(myRect)
         canvas.width = window.innerWidth/1.5
         canvas.height = window.innerHeight/3

         window.addEventListener('resize', ()=> {canvas.width = window.innerWidth/1.5
         canvas.height = window.innerHeight/3})
         
         const draw = ()=>{
            pen.clearRect(0, 0, canvas.width, canvas.height);
            if(x + dx > canvas.width-w || x < 0) dx=-dx
            if(y + dy > canvas.height-h || y < 0) dy=-dy
            pen.fillRect(x+=dx,y+=dy,w,h)
            requestAnimationFrame(draw)
         }
         draw()
     },[]);
     
     return <canvas ref={ref} />
 };
 
 export default Canvas