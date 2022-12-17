import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from '@chakra-ui/react';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SingleCart from './SingleCart';
import { Grid,GridItem } from '@chakra-ui/react';
import Model from '../Model';
import { Link as RouterLink } from "react-router-dom";
import { Button }  from "@chakra-ui/react";


export default function Cart() {
  const [cart,setCart] = useState([])
  const {id} = useParams()

  

  const fetchData = ()=>{
    axios.get(`http://localhost:5050/frito_products/${id}`)
      .then((data)=>
        setCart([...cart,data.data])
       //console.log(data.data)
      )
  
  }

  useEffect(()=>{
    fetchData(id)
  },[id])

console.log(cart)

  return (
    <div style={{marginTop:"80px"}}>
      {/* <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"/>  */}
      <h1 style={{fontFamily:"sans-serif" ,fontSize:"25px", marginLeft:"-900px", marginTop:"20px"}}></h1>

        <Grid templateColumns='repeat(1, 1fr)' gap={6} >
          
             {cart.map((el)=>{
                return <GridItem key={el.id}>
                
                  <SingleCart id={el.id}  image={el.image}  name={el.name} rupee={el.rupee} price={el.price}/>
                  
                </GridItem>
             })}
        </Grid>
        <RouterLink to="/model">
        <Button>Place Order</Button>
        </RouterLink>
        
        
        
    </div>
    
  );
}