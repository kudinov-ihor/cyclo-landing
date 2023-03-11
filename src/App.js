import React, { useEffect, useState } from "react";
import { Container, CssBaseline, Typography } from "@mui/material";

import { createTheme } from "@mui/material/styles";
import Home from "./pages/Home";
import Slide2 from "./pages/Slide2";
import Slide3 from "./pages/Slide3";
import Slide4 from "./pages/Slide4";
import Slide5 from "./pages/Slide5";
import Slide6 from "./pages/Slide6";
import Section7 from "./pages/Section7";
import Slide8 from "./pages/Slide8";
import Slide9 from "./pages/Slide9";
function App() {

  // Задаємо State для поточної секції на екрані

  const [currentSection, setCurrentSection] = useState(1);

  // Використовуємо useEffect для відстежування кожної секції при скролі

  useEffect(() => {
    // Створюємо функцію handleScroll для обробки данних

    const handleScroll = () => {
      // Зміна sections приймає значення усіх div які мають id
      // Зміна scrollPosition приймає значення відступу зверху від екрану

      const sections = document.querySelectorAll("div[id]");
      const scrollPosition = window.pageYOffset;

      // Створюємо цикл для перебору усіх div які мають id
      // Якщо id = Відступу зверху (scrollPosition) то Даємо значення цього id у State(setCurrentSection)

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - 300) {
          setCurrentSection(section.id);
          break;
        }
      }
    };

    // Створюємо обробник події та даємо йому значення scroll і на виконання функцію handleScroll

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (

          <div style={{ position: "relative" }}>
      <CssBaseline />
      <Typography
        sx={{
          margin: 0, 
          position: "fixed",
          top: "50%",
          transform: 'translateY(-50%)',
          right: {md: "118px", xs: '10px'},
          color: "#E3E6EC",
          fontWeight: 700,
          fontSize: 60
        }}
      >
        {currentSection <= 9 ? "0" + currentSection : currentSection}
      </Typography>

      <Home id="1" />

      <Slide2 id="2" />
      <Slide3 id="3" />
      <Slide4 id="4" />
      <Slide5 id="5" />
      <Slide6 id="6"/>
      <Section7 id="7" />
      <Slide8 id="8" />
      <Slide9 id="9" />

    </div>
   
  );
}

export default App;
