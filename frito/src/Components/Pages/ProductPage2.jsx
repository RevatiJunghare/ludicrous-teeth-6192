import { Flex,Grid,GridItem } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect, useState } from "react"
import ProductCard2 from "./ProductCard2"



function Product2(){
    const [data,setData] = useState([])
   const [arr,setArr] = useState([])

    const handleData = (prop)=>{
        let a=prop
         setArr(...a,...arr)
        console.log(arr)
        
    }
    useEffect(()=>{
        axios.get("http://localhost:5050/spreads_products")
          .then((res)=>{
             console.log(res.data)
             setData(res.data)
          })
    },[])
    // console.log(arr)

    return <div style={{width:"83%",margin:"auto"}}>
        
        <h1 style={{fontFamily:"sans-serif" ,fontSize:"25px", marginLeft:"-900px", marginTop:"20px"}}>All Category Available</h1>
        <Grid templateColumns='repeat(3, 1fr)' gap={2} >
            { data?.length >0 && data.map((el)=>{
                  return (<GridItem key={el.id}> 
                                <ProductCard2  name={el.name}  price={el.price}  rupee={el.rupee}
                                                   description={el.description} image={el.image}  id={el.id}
                                                   rating={el.rating} quantity={el.quantity} 
                                                   handleData={handleData}
                                                     />
                  </GridItem>
           ) })}
        </Grid>
    </div>
}

export default Product2