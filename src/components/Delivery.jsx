import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Grid,
  Heading,
  Input,
  Progress,
  Select,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

export const Delivery = () => {
  const { discountedPrice } = useParams();

  const [paymentMethod, setPaymentMethod] = useState("");
  const [showCardForm, setShowCardForm] = useState(false);
  const[showOtp, setShowOtp]=useState(false)
  const[Otp ,setOtp]= useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [errors, setErrors] = useState({
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [Zip, setZip] = useState('');
  const [address, setAddress] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value === "payByCard") {
      setShowCardForm(true);
    } else {
      setShowCardForm(false);
    }
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (country.trim() === '') {
      errors.country = 'Country is required';
      isValid = false;
    }

    if (city.trim() === '') {
      errors.city = 'City is required';
      isValid = false;
    }

    if (Zip.trim() === '') {
      errors.Zip = 'Zip Code is required';
      isValid = false;
    }
    if (address.trim() === '') {
        errors.address = 'Address is required';
        isValid = false;
      }
    setFormErrors(errors);
    return isValid;
  };

  const handleSubmitOrder = () => {
    
    if (validateForm()) {
        setShowOtp(true)
    }
  };

  const handleSubmitCardForm = (event) => {
    event.preventDefault();

    const cardFormIsValid = validateCardForm();

    if (cardFormIsValid) {
      setCardNumber("");
      setCardExpiry("");
      setCardCVV("");

      setShowCardForm(false); 
    }
  };

  const validateCardForm = () => {
    let cardFormIsValid = true;
    const newErrors = {};
    if (!cardNumber) {
      newErrors.cardNumber = "Please enter a card number.";
      cardFormIsValid = false;
    }
    if (!cardExpiry) {
      newErrors.cardExpiry = "Please enter the card expiry.";
      cardFormIsValid = false;
    }
    if (!cardCVV) {
      newErrors.cardCVV = "Please enter the card CVV.";
      cardFormIsValid = false;
    }

    setErrors(newErrors);
    return cardFormIsValid;
  };

  const handleSubmitOtp =()=>{
    if(Otp === "1234"){
        console.log("Otp")
    }
  }


  return (
    <Container maxW="1100px">
      <Heading as="h1" textAlign="left" mt="-25px" mb="-10px">
        Delivery
      </Heading>
      <Grid
        m="auto"
        templateColumns="repeat(2, 1fr)"
        mt="8"
        h="460px"
        pl="50px"
        backgroundColor="white"
        paddingTop="60px"
        borderRadius="30px"
      >
        <Select
          placeholder="Country"
          width="400px"
          height="60px"
          onChange={(e) => setCountry(e.target.value)}
          isInvalid={!!formErrors.country}
          aria-describedby={formErrors.country ? 'country-error' : undefined}
        >
          <option value="Afghanistan">Afghanistan</option>
          <option value="Zimbabwe">Zimbabwe</option>
        </Select>
        <Input
          width="400px"
          height="60px"
          placeholder="Zip-Code"
          onChange={(e) => setZip(e.target.value)}
          isInvalid={!!formErrors.Zip}
          aria-describedby={formErrors.Zip? 'Zip-error' : undefined}
        />
        <Input
          width="400px"
          height="60px"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
          isInvalid={!!formErrors.city}
          aria-describedby={formErrors.city ? 'city-error' : undefined}
        />
        <Input
          width="400px"
          height="60px"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          isInvalid={!!formErrors.address}
          aria-describedby={formErrors.address ? 'address-error' : undefined}
        />
        <Box textAlign="left">
          <Heading paddingBottom="25px">Payment Method</Heading>
          <FormControl>
            <FormLabel paddingBottom="10px">
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
        <Flex justifyContent="space-evenly" paddingTop="150px">
          <Heading>Total</Heading>
          <Heading>{discountedPrice}</Heading>
        </Flex>
      </Grid>
      <Box display="flex" justifyContent="space-between" mt="30px">
        <Text>3/3</Text>
        <Progress
          value={100}
          colorScheme="orange"
          w="550px"
          size="xs"
          mt="20px"
        />
        <Link >
          <Button
            mb="20px"
            h="60px"
            w="150px"
            borderTopLeftRadius="20px"
            borderBottomRightRadius="20px"
            backgroundColor="#FFCC01"
            color="white"
            onClick={handleSubmitOrder}
          >
            Order
          </Button>
        </Link>
      </Box>

      {/* Card details form modal */}
      {showCardForm && (
        <Modal isOpen={true} onClose={() => setShowCardForm(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Card Details</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmitCardForm}>
              <ModalBody>
                <Input
                  width="400px"
                  height="60px"
                  placeholder="Card Number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  isInvalid={!!errors.cardNumber}
                />
                {errors.cardNumber && (
                  <FormErrorMessage>{errors.cardNumber}</FormErrorMessage>
                )}

                <Input
                  width="400px"
                  height="60px"
                  placeholder="Card Expiry"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                  isInvalid={!!errors.cardExpiry}
                />
                {errors.cardExpiry && (
                  <FormErrorMessage>{errors.cardExpiry}</FormErrorMessage>
                )}

                <Input
                  width="400px"
                  height="60px"
                  placeholder="Card CVV"
                  value={cardCVV}
                  onChange={(e) => setCardCVV(e.target.value)}
                  isInvalid={!!errors.cardCVV}
                />
                {errors.cardCVV && (
                  <FormErrorMessage>{errors.cardCVV}</FormErrorMessage>
                )}
              </ModalBody>
              <ModalFooter>
                <Button
                  type="submit"
                  h="50px"
                  w="120px"
                  borderTopLeftRadius="20px"
                  borderBottomRightRadius="20px"
                  backgroundColor="#FFCC01"
                  color="white"
                >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}



      {showOtp && (
        <Modal isOpen={true} onClose={() => setShowOtp(false)}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Otp</ModalHeader>
            <ModalCloseButton />
            <form >
              <ModalBody>
                <Input
                  width="400px"
                  height="60px"
                  placeholder="Enter Your OTP"
                  value={Otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={handleSubmitOtp}
                  h="50px"
                  w="120px"
                  borderTopLeftRadius="20px"
                  borderBottomRightRadius="20px"
                  backgroundColor="#FFCC01"
                  color="white"
                >
                  Submit
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      )}
    </Container>
  );
};
