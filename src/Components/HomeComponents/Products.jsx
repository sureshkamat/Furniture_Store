import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Product = ({ image, name, price, id }) => {
    return (
        <div >
                <Link to={`/product/${id}`}>
                    <img src={image} alt={name} style={{marginLeft:"0px", width:"400px" , height:"300px",borderRadius:"10px"}}/>
                </Link>
            <div style={{display:"flex",justifyContent:"space-between"}}>
                <Text>{name}</Text>
                <Text >$ {price}</Text>
            </div>
        </div>
    );
};
export default Product;
