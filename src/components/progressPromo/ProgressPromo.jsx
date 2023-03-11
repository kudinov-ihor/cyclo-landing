import React,{useState} from 'react';
import {Box, Typography} from '@mui/material';
import {  useInView } from 'react-intersection-observer';


const ProgressPromo = ({label, value}) => {

    const [progressValue, setProgressValue] = useState(0);
    const {ref, inView} = useInView({threshold: 0.7});

    if (inView && progressValue <= value - 2) {
        setTimeout(() => {
            setProgressValue((prevValue) => prevValue + 1);
        }, 30);
    }

  return (
    <Box ref={ref} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Typography sx={{color: '#E3E6EC', fontSize: '60px', fontWeight: 700}}>{progressValue}</Typography>
      <Typography sx={{color: '#E3E6EC', fontSize: '25px'}}>{label}</Typography>
    </Box>
  )
}

export default ProgressPromo
