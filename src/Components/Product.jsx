import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { getError, getFurniture, getLoading } from '../Redux/action';
import Loading from './Loading';
import Filter from './ProductComponent/Filter';
import Pagination from './ProductComponent/Pagination';
import PageHero from "./ProductComponent/ProductHero";
import ProductList from "./ProductComponent/ProductList";
import Sort from './ProductComponent/Sort';
const ProductData = () => {
    let data=useSelector((state)=>state)

    
    const [category,setCategory]=useState();
    const [company,setCompany]=useState();
    const [shipping,setShipping]=useState(false);
    const [sortBy,setSortBy]=useState();
    const [orderBy,setOrderBy]=useState();
    const [page,setPage]=useState(1);
    const [limit,setLimit]=useState(3);
    const dispatch=useDispatch();
    const getData=()=>{
        dispatch(getLoading());
        let url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}`
        if(orderBy){
            url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&_sort=${sortBy}&_order=${orderBy}`
        }
        // const params={
        //     comapny:company,
        //     category:category,
        //     _sort:orderBy,
        //     _order:orderBy
        // }

        if(category){
            url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&category_like=${category}`
            if(orderBy){
                url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&category_like=${category}&_sort=${sortBy}&_order=${orderBy}`
            }
        }else if(company){
            url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&company_like=${company}`
            if(orderBy){
                url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&company_like=${company}&_sort=${sortBy}&_order=${orderBy}`
            }
        }else if(shipping){
            url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&shipping_like=true`
            if(orderBy){
                url=`http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}/furnitures?_page=${page}&_limit=${limit}&shipping_like=true&_sort=${sortBy}&_order=${orderBy}`
            }
        }
        
        axios.get(url)
    .then((res)=>dispatch(getFurniture(res.data)))
    .catch((err)=>dispatch(getError()));
    
    }
    useEffect(()=>{
getData();
    },[category,company,shipping,sortBy,orderBy,page,limit])
    
console.log(orderBy)

    return (
        <main style={{width:"90%",margin:"auto"}}>
            <PageHero title="products" />
            <Wrapper className="page">
                <div className="section-center products">
                        <Sort category={category} setCategory={setCategory} setCompany={setCompany} shipping={shipping} setShipping={setShipping}/>
                    <div>
                        <Filter setSortBy={setSortBy} setOrderBy={setOrderBy} setLimit={setLimit}/>
                        {data.isLoading?<Loading /> :<ProductList products={data.furniture}/> }
                        <Pagination page={page} setPage={setPage}/>
                    </div>
                </div>
                
            </Wrapper>
        </main>
    );
};

const Wrapper = styled.div`
    .products {
        display: grid;
        gap: 3rem 1.5rem;
        margin: 4rem auto;
    }
    @media (min-width: 768px) {
        .products {
            grid-template-columns: 200px 1fr;
        }
    }
`;

export default ProductData;
