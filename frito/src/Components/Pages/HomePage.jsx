import axios from "axios"
import React, { useEffect ,useState} from "react"
import HomeCard from "./HomeCard"
import { Flex,Grid,GridItem } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import Footer from ".././Footer"


function Home(){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:5050/home_products")
           .then((res)=>{
              console.log(res.data)
              setData(res.data)
           })
    },[])
    console.log(data)


    return <div style={{width:"80%",margin:"auto"}}>
        <h1 style={{fontFamily:"sans-serif" ,fontSize:"25px", marginLeft:"-900px", marginTop:"20px"}}>Shop By Categories</h1>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} >
             {data.map((el)=>{
                return <GridItem key={el.id}>
                    <HomeCard id={el.id}  image={el.image}  name={el.name}/>
                </GridItem>
             })}
        </Grid>
        <Flex style={{padding:"10px",backgroundColor:"#E8F03B",margin:"auto"}}>
           <img src="https://res.cloudinary.com/admitad-gmbh/image/upload/v1654606898/syuqxgxbn4vv5mrjp0wg.png" width="100px"/>
           <Button backgroundColor={"#F13B43"} marginLeft={950} width={150}>Join Now</Button>
        </Flex>

        
        
    </div>
}

export default Home