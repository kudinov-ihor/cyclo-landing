import React from "react";
import { Container, Box, Typography, Stack } from "@mui/material";
import SectionPhoto from "../assets/img/section9_photo.png";
import ProgressPromo from "../components/progressPromo/ProgressPromo";

const Slide9 = ({ id }) => {
  return (
    <Container
      id={id}
      sx={{
        maxWidth: { xl: "1440px" },
        minHeight: "100vh",
        marginTop: "100px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack
        direction={{xs: 'column', md: 'row'}}
        justifyContent="space-around"
        sx={{
          background: `url(${SectionPhoto}) center center / cover no-repeat`,
          width: "100%",
          height: "100%",
          padding: {xs: "100px 0", md: "247px 0"},
        }}
      >
        <ProgressPromo value={80} label="Business Projects" />
        <ProgressPromo value={55} label="Business Projects" />
        <ProgressPromo value={95} label="Business Projects" />
      </Stack>
    </Container>
  );
};

export default Slide9;
