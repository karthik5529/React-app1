import { useEffect, useRef, useState } from "react"
import './Demo.css'
function Demo () {
    const [color , setcolor] = useState('white');
    const ref = useRef(null)
    function handle () {
        if (ref.current) {
            ref.current.style.backgroundColor = '#000';
        }
      
    }
    return (
        <div ref={ref} >
        <center><button onClick={handle}>CLICK ME</button></center>
        </div>
    )
}

export default Demo