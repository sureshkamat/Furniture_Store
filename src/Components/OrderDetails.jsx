import React, { useContext } from "react";
import { Box, Heading, Text, VStack, Divider, Flex, Grid, Button } from "@chakra-ui/react";
import {Link} from 'react-router-dom'
import DetailsContext from "./DetailsContext";

 export const OrderDetails = () => {
  // Example order details data
  const details= useContext(DetailsContext)
  

  return (
    <Box p={4} bg="white" boxShadow="md" borderRadius="md">
      <Heading as="h2" size="lg" mb={4}>
        Order Details
      </Heading>

      <Grid align="" spacing={4} templateColumns="repeat(3, 1fr)">
        <Text fontWeight="bold"> Order Id</Text>
        <Text>{details.orderId}</Text>
        <Divider/>
        <Text fontWeight="bold">Name:</Text>
        <Text>{details.name}</Text>

        <Divider />

        <Text fontWeight="bold">Address:</Text>
        <Text>{details.address}</Text>

        <Divider />

        <Text fontWeight="bold">Email:</Text>
        <Text>{details.email}</Text>

        <Divider />

        <Text fontWeight="bold">City:</Text>
        <Text>{details.city}</Text>

        <Divider />

        <Text fontWeight="bold">Country:</Text>
        <Text>{details.country}</Text>

        <Divider />

        <Text fontWeight="bold">Zip Code:</Text>
        <Text>{details.Zip}</Text>

        <Divider />

        <Text fontWeight="bold">Amount Paid:</Text>
        <Text>{details.discountedPrice}</Text>

        <Divider />

        <Text fontWeight="bold">Phone Number:</Text>
        <Text>{details.phone}</Text>
      </Grid>
      <Link to="/" style={{ textDecoration: "none" }}>
              <Button 
              ml={650}
              mt={50}
              h="40px"
              w="150px"
              borderTopLeftRadius="20px"
              borderBottomRightRadius="20px"
              backgroundColor="blue"
              color="white">Continue Shopping</Button>
     </Link>
    </Box>
  );
};

