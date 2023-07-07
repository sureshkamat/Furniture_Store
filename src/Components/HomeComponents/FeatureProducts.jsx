import { Button, Center, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getData, getError, getLoading } from '../../Redux/action';
import Loading from '../Loading';
import Product from './Products';
const FeaturedProducts = () => {
   const dispatch=useDispatch(); 

const Alldata=useSelector((state)=>state)
console.log(Alldata);

const {isLoading,isError,data}=Alldata
const getfeatureData=()=>{
    dispatch(getLoading());
    axios.get(`https://www.course-api.com/react-store-products`)
    .then((res)=>{
        dispatch(getData(res.data));
    })
    .catch((err)=>{
        dispatch(getError());
    })
}
useEffect(()=>{
getfeatureData();
},[])

    if (isLoading) {
        return <div className="section" style={{width:"90%",margin:"auto"}}> <Loading /> </div>
    }
    if (isError) {
        return <h1>Error....</h1>;
    }
    return (
        <div className="section" style={{width:"90%",margin:"auto"}}>
            <div className="title">
                <Center><Heading mb={10}>Featured Products</Heading></Center>
                
            </div>
            <div className="section-center featured" style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)",gap:"30px"}}>
                {data.slice(10, 16).map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </div>
            <Link to="/product" className="btn">
                <Center><Button colorScheme='yellow' size='lg'>All Products</Button></Center>
            </Link>
        </div>
    );
};


export default FeaturedProducts;
