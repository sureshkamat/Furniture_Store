import { Box, Checkbox, CheckboxGroup, Heading, Radio, RadioGroup, Stack, Text } from "@chakra-ui/react";
const Sort = ({category,setCategory,setCompany,setShipping,shipping}) => {
    return (
            <div className="section-center">
                <Heading>
                   Category
                </Heading><br/>
                <Box ml={10}>
                <Stack spacing={2} direction='column'>
                <RadioGroup defaultValue='1'>
                    <Stack spacing={5} direction='column'>
                    <Radio  colorScheme='yellow' value='1'><Text onClick={()=>{setCompany("");setCategory("");setShipping(false)}}>All</Text></Radio>
                    <Radio   colorScheme='yellow' value='2'><Text onClick={()=>{setCompany("");setCategory("office");setShipping(false)}}>Office Chairs</Text></Radio>
                    <Radio  colorScheme='yellow' value='3'><Text onClick={()=>{setCompany("");setCategory("living room");setShipping(false)}}> Living Room</Text></Radio>
                    <Radio   colorScheme='yellow' value='4'><Text onClick={()=>{setCompany("");setCategory("kitchen");setShipping(false)}}> Kitchen</Text ></Radio>
                    <Radio   colorScheme='yellow' value='5'><Text onClick={()=>{setCompany("");setCategory("bedroom");setShipping(false)}}> Bedroom</Text></Radio>
                    <Radio   colorScheme='yellow' value='6'><Text onClick={()=>{setCompany("");setCategory("dining");setShipping(false)}}> Dining</Text></Radio>
                    <Radio   colorScheme='yellow' value='7'><Text onClick={()=>{setCompany("");setCategory("kids");setShipping(false)}}> Kids</Text></Radio>
                    </Stack>
                </RadioGroup>
                
                
                {/* <Checkbox colorScheme='yellow' default><Text onClick={()=>{setCompany("");setCategory("");setShipping(false)}}>All</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("office");setShipping(false)}}>Office Chairs</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("living room");setShipping(false)}}> Living Room</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("kitchen");setShipping(false)}}> Kitchen</Text ></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("bedroom");setShipping(false)}}> Bedroom</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("dining");setShipping(false)}}> Dining</Text></Checkbox>
                    <Checkbox colorScheme='yellow'  ><Text onClick={()=>{setCompany("");setCategory("kids");setShipping(false)}}> Kids</Text></Checkbox>
                */}
                </Stack>
                </Box>

                <Heading>
                   Company
                </Heading><br/>
                <Box ml={10}>
                <CheckboxGroup>
                <Stack spacing={2} direction='column'>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("marcos");setCategory("");setShipping(false)}}> Marcos</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("liddy");setCategory("");setShipping(false)}}> Liddy</Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("ikea");setCategory("");setShipping(false)}}>Ikea </Text></Checkbox>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("caressa");setCategory("");setShipping(false)}}>Caressa </Text></Checkbox>
                    </Stack>
                </CheckboxGroup>
                </Box>

                <Heading>
                   Color
                </Heading><br/>
                <Box ml={10} mb={10}>
                <RadioGroup defaultValue='1'>
                    <Stack spacing={5} direction='row'>
                    <Radio colorScheme='red' bg={'red'} value='1'></Radio>
                    <Radio colorScheme='green' bg={'green'} value='2'></Radio>
                    <Radio colorScheme='blue' bg={'blue'} value='3'></Radio>
                    <Radio colorScheme='yellow' bg={'yellow'} value='4'></Radio>
                    </Stack>
                </RadioGroup>
                </Box>

                <Heading>
                   Shipping
                </Heading><br/>
                <Box ml={10}>
                <Stack spacing={2} direction='column'>
                    <Checkbox colorScheme='yellow' ><Text onClick={()=>{setCompany("");setCategory("");setShipping(!shipping)}}>Free Shipping</Text></Checkbox>
                </Stack>
                </Box>




            </div>
            );
};



export default Sort;
