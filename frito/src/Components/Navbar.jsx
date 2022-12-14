import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  useColorMode,
  Textarea,
  Select,
  InputRightAddon,
  InputLeftAddon,
  InputGroup,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { FaCartPlus } from "react-icons/fa";
import { BiGroup } from "react-icons/bi";
import { BiCategory } from "react-icons/bi";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Components/Pages/Frito.png";
import AddIcon from '@mui/icons/Add';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import Product from "../Components/Pages/ProductPage";

export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const firstField = React.useRef();

  var React = require("react");
  const { onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        fontSize={18}>
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <RouterLink to="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("gray.800", "white")}>
              <img src={Logo} width="150px" />
            </Text>
          </RouterLink>

          <Flex display={{ base: "none", md: "flex" }} ml={20}>
            {/* <DesktopNav /> */}
            <div>
              <img src="https://www.licious.in/img/rebranding/location_icon.svg" />
            </div>
            <h2 fontSize={40} onClick={onOpen}>
              Location
            </h2>

            <Modal
              // initialFocusRef={initialRef}
              // finalFocusRef={finalRef}
              isOpen={isOpen}
              onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Choose delivery Location</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <FormControl>
                    <FormLabel>Location</FormLabel>
                    <Input placeholder="Enter Location" />
                  </FormControl>
                </ModalBody>

                <ModalFooter>
                  <Popover>
                    <PopoverTrigger>
                      <Button marginRight={7}>Save</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverHeader
                        fontSize={20}
                        bgColor={"green"}
                        color={"white"}>
                        Saved !
                      </PopoverHeader>
                      <PopoverBody>
                        Your Location Saved Succsfully !
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Flex>

          <Flex display={{ base: "none", md: "flex" }} ml={39} w={"2xl"}>
            <input placeholder="Search for any delicious product" />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 2 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={25}
          marginRight={12}>
          <RouterLink>
            <Button
              as={"a"}
              fontSize={"md"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              color={"black"}>
              <BiCategory size={23} />
              Categories
            </Button>
          </RouterLink>

          <RouterLink to="/login">
            <Button
              as={"a"}
              fontSize={"md"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              color={"black"}
              leftIcon={<AddIcon />}
              onClick={onOpen}>
              <BiGroup size={23} />
              LogIn
            </Button>

            <Drawer
              isOpen={isOpen}
              placement="right"
              initialFocusRef={firstField}
              onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">
                  Create a new account
                </DrawerHeader>

                <DrawerBody>
                  <Stack spacing="24px">
                    <Box>
                      <FormLabel htmlFor="username">Name</FormLabel>
                      <Input
                        ref={firstField}
                        id="username"
                        placeholder="Please enter user name"
                      />
                    </Box>

                    <Box>
                      <FormLabel htmlFor="url">Url</FormLabel>
                      <InputGroup>
                        <InputLeftAddon>http://</InputLeftAddon>
                        <Input
                          type="url"
                          id="url"
                          placeholder="Please enter domain"
                        />
                        <InputRightAddon>.com</InputRightAddon>
                      </InputGroup>
                    </Box>

                    <Box>
                      <FormLabel htmlFor="owner">Select Owner</FormLabel>
                      <Select id="owner" defaultValue="segun">
                        <option value="segun">Segun Adebayo</option>
                        <option value="kola">Kola Tioluwani</option>
                      </Select>
                    </Box>

                    <Box>
                      <FormLabel htmlFor="desc">Description</FormLabel>
                      <Textarea id="desc" />
                    </Box>
                  </Stack>
                </DrawerBody>

                <DrawerFooter borderTopWidth="1px">
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Submit</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </RouterLink>

          <RouterLink to="/cart">
            <Button
              as={"a"}
              fontSize={"md"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              color={"black"}>
              <FaCartPlus size={20} />
              Cart
            </Button>
          </RouterLink>

          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}>
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}>
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Location",
    children: [
      {
        label: "Location",
        subLabel: <input type="search" placeholder="Add Location" />,
        href: "#",
      },
    ],
  },
  {
    label: "Search",
    children: [
      {
        label: "search",
        subLabel: (
          <input
            type="search"
            placeholder="Search for Delicious Food"
            width="100"
          />
        ),
        href: "#",
      },
    ],
  },

  {
    label: "Categories",
    children: [
      {
        subLabel: "Today's Deals",
        href: "#",
      },
      {
        subLabel: "Chicken",
        href: "#",
      },
      {
        subLabel: "Fish & SeaFood",
        href: "#",
      },
      {
        subLabel: "Mutton",
        href: "#",
      },
      {
        subLabel: "Cold Cuts",
        href: "#",
      },
      {
        subLabel: "Eggs",
        href: "#",
      },
    ],
  },
];
