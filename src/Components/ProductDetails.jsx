import { Button, Heading } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, } from "react-router-dom";
import styled from "styled-components";
import { getError, getLoading, getSingleData } from '../Redux/action';
import PageHero from "./ProductComponent/ProductHero";
import ProductImages from "./ProductImages";

const SingleProductPage = () => {
    const { id } = useParams();
    const dispatch=useDispatch();
    const data=useSelector((state)=>state.singleData);
    console.log(data);
    let url=`https://course-api.com/react-store-single-product?id=${id}`
    const fetchSingleProduct = async (url) => {
      dispatch(getLoading());
      try {
          const response = await axios.get(url);
          const singleProduct = response.data;
          dispatch(getSingleData(singleProduct));
      } catch (error) {
            dispatch(getError());
      }
  };

  useEffect(() => {
    fetchSingleProduct(url);
  }, []);

  const addtoCart=(product)=>{
    axios.post(`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/cart`,product)
    .then((res)=>{
        window.alert("Added");
    })
    .catch((err)=>{
        window.alert("Already Added to Cart")
        console.log(err);
    })

}

    const {
        name,
        price,
        description,
        stock,
        category,
        colors,
        reviews,
        id: sku,
        company,
        shipping,
        images,
    } = data;
    return (
        <Wrapper style={{width:"90%",margin:"auto",margin:"30px"}}>
            <PageHero title={name} category={category} product />
            <div className="section section-center page">
                <Link to="/product" className="btn">
                    <Button colorScheme='yellow' >back to products</Button>
                </Link>
                <div className="product-center">
                    <ProductImages images={images} />
                    <section className="content" style={{marginTop:"-200px", padding:"30px"}}>
                        <Heading>{name}</Heading>
                        {/* <Stars stars={stars} reviews={reviews} /> */}
                        <h5 className="price">RS. {price}</h5>
                        <p className="desc">{description}</p><br/>
                        <p className="info">
                            <span>Available : </span>
                            {stock > 0 ? `${stock} In stock` : "out of stock"}
                        </p>
                        <p className="info">
                            <span>SKU :</span>
                            {sku}
                        </p>
                        <p className="info">
                            <span>Brand :</span>
                            {company}
                        </p>
                        <p className="info">
                            <span>Shipping :</span>
                            {shipping?"Free Shipping" :"Applicable delivery Charge"}
                        </p>
                        <p className="info">
                            <span>Reviews :</span>
                            {reviews}
                        </p>
                        <p className="info">
                            <span>Category :</span>
                            {category}
                        </p>
                        <hr /><br/>
                        {stock > 0 && <Button onClick={()=>addtoCart(data)} colorScheme='yellow' >Add to Cart</Button>}
                    </section>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.main`
    .product-center {
        display: grid;
        gap: 4rem;
        margin-top: 2rem;
    }
    .price {
        color: var(--clr-primary-5);
    }
    .desc {
        line-height: 2;
        max-width: 45em;
    }
    .info {
        text-transform: capitalize;
        width: 300px;
        display: grid;
        grid-template-columns: 125px 1fr;
        span {
            font-weight: 700;
        }
    }

    @media (min-width: 992px) {
        .product-center {
            grid-template-columns: 1fr 1fr;
            align-items: center;
        }
        .price {
            font-size: 1.25rem;
        }
    }
`;

export default SingleProductPage;
