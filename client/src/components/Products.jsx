import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import axios from "axios";
import styled from 'styled-components';
import Product from './Product'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div`
    max-width: 1350px;
    margin: 0 auto;
    padding: 20px 0px;
    /* display: flex;    
    flex-wrap: wrap;
    justify-content: space-between; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    /* max-width: 1500px;
    margin: 0 auto; */
    ${tablet({ gridTemplateColumns: "1fr 1fr" })}
    ${mobile({ gridTemplateColumns: "1fr" })}
`

const Products = ({category, filters, sort}) => {
    const location = useLocation()
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => { 
        const getProducts = async () => {
            try {
                const res = 
                    await axios.get( category   ? `http://localhost:8000/api/products?category=${category}` 
                                                : "http://localhost:8000/api/products")
                setProducts(res.data)
                
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()     
    }, [category])


    useEffect(() => {
        category && setFilteredProducts(
            products.filter((item) => 
                Object.entries(filters).every(([key, value]) =>
                    item[key].includes(value)
            ))
        )
    }, [products, category, filters])


    useEffect(() => {
        if (sort === "newest") {
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => a.createdAt - b.createdAt)  
            )
        }
        else if (sort === "asc") {
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => a.price - b.price)  
            )
        }
        else {
            setFilteredProducts(prev => 
                [...prev].sort((a,b) => b.price - a.price)  
            )
        }
    }, [sort])

    return (
        <Container>            
            { location.pathname !== '/' && category 
                ? filteredProducts.map(item => 
                    <Product item={item} key={item.id} />)
                : products.slice(0, 6).map(item => 
                    <Product item={item} key={item.id} />)
            }
            
        </Container>
    )
}

export default Products
