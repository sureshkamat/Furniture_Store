import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Progress,
  Select,
  Text,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";
export const Delivery = () => {
    const { discountedPrice } = useParams();
    
  const [paymentMethod, setPaymentMethod] = useState("");
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
      };
    return (
        <Container maxW="1100px" backgroundColor='#C4C4C4'>
            <Heading as="h1" textAlign="left" mt="6">
                Delivery
            </Heading>
            <Grid
                m="auto"
                templateColumns="repeat(2, 1fr)"
                gap='45px'
                mt="8"
                pl='50px'
                backgroundColor="white"
                paddingTop="60px"
                borderRadius="30px">
                <Select placeholder="Country" width="400px"
                    height="60px">
                    <option value="Afghanistan">Afghanistan</option>

                    <option value="Zimbabwe">Zimbabwe</option>
                </Select>
                <Input width="400px" height="60px" placeholder="Zip-Code"></Input>
                <Input width="400px" height="60px" placeholder=" City"></Input>
                <Input width="400px" height="60px" placeholder="Address"></Input>
                <Box>
                    <Heading>Payment Method</Heading>
                    <FormControl>
                        <FormLabel>
                            <input
                                type="radio"
                                value="payOnDelivery"
                                checked={paymentMethod === "payOnDelivery"}
                                onChange={handlePaymentMethodChange}
                                name="paymentMethod"
                            />
                            Pay on Delivery
                        </FormLabel>
                        <FormLabel>
                            <input
                                type="radio"
                                value="payByCard"
                                checked={paymentMethod === "payByCard"}
                                onChange={handlePaymentMethodChange}
                                name="paymentMethod"
                            />
                            Pay by Card
                        </FormLabel>
                    </FormControl>
                </Box>
                <Flex justifyContent='space-evenly'>
                    <Heading>Total</Heading>
                    <Heading>.............{discountedPrice}</Heading>
                </Flex>
            </Grid>
            <Box display='flex' justifyContent='space-between' mt='30px'>
                <Text >3/3</Text>
                <Progress value={100} colorScheme='orange' w='550px' size='xs' mt='20px' />
                <Link  > <Button mb='20px' h="60px"
                    w='150px' borderTopLeftRadius='20px' borderBottomRightRadius='20px' backgroundColor='#FFCC01' color='white'>
                    Order
                </Button></Link>

            </Box>
        </Container>
    );
}