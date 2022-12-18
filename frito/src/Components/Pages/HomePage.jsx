import axios from "axios"
import React, { useEffect ,useState} from "react"
import HomeCard from "./HomeCard"
import { Flex,Grid,GridItem } from "@chakra-ui/react"
import { Button, ButtonGroup } from '@chakra-ui/react'
import Footer from ".././Footer"
//import WithSubnavigation from "../Navbar"
import CaptionCarousel from "./Carosel"
import { Link as RouterLink } from "react-router-dom";
import Sliderbar from "./Slidebar" 

function Home(){
    const [data,setData] = useState([])

    useEffect(()=>{
        axios.get("https://crowded-plum-horse.cyclic.app/home_products")
           .then((res)=>{
              console.log(res.data)
              setData(res.data)
           })
    },[])
    console.log(data)


    return <div style={{width:"80%",margin:"auto"}}>
        {/* <WithSubnavigation/> */}
        <CaptionCarousel/>
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
           <RouterLink to="/joinnow">
              <Button backgroundColor={"#F13B43"} marginLeft={950} width={150}>Join Now</Button>
            </RouterLink>
        </Flex>

        <Grid templateColumns='repeat(3, 1fr)' gap={4} marginTop={20}>
            <GridItem>
                <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1678538158.jpg"/>
                <h1  style={{fontSize:"20px",fontWeight:"bold"}}>This Simple Bengali-Style Fish Curry Recipe is a Guaranteed Hit!</h1>
            </GridItem>
            <GridItem>
                <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_669590515.jpg"/>
                <h1  style={{fontSize:"20px",fontWeight:"bold"}}>Are Prawns and Shrimps Really All That Different? Find Out Here!</h1>
            </GridItem>
            <GridItem>
                <img src="https://www.licious.in/blog/wp-content/uploads/2022/12/Shutterstock_1502598560.jpg"/>
                <h1  style={{fontSize:"20px",fontWeight:"bold"}}>These Chicken Spring Rolls are so Good, They'll Put a Spring in Your Step!</h1>
            </GridItem>
        </Grid>

        <div style={{border:"0px solid red",height:"500px",marginTop:"140px"}}>
           <img style={{height:"500px",width:"100%"}} src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db"/>
        </div>

    {/* <SliderCom/> */}
    <div>
        <Sliderbar/>
    </div>
        
    </div>
}

export default Home