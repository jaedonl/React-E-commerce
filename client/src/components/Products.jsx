import React, { useState, useEffect} from 'react'
import axios from "axios";
import styled from 'styled-components';
import { popularProducts } from '../data'
import Product from './Product'
import {mobile} from '../responsive'
import {tablet} from '../responsive'

const Container = styled.div`
    padding: 20px;
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
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => { 
        const getProducts = async () => {
            try {
                const res = 
                    await axios.get( 
                        category 
                        ? `http://localhost:8000/api/products?category=${category}` 
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
            products.filter(item => 
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
            { category 
                ? filteredProducts.map(element => 
                    <Product item={element} key={element.id} />)
                : products.map(element => 
                    <Product item={element} key={element.id} />)
            }
            
        </Container>
    )
}

export default Products
