import { Box } from '@chakra-ui/layout'
import { useEffect } from 'react'
import Navmenu from '../componentes/navbar';

export default function Home() {
  

  useEffect(()=>{
    localStorage.setItem('page','0');
    })


  return (
    <Box>
      <Navmenu></Navmenu>
    </Box>
  )
}
