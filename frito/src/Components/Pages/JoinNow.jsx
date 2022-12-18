import { AccordionIcon, AccordionItem, AccordionPanel, Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Radio } from "material-react-icons";
import { Accordion, AccordionButton, Stack } from "react-bootstrap";
import Logo from "./rev.jpeg";

function Joinnow(){
    
    return <>
    <div style={{marginTop:"100px",marginLeft:"500px"}}>
        <img style={{width:"100px",marginLeft:"150px"}} src={Logo}/>
          <img style={{marginTop:"50px"}} src="https://d2407na1z3fc0t.cloudfront.net/Banner/rebranding_v2_meatopia_fresh_unlimited_free_delivery_with_smiley.gif"/>
    </div>

    
    <div style={{border:"0px solid red",height:"200px",marginTop:"50px"}}>
        <Grid templateColumns='repeat(1, 1fr)' gap={2} >
            <GridItem style={{border:"1px solid black", height:"50px",marginLeft:"400px",width:"600px",padding:"10px"}}>
                <Flex>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32341.png" style={{width:"20px"}}/>
                   <h1 style={{textAlign:"left"}}>1 Month Plan</h1>
                   <Text style={{marginLeft:"410px"}}>₹69</Text>
                </Flex>
            </GridItem>

            <GridItem style={{border:"1px solid black", height:"50px",marginLeft:"400px",width:"600px",padding:"10px"}}>
                <Flex>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32341.png" style={{width:"20px"}}/>
                   <h1 style={{textAlign:"left"}}>3 Months Plan</h1>
                   <Text style={{marginLeft:"410px"}}>₹99</Text>
                </Flex>
            </GridItem>

            <GridItem style={{border:"1px solid black", height:"50px",marginLeft:"400px",width:"600px",padding:"10px"}}>
                <Flex>
                    <img src="https://cdn-icons-png.flaticon.com/512/32/32341.png" style={{width:"20px"}}/>
                   <h1 style={{textAlign:"left"}}>6 Month Plan</h1>
                   <Text style={{marginLeft:"410px"}}>₹189</Text>
                </Flex>
            </GridItem>
        </Grid>
    </div>

    </>
}

export default Joinnow