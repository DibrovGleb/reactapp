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
      r.push([...Array(4)].map(()=>Math.round(Math.random()*30)+15).concat([...Array(2)].map(()=>Number((Math.random()*1.5).toFixed(2)))).concat(getRandomColor()))
   }
   const r =[],
         ref = useRef()


   useEffect(() => {
      const canvas = ref.current,
            pen = canvas.getContext('2d')
      canvas.width = window.innerWidth/1.5
      canvas.height = window.innerHeight/2

      const draw = ()=>{
         //pen.clearRect(0, 0, canvas.width, canvas.height)
         // !count ? console.log(false) : console.log(true)
         pen.fillStyle = "rgba(255, 255, 255, 0.1)";
         pen.fillRect(0, 0, canvas.width, canvas.height);
         for (let i = 0; i < r.length; i++) {
            pen.fillStyle = r[i][6]
            if(r[i][0] > canvas.width-r[i][2] || r[i][0] < 0) r[i][4]=-r[i][4], r[i][6] = getRandomColor()
            if(r[i][1] > canvas.height-r[i][3] || r[i][1] < 0) r[i][5]=-r[i][5], r[i][6] = getRandomColor()
            pen.fillRect(r[i][0]+=r[i][4], r[i][1]+=r[i][5], r[i][2], r[i][3])
         }
         requestAnimationFrame(draw)
      }
      
      window.addEventListener('resize', ()=> canvas.width = window.innerWidth/1.5,
      canvas.height = window.innerHeight/2)
      draw()
   }, [])


   return (<>
   <canvas ref={ref}/>
   <div className="btn-container">
      {/* <button onClick={()=> {ref.current.getContext('2d').clearRect(0, 0, ref.current.width, ref.current.height)}}>Clear</button> */}
      <button onClick={()=> createRect()}>Add</button>
      <button onClick={()=> {for (let i = 0; i < 10; i++) 
         createRect()}}>Add 10</button>
      <button onClick={()=> r.shift()}>Delete</button>
      <button onClick={()=> r.length = 0}>Delete all</button>
   </div>
   </>
   )
}

 export default Canvas