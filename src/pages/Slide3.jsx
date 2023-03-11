import React, { useState, useEffect } from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionPhoto from "../assets/img/section3_photo.png";
import ProgressBar from "../components/ProgressBar/ProgressBar";

const Slide3 = ({ id }) => {
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: shouldReduceMotion ? 0.4 : 0.7,
    rootMargin: "200px",
  });

  const imgAnimate = {
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
  const contentAnimate = {
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
  return (
    <Container sx={{ maxWidth: { xl: "1440px" } }}>
      <Stack
        id={id}
        sx={{ minHeight: "100vh", paddingTop: "120px", overflow: "hidden" }}
        direction={{ lg: "row", xs: "column" }}
        alignItems="center"
        gap={{ xl: "100px", lg: "20px" }}
        ref={ref}
      >
        <motion.img
          src={SectionPhoto}
          style={{ maxWidth: "100%" }}
          initial={"offscreen"}
          animate={inView ? "onscreen" : {}}
          variants={imgAnimate}
        ></motion.img>
        <Stack
          component={motion.div}
          initial={"offscreen"}
          animate={inView ? "onscreen" : {}}
          variants={contentAnimate}
        >
          <Typography sx={{ fontSize: "25px", color: "#6A6E77" }}>
            Multipurpose Minimal Solution
          </Typography>
          <Typography
            sx={{
              marginTop: "30px",
              fontSize: { sm: 60, xs: 45 },
              color: "#1C1F25",
              fontWeight: 700,
              lineHeight: { sm: "75px", xs: "55px" },
              marginBottom: { lg: "120px", xs: "70px" },
            }}
          >
            The simplest
            <br />
            things are often
            <br />
            the truest…
          </Typography>

          <Stack sx={{ gap: "75px" }}>
            <ProgressBar
              value={95}
              duration={10}
              threshold={1}
              label="Design"
            />
            <ProgressBar
              value={60}
              duration={10}
              threshold={1}
              label="Projects"
            />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Slide3;
