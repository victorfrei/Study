import { Box } from '@chakra-ui/layout'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navmenu from '../componentes/navbar';

export default function Curses() {
  const router = useRouter();
  
  useEffect(()=>{
    localStorage.setItem('page','2');
    },[router.pathname])
    

  return (
    <Box>
      <Navmenu/>
    </Box>
  )
}
