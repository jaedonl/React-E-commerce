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
                const res = await axios.get('http://localhost:8000/api/products')
                console.log(res)
            } catch (err) {
                console.log(err)
            }
        }
        getProducts()
    }, [category])

    return (
        <Container>
            {popularProducts.map(element => (
                <Product item={element} key={element.id} />
            ))}
            
        </Container>
    )
}

export default Products
