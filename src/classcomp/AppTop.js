import { easeOut } from 'framer-motion';
import './AppTop.css'
import SlideBar from './Slide'
import * as motion from "motion/react-client"

function AppTop() {
    
    return (
        <>
        <head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>
</head>
            <div className='containertop'>
                <SlideBar/> 
                <center>
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:0.8 , ease:easeOut}}>
            <h2 className="maintxt">
                WEBPRIME.TOP
            </h2> 
           <h5 className='maintxt'>Building Tomorrow’s Web Today!!</h5>
            </motion.div>
        </center>
        </div>
        </>
    );
}

export default AppTop;