// SlideBar.js
import {  useEffect, useRef, useState } from 'react';
import './slide.css';
import myImage from'./back.jpg'
import hammnenu from './hammenu.png'

const SlideBar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const [res , updres] = useState(false);
  const ref = useRef(null);
  function handle () {
    updres(true)
    if (ref.current){
        ref.current.style.display = 'inline-block';
    }
  }
  function hide() {
    if (ref.current){
        ref.current.style.display = 'none';
    }
  }
  function mail() {
    window.location.href ="mailto:support@webprime.top?subject=hello&body=I am intresed in you work can we appoint a meeting?";
  }
  return (
    <>
    <div className='ham'>
          <img className='hamimg' src={hammnenu} onClick={handle}/>
        </div>
    <div className="sidebar" ref={ref}>
      { res &&
        <> 
     <h3 >Theme</h3>
      <button onClick={() => setTheme('light')} className="theme-btn">Light</button>
      <button onClick={() => setTheme('dark')} className="theme-btn">Dark</button> <br/>
      <h3 >Contact Us</h3>
      <button onClick={mail} className='theme-btn'>Mail-Us</button>
      <br/><br/><br/><br/><br/><br/>
      <center><img src={myImage} alt="Background" className='backimg' onClick={hide}/><h4>GO BACK</h4> </center>
      </>
}
    </div>
    </>
  );
};

export default SlideBar;
