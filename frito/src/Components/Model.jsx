import {Button} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Model(){

    return <>
    <div style={{marginTop:"100px",marginLeft:"350px"}}>
        <img src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png"/>
        
    </div>
    <RouterLink to="/">
      <Button >Continue Shopping</Button>
    </RouterLink>
    </>
}

export default Model