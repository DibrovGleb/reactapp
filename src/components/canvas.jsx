import './styles/canvas.sass'
import {useState, useEffect } from 'react';
import { useRef } from 'react';
 
/*const Canvas = () => {
     const ref = useRef(),
           rs = []

     class Shape {
      constructor([x, y, w, h], c) {
         this.x = x, this.y = y, this.w = w, this.h = h, this.c = c;
      }
      }

     function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
        return color;
      }      

      for (let i = 0; i < 3; i++) {
         rs.push(new Shape([...Array(4)].map(()=>Math.round(Math.random()*100)),getRandomColor()))
      }

      useEffect(() => {
         const canvas = ref.current,
               pen = canvas.getContext('2d')
         let [dx,dy] = [2,2]

         function Draw (){
            pen.clearRect(0, 0, canvas.width, canvas.height)
            for (let i = 0; i < rs.length; i++) {
               if(rs[i].x > canvas.width-rs[i].w|| rs[i].x < 0) dx=-dx
               if(rs[i].y > canvas.height-rs[i].h || rs[i].y < 0) dy=-dy
               pen.fillStyle = `${rs[i].c}`
               pen.fillRect(rs[i].x+=dx, rs[i].y+=dy, rs[i].w, rs[i].h)
            }
            setTimeout(() => {
              Draw()
             }, 10);
            // requestAnimationFrame(Draw)
         }
         Draw()
         canvas.width = window.innerWidth/1.5
         canvas.height = window.innerHeight/3
         window.addEventListener('resize', ()=> {canvas.width = window.innerWidth/1.5
         canvas.height = window.innerHeight/3})
      },[]);
     
     return <canvas ref={ref} />
 };
 */
const Canvas = () => {

   function getRandomColor() {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)]
      return color;
   }      

   function createRect () {
      return [...Array(4)].map(()=>Math.round(Math.random()*30)+20)
   }      
   function createRect2 () {
      r.push([...Array(4)].map(()=>Math.round(Math.random()*30)+20).concat([...Array(2)].map(()=>Math.random().toFixed(2))))
      console.log(r)
   }
   const r =[]
   const  ref = useRef(),
          r1 = createRect(),
          r2 = createRect()
         
   r1.push(getRandomColor())
   r2.push(getRandomColor())

   useEffect(() => {
      const canvas = ref.current,
            pen = canvas.getContext('2d')
      let [dx1,dy1,dx2,dy2]=[1.5,1.5,1,1]
      canvas.width = window.innerWidth/1.5
      canvas.height = window.innerHeight/3
      
      const draw = ()=>{
         //pen.clearRect(0, 0, canvas.width, canvas.height)
         // !count ? console.log(false) : console.log(true)
         pen.fillStyle = "rgba(255, 255, 255, 0.1)";
         pen.fillRect(0, 0, canvas.width, canvas.height);
         //for (let i = 0; i < array.length; i++) {
            //
         //}
         pen.fillStyle = r1[4]
         if(r1[0] > canvas.width-r1[2] || r1[0] < 0) dx1=-dx1, r1[4] = getRandomColor()
         if(r1[1] > canvas.height-r1[3] || r1[1] < 0) dy1=-dy1, r1[4] = getRandomColor()
         pen.fillRect(r1[0]+=dx1, r1[1]+=dy1, r1[2], r1[3])

         if(r2[0] > canvas.width-r2[2] || r2[0] < 0) dx2=-dx2
         if(r2[1] > canvas.height-r2[3] || r2[1] < 0) dy2=-dy2
         pen.fillStyle = r2[4]
         pen.fillRect(r2[0]+=dx2, r2[1]+=dy2, r2[2], r2[3])
         requestAnimationFrame(draw)
      }
      
      window.addEventListener('resize', ()=> canvas.width = window.innerWidth/1.5,
      canvas.height = window.innerHeight/3)
      draw()
   }, [])


   return (<>
   <canvas ref={ref}/>
   <button onClick={()=> {ref.current.getContext('2d').clearRect(0, 0, ref.current.width, ref.current.height)}}>Clear</button>
   <button onClick={()=> createRect2()}>Add</button>
   </>
   )
}

 export default Canvas