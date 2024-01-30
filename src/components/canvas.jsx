import {useEffect, useRef } from "react"
import "./styles/canvas.sass"

const Canvas = ()=>{
    const ref=useRef()
    
    const draw = (pen,count) =>{
        //pen.clearReact(0,0, pen.canvas.width, pen.canvas.height)
        count+10
        pen.fillStyle ='grey'
        pen.fillRect(10+count,10,100,100)
    }

    useEffect(() => {
        const canvas = ref.current,
              pen = canvas.getContext('2d')
        let count = 0,
            animationID
        draw(pen,count)
    }, [])
    
    
    return <canvas ref={ref}/>
} 

export default Canvas