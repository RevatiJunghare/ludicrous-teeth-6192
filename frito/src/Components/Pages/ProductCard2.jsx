import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Icon,
    chakra,
    Tooltip,
    Grid,
    Text
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  import { FiShoppingCart } from 'react-icons/fi';
  import { Link as RouterLink } from "react-router-dom";
  import { useState,useEffect } from 'react';
  
  const data = {
    isNew: true,
    imageURL:
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  };
 
  




  
  function Rating({ rating, numReviews }) {
    return (
      <Box d="flex" alignItems="center">
        {Array(5)
          .fill('')
          .map((_, i) => {
            const roundedRating = Math.round(rating * 2) / 2;
            if (roundedRating - i >= 1) {
              return (
                <BsStarFill
                  key={i}
                  style={{ marginLeft: '1' }}
                  color={i < rating ? 'teal.500' : 'gray.300'}
                />
              );
            }
            if (roundedRating - i === 0.5) {
              return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
            }
            return <BsStar key={i} style={{ marginLeft: '1' }} />;
          })}
        <Box as="span" ml="2" color="gray.600" fontSize="sm">
          {numReviews} review{numReviews > 1 && 's'}
        </Box>
      </Box>
    );
  }
  
  function ProductCard2(prop) {

    let {name,rupee,description,image,id,rating,quantity,handleData}= prop


    
    const onClick = ()=>{
      handleData(prop)
      
    }

    return (
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
        <Box
          bg={useColorModeValue('white', 'gray.800')}
          maxW="sm"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
          position="relative"
          height="480px"
          //zIndex="-2"
          >
          {data.isNew && (
            <Circle
              size="10px"
              position="absolute"
              top={2}
              right={2}
              bg="red.200"
            />
          )}
  
          <RouterLink to={`/product2/${id}`}>
             <Image
               src={image}
               alt={`Picture of ${name}`}
               roundedTop="lg"
             />
          </RouterLink>
  
          <Box p="6">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {name}
              </Box>
              
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={'top'}
                color={'gray.800'}
                fontSize={'1.2em'}>
                  
                <chakra.a href={'#'} display={'flex'}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} onClick={onClick}/>
                </chakra.a>
              </Tooltip>
              
            </Flex>

            {/* const [data, setData] = useState([]);

           useEffect(() => {
                   
           }, [data]); */}
  
            <Flex justifyContent="space-between" alignContent="center">
              <Grid marginTop={6}>
              <Box >{quantity}</Box>
              <Box marginTop={3}>Rating:{rating}  </Box>
                </Grid> 
              
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')} marginTop="10">
                
              <Flex><Text>₹</Text>
                   <Text>{rupee}</Text>
                   </Flex>
              </Box>
              
            </Flex>
            
          </Box>
          
        </Box>
      </Flex>
    );
  }

  
  
  export default ProductCard2;