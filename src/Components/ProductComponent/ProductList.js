import {
    Button, Center, Text
} from '@chakra-ui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const ProductList = ({products}) => {
    

    if (products.length < 1) {
        return (
            <h5 style={{ textTransform: "none" }}>
                Sorry, no products matched your search.
            </h5>
        );
    }
    const addtoCart=(product)=>{
        axios.post(`http://localhost:8080/cart`,product)
        .then((res)=>{
            window.alert("Added");
        })
        .catch((err)=>{
            window.alert("Already Added to Cart")
            console.log(err);
        })

    }

    return <div className="products-container" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"30px"}}>
    {products.map((product) => {
        return <div style={{boxShadow:"rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px", padding:"10px", borderRadius:"10px"}}>
        <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} style={{marginLeft:"0px", width:"400px" , height:"300px",borderRadius:"10px"}}/>
        </Link>
        <Center><Text>{product.name}</Text></Center>
    <div>
        <Center p={5}><Text mr={5}>RS. {product.price}</Text>
        <Button colorScheme='yellow' onClick={()=>addtoCart(product)}>Add to Cart</Button> </Center>
    </div>
</div>;
    })}
</div>
};

export default ProductList;

