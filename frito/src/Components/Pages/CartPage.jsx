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
  const [isloading,setIsLoading] = useState(true)

  console.log(id)

  const fetchData = ()=>{
    axios.get(`https://crowded-plum-horse.cyclic.app/frito_products/${id}`)
      .then((data)=>{
        setCart([...cart,data.data])
       //console.log(data.data)
       setIsLoading(false)
      }
      )
  
  }
  

  useEffect(()=>{
    fetchData(id)
  },[id])



  // if(isloading){
  //   return <img src="https://media.istockphoto.com/id/1220443914/vector/set-of-colorful-shopping-bags-isolated-on-the-purple-background.jpg?s=612x612&w=0&k=20&c=m6mvEUgScewU3YmaiFZGEtGzi6OebDkpTNswCL8jJtg="/>
  // }


  return isloading ? <><h1>Your Cart is Empty</h1>
  <img style={{width:"400px",marginLeft:"500px"}}  src="https://media.istockphoto.com/id/1220443914/vector/set-of-colorful-shopping-bags-isolated-on-the-purple-background.jpg?s=612x612&w=0&k=20&c=m6mvEUgScewU3YmaiFZGEtGzi6OebDkpTNswCL8jJtg="/> 
  </>: (
    <div style={{marginTop:"80px"}}>
      {/* <img src="https://www.seekpng.com/png/detail/117-1170538_404-your-cart-is-empty.png"/>  */}
      <h1 style={{fontFamily:"sans-serif" ,fontSize:"25px", marginLeft:"30px", marginTop:"10px",marginBottom:"30px"}}>Order Summary</h1>

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