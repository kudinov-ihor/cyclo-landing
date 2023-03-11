import React from "react";
import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SectionPhoto1 from "../assets/img/section5_photo1.png";
import SectionPhoto2 from "../assets/img/section5_photo2.jpg";
const Slide5 = ({ id }) => {
  return (
    <Container
      id={id}
      sx={{
        maxWidth: { xl: "1440px" },
        minHeight: "100vh",
        paddingTop: "100px",
      }}
    >
      <Stack direction={{lg: 'row', xs: 'column'}} gap={{md: '100px', lg: '190px', xs: '50px'}} justifyContent='space-between' alignItems='center'>
        <Stack>
          <Typography sx={{fontSize: '25px', color: '#6A6E77'}}>Multipurpose Minimal Solution</Typography>
          <Typography sx={{fontSize: {xs: '45px', sm: '60px'}, fontWeight: 700, color: '#1C1F25', marginTop: '30px', marginBottom: '100px'}}>
            The simplest
            <br />
            things are often
            <br />
            the truest…
          </Typography>
          <Typography sx={{fontSize: '25px', }}>
            Dramatically maximize principle-centered
            <br />
            models through focused materials. Assertively
            <br />
            build fully researched best practices via go
            <br />
            forward "outside the box" thinking.
          </Typography>
        </Stack>
        <Stack>
            <img src={SectionPhoto1} style={{maxWidth:'100%'}}/>
            <img src={SectionPhoto2} style={{maxWidth:'100%'}}/>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Slide5;
