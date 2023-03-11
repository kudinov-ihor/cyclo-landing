import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import PhotoSection from "../assets/img/section2_photo.png";
import { motion,  useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Slide2 = ({ id }) => {
  // Створюємо інетаратор для огляду видимості компонента та запуску анімації (triggerOnce - запускаємо анімацію один раз true, запускаєємо декілька разів false)
  // Threshold: Яка частина елемента має зайти у зону видимості для запуску анімації (0.5 - 50% висоти елемента)
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: shouldReduceMotion ? 0.4 : 0.7, rootMargin: "200px", });

  const imgAnimate = {
    offscreen: {
      x: 10,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  const contentAnimate = {
    offscreen: {
      x: -10,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { duration: 1.5 },
    },
  };
  return (
    <Container
      id={id}
      sx={{ maxWidth: { xl: "1440px" },   }}
      ref={ref}
    >
      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        alignItems={{ lg: "flex-end", xs: "center" }}
        gap={{ lg: 0, xs: 3 }}
        justifyContent="space-between"
        sx={{ overflow: "hidden" }}
      >
        <Stack
          component={motion.div}
          initial={"offscreen"}
          animate={inView ? "onscreen" : {}}
          variants={contentAnimate}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: 25,
              fontWeight: 400,
              color: "#6A6E77",
              marginBottom: "30px",
            }}
          >
            Multipurpose Minimal Solution
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: { sm: 60, xs: 45 },
              fontWeight: 700,
              color: "#1C1F25",
              lineHeight: { sm: "75px", xs: "55px" },
              marginBottom: { lg: "130px", xs: "70px" },
            }}
          >
            The simplest <br /> things are often
            <br /> the truest…
          </Typography>
          <Typography
            variant="p"
            sx={{ fontSize: 25, fontWeight: 400, color: "#6A6E77" }}
          >
            Dramatically maximize principle-centered <br /> models through
            focused materials. Assertively <br /> build fully researched best
            practices via go
            <br />
            forward "outside the box" thinking.
          </Typography>
        </Stack>
        <motion.img
          src={PhotoSection}
          style={{ maxWidth: "100%" }}
          initial={"offscreen"}
          animate={inView ? "onscreen" : {}}
          variants={imgAnimate}
        ></motion.img>
      </Stack>
    </Container>
  );
};

export default Slide2;
