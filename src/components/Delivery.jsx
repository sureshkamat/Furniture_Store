import React, { useContext, useState } from "react";
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
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import DetailsContext from "./DetailsContext";
export const Delivery = () => {
  const details =useContext(DetailsContext)
  const discountedPrice=details.discountedPrice;
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
        setPayment(true)
    }
  }

  const [showPayment, setPayment] = useState(false);
  const handleClosePayment = () => {
    setPayment(false);
  };
  // setting context
  details.address=address
  details.country=country
  details.city=city
  details.Zip=Zip

  function generateRandomNumber() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  const randomNumber = generateRandomNumber();
  details.orderId=randomNumber;
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
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
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
          <Heading>₹ {discountedPrice}</Heading>
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
       <Modal isOpen={showPayment} onClose={handleClosePayment}>
        <ModalOverlay />
        <ModalContent textAlign='center'>
          <ModalHeader textAlign='center'>Payment Successful</ModalHeader>
          <ModalHeader textAlign='center'>Order ID : {randomNumber}</ModalHeader>
          <ModalBody>
            <Image width='300px'src="https://cdn.dribbble.com/users/5804730/screenshots/14516978/media/b0978897e159ccefcd7f6e25e6c4b4ca.gif" alt="Payment Successful" style={{ maxWidth: "100%", height: "auto" }} />
          </ModalBody>
            <Flex justifyContent='space-around' mb='30px'>
            <Link to="/order-details" style={{ textDecoration: "none" }}>
              <Button h="40px"
                  w="150px"
                  borderTopLeftRadius="20px"
                  borderBottomRightRadius="20px"
                  backgroundColor="#FFCC01"
                  color="white">View Order Details</Button>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button 
              h="40px"
              w="150px"
              borderTopLeftRadius="20px"
              borderBottomRightRadius="20px"
              backgroundColor="blue"
              color="white">Continue Shopping</Button>
            </Link>
            </Flex>
        </ModalContent>
      </Modal>
    </Container>
  );
};
