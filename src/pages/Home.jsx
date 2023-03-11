import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import BGPhoto from "../assets/img/section1_promo.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = ({ id }) => {

  // Створюємо інетаратор для огляду видимості компонента та запуску анімації (triggerOnce - запускаємо анімацію один раз true, запускаєємо декілька разів false)
  // Threshold: Яка частина елемента має зайти у зону видимості для запуску анімації (0.5 - 50% висоти елемента)


  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  // Створюємо variants для анімацій різних компонентів

  const boxAnimate = {
    offscreen: { height: 0, opacity: 0 },
    onscreen: {
      height: 600,
      opacity: 1,
      
      transition: { duration: 1 },
    },
  };

  const textTopAnimate = {
    offscreen: { y: -100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1.2, delay: 1.2 } },
  };
  const textBottomAnimate = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 1.2, delay: 1.2 } },
  };

  return (
    <Container sx={{ maxWidth: { xl: "1440px" },}}>
      <Stack id={id} sx={{ minHeight: '100vh' }} justifyContent="center" ref={ref}>
        <Box
          component={motion.div}
          initial={"offscreen"}
          animate={inView ? "onscreen" : {}}
          variants={boxAnimate}
          sx={{
            background: `url(${BGPhoto}) center center / cover no-repeat`,
            width: "100%",
            maxHeight: "600px",
            boxSizing: 'border-box',
            overflowY: 'hidden'
          }}
        >
          <Stack sx={{padding: {xl: "155px 0 155px 240px", lg: "155px 0 155px 100px", md: "155px 0 155px 100px", sm: "155px 0 155px 50px", xs: "100px 10px"},}}>
          <Typography
            component={motion.h1}
            variants={textTopAnimate}
            sx={{ fontWeight: 400, fontSize: {sm: "25px", xs: '19px'}, color: "#E3E6EC" }}
          >
            Multipurpose Minimal Solution
          </Typography>
          <Typography
            component={motion.h2}
            variants={textBottomAnimate}
            sx={{
              fontWeight: 700,
              fontSize: {sm:"60px",xs:'40px'},
              color: "#fff",
              lineHeight: {sm: "75px", xs: '50px'},
              marginTop: "30px",
            }}
          >
            The simplest
            <br />
            things are often
            <br />
            the truest…
          </Typography>
          </Stack>

        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
