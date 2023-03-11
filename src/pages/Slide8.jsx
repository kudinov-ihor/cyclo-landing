import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import SectionPhoto from "../assets/img/section8_photo.png";

import ProgressBox from "../components/ProgressBox/ProgressBox";

const Slide8 = ({ id }) => {
  return (
    <Container
      id={id}
      sx={{
        maxWidth: { xl: "1440px" },
        minHeight: "100vh",
        marginTop: "100px",
      }}
    >
      <Stack direction={{lg: 'row', xs: 'column'}} gap={{sm: '100px', xs: '50px'}} alignItems="center">
        <img src={SectionPhoto} style={{ maxWidth: "100%" }} />
        <Stack>
          <Typography sx={{ fontSize: "25px", color: "#6A6E77" }}>
            Multipurpose Minimal Solution
          </Typography>
          <Typography
            sx={{
              margin:'30px 0 120px 0',
              fontSize: { sm: 60, xs: 45 },
              color: "#1C1F25",
              fontWeight: 700,
              lineHeight: { sm: "75px", xs: "55px" },
            }}
          >
            The simplest
            <br />
            things are often
            <br />
            the truest…
          </Typography>
          <Stack direction="row" gap={{sm: "85px", xs: '50px'}}>
            <ProgressBox value={80} label="Design Sprint" />
            <ProgressBox value={75} label="Figma Themes" />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Slide8;
