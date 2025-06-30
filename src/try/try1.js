import { useRef, useState } from 'react';
import './try1.css'
import ham from './src/classcomp/hammenu.png'

function Try1() {
    const ref = useRef()
    const [val , setval] = useState(false);
    function handle () {
        setval(true);
        if (ref.current) {
            ref.current.style.display = 'none'
        }
    }
    return (
        <>
        <button ref={ref} onClick={handle} >Menu</button>
        { val &&
            <div className='cont'>
                <img src={ham} />
                <center>
            <h4 className="element">LIGHT</h4><br/>
            <h4 className=" element">DARK</h4> </center>
            </div>
        }
        </>
    );
}

export default Try1;