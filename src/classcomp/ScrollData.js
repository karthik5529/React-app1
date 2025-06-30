import { useWindowScroll } from "react-use";
import { motion } from "framer-motion";

import './Scrollstyle.css'
function DataScroll () {
     const { y, y: scrollY } = useWindowScroll();
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollHeight > 0 ? y / scrollHeight : 0;

  return (
    <center>
    <div className="relative min-h-[200vh] bg-gray-900 text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-blue-500 z-50"
        style={{ scaleX: progress, transformOrigin: "0%" }}
      />

      {/* Sections with Scroll Animation */}
      <section className="h-screen flex justify-center items-center it cls1">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl"
        >
At WebPrime.Top Pvt Ltd, we are committed to delivering cutting-edge web development services that transform your ideas into high-performance, scalable web applications. We specialize in HTML, CSS, JavaScript, React, Angular, Vue.js, and Next.js, crafting responsive, SEO-friendly, and mobile-first websites tailored to your brand's vision. Our team ensures pixel-perfect UI/UX design, accessibility, and speed optimization to keep your visitors engaged while providing a seamless experience across desktops, tablets, and mobile devices. From semantic HTML structuring and CSS architecture (BEM, SCSS, Tailwind CSS, Bootstrap, Material UI) to advanced JavaScript frameworks, we build your projects using the latest web standards and best practices to ensure maintainability and ease of scaling as your business grows.        </motion.div>
      </section>

      <section className="h-screen flex justify-center items-center it cls2">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl"
        >
            At WebPrime.Top Pvt Ltd, we are committed to delivering cutting-edge web development services that transform your ideas into high-performance, scalable web applications. We specialize in HTML, CSS, JavaScript, React, Angular, Vue.js, and Next.js, crafting responsive, SEO-friendly, and mobile-first websites tailored to your brand's vision. Our team ensures pixel-perfect UI/UX design, accessibility, and speed optimization to keep your visitors engaged while providing a seamless experience across desktops, tablets, and mobile devices. From semantic HTML structuring and CSS architecture (BEM, SCSS, Tailwind CSS, Bootstrap, Material UI) to advanced JavaScript frameworks, we build your projects using the latest web standards and best practices to ensure maintainability and ease of scaling as your business grows.
        </motion.div>
      </section>

      {/* Add more sections below as needed */}
    </div>
    </center>
  );
}

export default DataScroll;