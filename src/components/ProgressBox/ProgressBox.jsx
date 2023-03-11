import React from "react";
import {  Box, Typography} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBox = ({ value, label }) => {
  const [progressValue, setProgressValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  if (inView && progressValue <= value - 2) {
    setTimeout(() => {
      setProgressValue((prevValue) => prevValue + 1);
      console.log(progressValue);
    }, 20);
  }

  return (
    <Box ref={ref}>
      <Typography sx={{ color: "#1C1F25", fontSize: "60px", fontWeight: 700 }}>
        {progressValue}
      </Typography>
      <Typography sx={{ fontSize: "25px", color: "#6A6E77" }}>
        {label}
      </Typography>
    </Box>
  );
};

export default ProgressBox;
