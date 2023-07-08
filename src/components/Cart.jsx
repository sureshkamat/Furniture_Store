import { CloseIcon } from "@chakra-ui/icons";

import { Button, Flex, Heading, Image, Text, Container, Box, HStack, Input, Progress } from "@chakra-ui/react";
import React, { useState, useEffect, useContext } from 'react';

import { Link } from "react-router-dom";
import DetailsContext from "./DetailsContext";


export const Cart = () => {
    const [cartData, setCartData] = useState([]);
    const [quantities, setQuantities] = useState({});
    const total = cartData.length;
    const totalPrice = cartData.reduce((acc, item) => acc + (item.price * (quantities[item.id] || 0)), 0);
    const details=useContext(DetailsContext);
    details.totalPrice=totalPrice;
    

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`);

                const data = await response.json();
                setCartData(data);

                // Set default quantity to 1 for all items
                const initialQuantities = {};
                data.forEach((item) => {
                    initialQuantities[item.id] = 1;
                });
                setQuantities(initialQuantities);
            } catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleQuantityDecrease = (id) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            updatedQuantities[id] = Math.max((updatedQuantities[id] || 1) - 1, 0);

            return updatedQuantities;
        });
    };

    const handleQuantityIncrease = (id) => {
        setQuantities((prevQuantities) => {
            const updatedQuantities = { ...prevQuantities };
            const quantity = updatedQuantities[id] || 0;
            updatedQuantities[id] = quantity + 1;
            return updatedQuantities;
        });
    };

    const deleteItem = async (id) => {
        try {

            await fetch(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart/${id}`, {

                method: 'DELETE'
            });
            setCartData((prevCartData) => prevCartData.filter((item) => item.id !== id));
        } catch (error) {
            console.log('Error deleting item:', error);
        }
    };

    return (
        <Container maxW='1100px' >
            <Flex justifyContent='space-between'><Heading as='h1' textAlign='center' mt='-25px' paddingBottom='10px'>Your Orders</Heading>
                <Text textAlign='center' mb='4'>{total} Product Added</Text></Flex>
            <Box
                overflowY='auto'
                height='480px'
                paddingRight='10px'
                marginRight='-10px'
                css={{
                    '&::-webkit-scrollbar': {
                        width: '4px',
                    },
                    '&::-webkit-scrollbar-track': {

                    },
                    '&::-webkit-scrollbar-thumb': {
                        background: '#FF8D18',
                        borderRadius: '8px',
                    },
                }}

            >
                {cartData.map((ele) => (
                    <Flex justifyContent='space-between' alignItems='center' key={ele.id} mb='4' p='4' bg='white' position='relative' borderRadius='20px'>
                        <Button
                            size='sm'
                            onClick={() => deleteItem(ele.id)}
                            position='absolute'
                            top='1'
                            right='1'
                        ><CloseIcon />
                        </Button>
                        <Image
                            boxSize={{ sm: '120px', md: '200px' }}
                            objectFit='contain'
                            src={ele.image}
                            alt={ele.name}
                        />
                        <Flex flex='1' direction='column' ml='4'>
                            <Heading as='h3' size='lg' mb='2'>{ele.name}</Heading>
                            <Text>Company: {ele.company}</Text>
                            <Text>Category {ele.category}</Text>
                            <Text>Price: ₹ {ele.price}</Text>
                        </Flex>
                        <HStack maxW='140px' alignItems='center'>
                            <Button size='sm' onClick={() => handleQuantityDecrease(ele.id)} isDisabled={quantities[ele.id] === 1}>-</Button>
                            <Input value={quantities[ele.id] || 0} readOnly w='16' textAlign='center' />
                            <Button size='sm' onClick={() => handleQuantityIncrease(ele.id)} isDisabled={quantities[ele.id] === 6}>+</Button>
                        </HStack>
                        <Heading as='h3' size='lg' width='150px' mt='80px'>₹ {ele.price * (quantities[ele.id] || 0)}</Heading>
                    </Flex>
                ))}
            </Box>
            <Box display='flex' justifyContent='space-between' mt='25px'>
                <Text >1/3</Text>
                <Progress value={33} colorScheme='orange' w='550px' size='xs' mt='20px' />
                <Link to={`/Info/`} > <Button mb='20px' h="60px"
                    w='150px' borderTopLeftRadius='20px' borderBottomRightRadius='20px' backgroundColor='#FFCC01' color='white'>
                    Next
                </Button></Link>

            </Box>


        </Container>
    );
};
