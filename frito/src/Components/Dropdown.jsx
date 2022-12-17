import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    PopoverArrow,
    IconButton,
    Button,
    Stack,
    Flex,
    
  } from '@chakra-ui/react';
  import { BiCategory } from "react-icons/bi";
  
  import { BsThreeDotsVertical, BsChatSquareQuote } from 'react-icons/bs';
  import { RiShutDownLine, RiRestartLine, RiFileShredLine } from 'react-icons/ri';
  import { useNavigate } from 'react-router-dom';
  import { Link as RouterLink } from "react-router-dom";
  
  export default function Dropdown() {
   let navigate = useNavigate()

    return (
      /**
       * You may move the Popover outside Flex.
       */
      <Flex justifyContent="center" marginLeft={120}>
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            {/* <IconButton
              aria-label="More server options"
              icon={<BsThreeDotsVertical />}
              variant="solid"
              w="fit-content"
            /> */}
            
               <Button
                  as={"a"}
                 fontSize={"md"}
                 fontWeight={400}
                 variant={"link"}
                 href={"#"}
                 color={"black"}
                 marginLeft={300}>
                 <BiCategory size={23} />
                 Categories
                </Button>
            
          </PopoverTrigger>
          <PopoverContent w="fit-content" _focus={{ boxShadow: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <Stack>
                <Button
                  w="194px"
                  variant="ghost"
                  justifyContent="space-between"
                  fontWeight="normal"
                  fontSize="sm">
                  Today's Deals
                </Button>
                <RouterLink to="/product"> 
                    <Button
                      w="194px"
                      variant="ghost"
                  
                      justifyContent="space-between"
                      fontWeight="normal"
                      colorScheme="red"
                      fontSize="sm"
                      >
                     All Category Food
                   </Button>
                </RouterLink>
                <Button
                  w="194px"
                  variant="ghost"
                  
                  justifyContent="space-between"
                  fontWeight="normal"
                  colorScheme="red"
                  fontSize="sm">
                  Fish & Sea Food
                </Button>
                <Button
                  w="194px"
                  variant="ghost"
                  
                  justifyContent="space-between"
                  fontWeight="normal"
                  colorScheme="red"
                  fontSize="sm">
                  Chicken
                </Button>

                <RouterLink to="/product2">
                    <Button
                      w="194px"
                      variant="ghost"
                  
                      justifyContent="space-between"
                      fontWeight="normal"
                     colorScheme="red"
                     fontSize="sm">
                      Spreads
                    </Button>
                </RouterLink>
                
              </Stack>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
    );
  }