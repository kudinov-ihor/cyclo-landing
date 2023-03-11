import React from "react";
import { Typography, Stack, Container, Box } from "@mui/material";
import { motion, useReducedMotion  } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import SecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SecurityUpdateGoodOutlined";
import LaptopIcon from "@mui/icons-material/Laptop";
const Slide4 = ({ id }) => {

  // Створюємо інетаратор для огляду видимості компонента та запуску анімації (triggerOnce - запускаємо анімацію один раз true, запускаєємо декілька разів false)
  // Threshold: Яка частина елемента має зайти у зону видимості для запуску анімації (0.5 - 50% висоти елемента)
  const shouldReduceMotion = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: shouldReduceMotion ? 0.4 : 0.7, rootMargin: "400px", });

  const cardAnimate = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1 },
  };
  // Створюємо зміну cardData Для занесення даних у карточки та подальшого їхнього рендерингу
  const cardData = [
    {
      img: <CloudOutlinedIcon sx={{ fontSize: "3rem" }} />,
      title: "Cloud System",
      descr:
        "Completely reintermediate extensible infomediaries whereas vortals.",
    },
    {
      img: <SecurityUpdateGoodOutlinedIcon sx={{ fontSize: "3rem" }} />,
      title: "Security",
      descr:
        "Completely reintermediate extensible infomediaries whereas vortals. ",
    },
    {
      img: <LaptopIcon sx={{ fontSize: "3rem" }} />,
      title: "Easy to Customize",
      descr:
        "Completely reintermediate extensible infomediaries whereas vortals.",
    },
  ];
  return (
    <Container
      sx={{
        maxWidth: { xl: "1440px" },
        minHeight: "100vh",
        paddingTop: "200px",
      }}
      id={id}
      ref={ref}
    >
      <Typography
        sx={{ fontSize: "25px", color: "#6A6E77", textTransform: "capitalize" }}
      >
        Multipurpose Minimal Solution
      </Typography>
      <Typography
        sx={{
          marginTop: "30px",
          fontWeight: 700,
          fontSize: {xs: '45px', sm: "60px"},
          color: "#1C1F25",
        }}
      >
        Make things as simple possible
        <br />
        but no simpler
      </Typography>
      <Stack
        // Анімація копмонента
        component={motion.div}
        initial="offscreen"
        animate={inView ? "onscreen" : {}}
        transition={{ staggerChildren: 0.6 }}
        // Стилі компонента
        gap="20px"
        direction={{ lg: "row", xs: "column" }}
        sx={{ marginTop: "150px", overflow: "hidden" }}
        alignItems={{ xs: "center", lg: "flex-start" }}
      >
        {cardData.map((card, id) => (
          <Box key={id} component={motion.div} variants={cardAnimate} >
            {card.img}
            <Typography
              sx={{
                fontWeight: 700,
                color: "#1C1F25",
                fontSize: "30px",
                marginTop: "25px",
                marginBottom: "30px",
              }}
            >
              {card.title}
            </Typography>
            <Typography
              sx={{ fontSize: "25px", color: "#6A6E77", lineHeight: "45px" }}
            >
              {card.descr}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default Slide4;
