import { Input, InputGroup, InputLeftElement,InputRightElement } from '@chakra-ui/input';
import { Box, Stack } from '@chakra-ui/layout'
import { useEffect } from 'react'
import Navmenu from '../componentes/navbar';
import { HiSearch } from "react-icons/hi";
import { Button } from '@chakra-ui/button';
import { Avatar } from '@chakra-ui/avatar';

export default function Home() {
  

  useEffect(()=>{
    localStorage.setItem('page','0');
    })


  return (
    <Box h="1000px">
      <Navmenu></Navmenu>
      <Box marginLeft="13rem" position="fixed" h="62px" bg="#302931" w="calc(100vw - 13rem)">
      <Stack spacing={2} flexDir="row" justifyContent="space-between" >
      <InputGroup width="50vw"  m="10px">
      <InputLeftElement children={<HiSearch/>}/>
        <Input className="input-bar" placeholder="Pesquisar Cursos"></Input>
    </InputGroup>
    
    <Button
    leftIcon={<Avatar size="sm" name="Victor Freire"></Avatar>}
    size="lg"
    marginRight="30px"
    borderRadius="15px"
    >
      Victor Freire
    </Button>
    </Stack>
    </Box>

    

    </Box>
  )
}
