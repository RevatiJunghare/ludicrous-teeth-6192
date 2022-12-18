import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Button,
    Flex
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { Link as RouterLink } from "react-router-dom";
  import Model from '../Model';
  import axios from 'axios';
  
  
  
  
  export default function SingleCart({id,image,name,rupee,price}) {
    const [counter,setCounter] = useState(1)
 
    console.log(typeof(rupee))
    const handleAdd = ()=>{
      setCounter(counter+1)
    }

    const handleSub = ()=>{
        if(counter<=0){
            return;
        }
        setCounter(counter-1)
    }


    const handleDelete = (id) => {
      return axios.delete(`https://crowded-plum-horse.cyclic.app/fish_products/${id}`)
      
    };

    return (
      <Center py={6} >
        
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}
          >
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
            //   backgroundImage: `url(${IMAGE})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {name}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                 <Flex><Text>₹</Text>{rupee}</Flex>
              </Text>
              
            </Stack>
            <Flex>
                <Button onClick={()=>handleSub(-1)}>-</Button>
                
                <Text>{counter}</Text>
                <Button onClick={()=>handleAdd(1)}>+</Button>
              </Flex>
              <Flex><Text>₹</Text>
                   <Text>{rupee*counter}</Text>
                   </Flex>
          </Stack>
          {/* <Button onClick={() => handleDelete(id)}>DELETE</Button> */}
        </Box>
        
      </Center>
      
    );
  }