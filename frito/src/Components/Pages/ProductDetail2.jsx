import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect ,useState} from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  import { useParams } from 'react-router-dom';
  import { Link as RouterLink } from "react-router-dom";
  
  
  export default function ProductDetail2({obj}) {
    const [product,setProduct] = useState({})
    

    
    const {id} = useParams()
    console.log(id)

    useEffect(()=>{
        axios.get(`http://localhost:5050/spreads_products/${id}`)
           .then(({data})=>{
              setProduct(data)
           })
           .catch((err)=>console.log(err))
    },[id])
   
    console.log(product)

    const {name,rupee,description,image,rating,quantity,discount,message,message2,text,recipe} = product

    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={
                image
              }
              fit={'cover'}
              align={'center'}
              w={'100%'}
              h={{ base: '100%', sm: '400px', lg: '500px' }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                {name}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
                <Flex><Text>₹</Text>
                   <Text>{rupee}</Text>
                   </Flex>
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                  {text}
                </Text>
                <Text fontSize={'lg'}>
                  {description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>How long it take</ListItem>
                    <ListItem>Time</ListItem>{' '}
                    
                  </List>
                  <List spacing={2}>
                    <ListItem>{message}</ListItem>
                    <ListItem>{message2}</ListItem>
                    
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Product Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Quantity:
                    </Text>{' '}
                    {quantity}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Discount:
                    </Text>{' '}
                    {discount}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Rating:
                    </Text>{' '}
                    {rating}
                  </ListItem>
                  
                  
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Recipe:
                    </Text>{' '}
                    {recipe}
                  </ListItem>
                  
                </List>
              </Box>
            </Stack>
  
            <RouterLink to={`/cart/${id}`}>
               <Button
                rounded={'none'}
                 w={'full'}
                mt={8}
                size={'lg'}
                py={'7'}
                bg={useColorModeValue('gray.900', 'gray.50')}
                 color={useColorModeValue('white', 'gray.900')}
                 textTransform={'uppercase'}
                 _hover={{
                   transform: 'translateY(2px)',
                   boxShadow: 'lg',
                 }}
                 
                >
                 Proceed to Checkout
               </Button>
            </RouterLink>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text> delivery in 90 mins</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }