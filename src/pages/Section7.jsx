import React from "react";
import SectionPhoto from "../assets/img/section7_photo.png";
import { Container, Stack, Typography, Box } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import LinkIcon from "@mui/icons-material/Link";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TelegramIcon from "@mui/icons-material/Telegram";

const Section7 = ({ id }) => {
  const cardData = [
    {
      img: <LinkIcon sx={{ fontSize: "3rem" }} />,
      title: "Connection",
      content:
        "Rapidiously harness mission process improvements<br/> and backward-compatible communities.",
    },
    {
      img: <EmojiObjectsIcon sx={{ fontSize: "3rem" }} />,
      title: "Creativity",
      content:
        "Rapidiously harness mission process improvements <br/>and backward-compatible communities.",
    },
    {
      img: <TelegramIcon sx={{ fontSize: "3rem" }} />,
      title: "Support Center",
      content:
        "Rapidiously harness mission process improvements <br/>and backward-compatible communities.",
    },
  ];
  return (
    <Container id={id} sx={{ maxWidth: { xl: "1440px" }, minHeight: "100vh", marginTop: '50px' }}>
      <Stack direction={{lg: 'row', xs: 'column-reverse'}} alignItems='center' gap={{xs: '60px', lg: '0'}}>
        <Stack gap="60px">
          {cardData.map((card, id) => (
            <Box
              key={id}
              sx={{ display: "flex", gap: "50px", alignItems: "center" }}
            >
              {card.img}
              <Stack gap="30px">
                <Typography sx={{ fontSize: "30px", fontWeight: 700 }}>
                  {card.title}
                </Typography>
                <Typography
                  sx={{ fontSize: "25px", color: "#6A6E77" }}
                  dangerouslySetInnerHTML={{ __html: card.content }}
                ></Typography>
              </Stack>
            </Box>
          ))}
        </Stack>
        <img src={SectionPhoto} style={{maxWidth: '100%'}}/>
      </Stack>
    </Container>
  );
};

export default Section7;
