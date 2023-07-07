import { CloseIcon } from "@chakra-ui/icons";
import { Button, Flex, Heading, Image, Text, Container, Box, HStack, Input, Progress } from "@chakra-ui/react";
import React, { useState } from 'react';
import { useParams, Link } from "react-router-dom";

export const Information = () => {
  const { totalPrice } = useParams();
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [promoCode, setPromoCode] = useState('');
  const [discountedPrice, setDiscountedPrice] = useState(totalPrice);
  const [formErrors, setFormErrors] = useState({});

  const handleApplyPromoCode = () => {
    if (promoCode === "SAVE50") {
      const discount = totalPrice * 0.5; // Apply 50% discount
      const newPrice = totalPrice - discount;
      setDiscountedPrice(newPrice);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (lastName.trim() === '') {
      errors.lastName = 'Last name is required';
      isValid = false;
    }

    if (firstName.trim() === '') {
      errors.firstName = 'First name is required';
      isValid = false;
    }

    if (phoneNumber.trim() === '') {
      errors.phoneNumber = 'Phone number is required';
      isValid = false;
    }

    if (email.trim() === '') {
      errors.email = 'Email is required';
      isValid = false;
    } else if (!isValidEmail(email)) {
      errors.email = 'Invalid email address';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, submit or proceed to the next step
      window.location.href = `/Delivery/${discountedPrice}`;
      console.log('Form submitted!');
      // Add your logic for form submission or navigation to the next step here
    } else {
      // Form is invalid, display error messages
      console.log('Form contains errors!');
    }
  };

  return (
    <Container maxW="1100px" >
      <Heading as="h1" textAlign="left" mt='-25px' paddingBottom='10px'>
        Your Information
      </Heading>
      <form onSubmit={handleSubmit}>
        <Flex justifyContent="space-between" backgroundColor="white" paddingTop="60px" borderRadius="30px">
          {/* Left Side */}
          <Box flex="1" gap="8" ml='50px'>
            <Box mb="40px">
              <Input
                id="lastName"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                width="400px"
                height="60px"
                isInvalid={!!formErrors.lastName}
                aria-describedby={formErrors.lastName ? 'lastName-error' : undefined}
              />
              {formErrors.lastName && (
                <Text id="lastName-error" color="red" fontSize="sm">
                  {formErrors.lastName}
                </Text>
              )}
            </Box>
            <Box mb="40px">
              <Input
                id="firstName"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                width="400px"
                height="60px"
                isInvalid={!!formErrors.firstName}
                aria-describedby={formErrors.firstName ? 'firstName-error' : undefined}
              />
              {formErrors.firstName && (
                <Text id="firstName-error" color="red" fontSize="sm">
                  {formErrors.firstName}
                </Text>
              )}
            </Box>
            <Box mb="40px">
              <Input
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                width="400px"
                height="60px"
              />
            </Box>
            <Box mb="40px">
              <Input
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                width="400px"
                height="60px"
                isInvalid={!!formErrors.email}
                aria-describedby={formErrors.email ? 'email-error' : undefined}
              />
              {formErrors.email && (
                <Text id="email-error" color="red" fontSize="sm">
                  {formErrors.email}
                </Text>
              )}
            </Box>
          </Box>

          {/* Right Side */}
          <Box flex="1" display="flex" flexDirection="column" justifyContent="space-between">
            <Box mb="10">
              <Flex alignItems="flex-end">
                <Input
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo Code"
                  width="300px"
                  height="60px"
                />
                <Button
                  ml="2"
                  onClick={handleApplyPromoCode}
                  h="60px"
                  w="150px"
                  borderTopLeftRadius="20px"
                  borderBottomRightRadius="20px"
                  backgroundColor="#FFCC01"
                  color="white"
                >
                  Apply
                </Button>
              </Flex>
            </Box>
            <Box>
              <Flex mt="auto" mb="4" justifyContent="space-between">
                <Text fontSize="xl">Total Price</Text>
                <Text fontWeight="bold" fontSize="3xl">${discountedPrice}</Text>
              </Flex>
            </Box>
          </Box>
        </Flex>
        <Box display="flex" justifyContent="space-between" mt="30px">
          <Text>2/3</Text>
          <Progress value={67} colorScheme="orange" w="550px" size="xs" mt="20px" />
          <Link to={`/Delivery/${discountedPrice}`}>
            <Button
              mb="20px"
              h="60px"
              onClick={handleSubmit}
              w="150px"
              borderTopLeftRadius="20px"
              borderBottomRightRadius="20px"
              backgroundColor="#FFCC01"
              color="white"
            >
              Next
            </Button>
          </Link>
        </Box>
      </form>
    </Container>
  );
};
