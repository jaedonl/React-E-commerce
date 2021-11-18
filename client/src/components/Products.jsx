import React from 'react'
import styled from 'styled-components';
import { popularProducts } from '../data'
import Product from './Product'

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
`

const Products = () => {
    return (
        <Container>
            {popularProducts.map(element => (
                <Product item={element} key={element.id} />
            ))}
            
        </Container>
    )
}

export default Products
