import React from "react";
import { Container, Stack, Typography, Box } from "@mui/material";
import LinkIcon from "@mui/icons-material/Link";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import TelegramIcon from "@mui/icons-material/Telegram";

const Slide6 = ({ id }) => {

    const cardData = [
        {
            img: <LinkIcon  sx={{fontSize: '3rem'}}/>,
            title: 'Connection',
            content: 'Rapidiously harness mission process improvements<br/> and backward-compatible communities.'
        },
        {
            img: <EmojiObjectsIcon sx={{fontSize: '3rem'}}/>,
            title: 'Creativity',
            content: 'Rapidiously harness mission process improvements <br/>and backward-compatible communities.'
        },
        {
            img: <TelegramIcon  sx={{fontSize: '3rem'}}/>,
            title: 'Support Center',
            content: 'Rapidiously harness mission process improvements <br/>and backward-compatible communities.'
        }
    ]
  return (
    <Container sx={{maxWidth: {xl: '1440px'}, minHeight: '100vh', marginTop: '50px'}} id={id}>
      <Stack direction={{lg: 'row', xs: 'column'}} gap="150px" justifyContent='space-between' alignItems='center' sx={{minHeight: '100vh'}}>
        <Stack>
          <Typography sx={{fontSize: '25px', color: '#6A6E77'}}>Multipurpose Minimal Solution</Typography>
          <Typography sx={{fontSize: {xs: '45px', sm: '60px'}, color: '#1C1F25', fontWeight: 700, lineHeight: '75px', marginTop: '25px'}}>
            The simplest
            <br />
            things are often
            <br />
            the truest…
          </Typography>
        </Stack>
        <Stack gap="60px">
            {cardData.map((card, id) => (
                <Box key={id} sx={{display: 'flex', gap: '50px',alignItems: 'center'}}>
                    {card.img}
                    <Stack gap="30px">
                        <Typography sx={{fontSize: '30px', fontWeight: 700}}>{card.title}</Typography>
                        <Typography sx={{fontSize: '25px', color: '#6A6E77'}} dangerouslySetInnerHTML={{ __html: card.content }}></Typography>
                    </Stack>
                </Box>
            ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default Slide6;
