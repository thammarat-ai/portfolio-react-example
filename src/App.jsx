import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Portfolio from "./components/Portfolio/Portfolio";
import Number from "./components/Number/Number";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="0, 65, 125"
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={5}
        outerStyle={{
          border: "3px solid #fff",
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <Navbar /> {/* เรียกใช้งาน Navbar ที่เราสร้างไว้ */}
      <Hero /> {/* เรียกใช้งาน Hero ที่เราสร้างไว้ */}
      <Skills /> {/* เรียกใช้งาน Skills ที่เราสร้างไว้ */}
      <Services /> {/* เรียกใช้งาน Services ที่เราสร้างไว้ */}
      <Portfolio /> {/* เรียกใช้งาน Portfolio ที่เราสร้างไว้ */}
      <Number /> {/* เรียกใช้งาน Number ที่เราสร้างไว้ */}
      <Testimonials /> {/* เรียกใช้งาน Testimonials ที่เราสร้างไว้ */}
      <Contact /> {/* เรียกใช้งาน Contact ที่เราสร้างไว้ */}
      <Footer /> {/* เรียกใช้งาน Footer ที่เราสร้างไว้ */}
    </>
  );
}

export default App;
