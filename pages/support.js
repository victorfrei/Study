import { Box } from '@chakra-ui/layout'
import { useEffect } from 'react';
import Navmenu from '../componentes/navbar';

export default function Home() {
  useEffect(()=>{
    localStorage.setItem('page','6');
    })
    
  return (
    <Box>
      <Navmenu/>
    </Box>
  )
}
