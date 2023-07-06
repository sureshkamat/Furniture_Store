import { Box, Image } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
const Carosol=()=>{
      const data=useSelector((state)=>state.data)
      const ImageSlider = ({ slides }) => {
        return (
          <Carousel autoPlay>
            {slides.map((slide) => {
              return <Link to={`/product/${slide.id}`}><Image borderRadius='10px' src={slide.image} height="350px" width="300px" /></Link>;
            })}
          </Carousel>
        );
      };
    return (
        <>
        <Box w="80%" borderRadius='10px' m={"auto"} p={4} color="white">
      <ImageSlider slides={data} />
    </Box>
        </>
    )
}
export default Carosol;