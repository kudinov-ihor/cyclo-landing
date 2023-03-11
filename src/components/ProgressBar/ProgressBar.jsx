import React from "react";
import { LinearProgress, Box, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({ value, duration, threshold, label }) => {
  const [progressValue, setProgressValue] = useState(0);
  const { ref, inView } = useInView({
    threshold: threshold,
  });

  if (inView && progressValue <= value - 3) {
    setTimeout(() => {
      setProgressValue((prevValue) => prevValue + 1);
      console.log(progressValue);
    }, duration);
  }

  const progressVariants = {
    start: { value: 0 },
    end: { value: progressValue },
  };
  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={progressVariants}
      animate={value > 0 ? "end" : "start"}
      transition={{ duration: 1 }}
      sx={{ maxWidth: "720px", width: "100%" }}
    >
      <Stack direction="row" justifyContent="space-between" mb="20px">
        <Typography sx={{ fontSize: "25px", color: "#6A6E77" }}>
          {label}
        </Typography>
        <Typography
          sx={{ fontSize: "25px", color: "#1C1F25", fontWeight: 700 }}
        >{`${value}%`}</Typography>
      </Stack>
      <LinearProgress
        variant="determinate"
        aria-label={progressValue}
        value={progressValue}
        sx={{
          height: "10px",
          backgroundColor: "rgba(28, 31, 37, 0.1);",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#1C1F25",
          },
        }}
      />
    </Box>
  );
};

export default ProgressBar;
