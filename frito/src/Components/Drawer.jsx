import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Textarea,
    FormLabel,
    Box,
    Select,
    Input,
    InputRightAddon,
    InputLeftAddon,
    Stack,
    InputGroup,
    useDisclosure,
    background,
  } from "@chakra-ui/react";
  import React from "react"
  import AddIcon from "@mui/icons-material/Add";
  import { BiGroup } from "react-icons/bi";
  import { Link as RouterLink } from "react-router-dom";
  import { useNavigate } from "react-router-dom";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    let navigate = useNavigate()
  
    return (
      < >
        <Button
              as={"a"}
              fontSize={"md"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              color={"black"}
              // leftIcon={<AddIcon />}
              onClick={onOpen}>
              <BiGroup size={23} />
              LogIn
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          initialFocusRef={firstField}
          onClose={onClose}
          style={{backgroundColor:"white"}}
        >
          <DrawerOverlay  />
          <DrawerContent marginRight={38} width="350px" backgroundColor={"white"} >
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth='1px' paddingTop={299} marginRight={30} width="350px" backgroundColor={"white"}>
              Sign In/ Sign Up
            </DrawerHeader>
  
            <DrawerBody width="350px" backgroundColor={"white"} >
              <Stack spacing='30px' >
                
                <Box backgroundColor={"white"}>
                  <FormLabel htmlFor='url'>Email ID</FormLabel>
                  <InputGroup>
                    <InputLeftAddon></InputLeftAddon>
                    <Input
                      type='email'
                      id='url'
                      placeholder='Enter Email ID'
                    />
                    <InputRightAddon>@gmail.com</InputRightAddon>
                  </InputGroup>
                </Box>

                <Box>
                  <FormLabel htmlFor='username'>Mobile</FormLabel>
                  <Input
                    ref={firstField}
                    id='username'
                    placeholder='Please Mobile Number'
                  />
                </Box>
                <Box>
                    <p>By signing in you agree to our terms and conditions</p>
                </Box>
  
  
                <Button colorScheme='blue' margin="auto" >Proceed Via OTP</Button>
                
                  <Button  onClick={()=>{
                    navigate("/Signup_as_admin.jsx")
                  }}>SignUp as ADMIN</Button>
                  
              </Stack>
            </DrawerBody>
  
            
          </DrawerContent>
        </Drawer>
      </>
    )
  }


  export default DrawerExample