import React from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {mobile} from '../responsive'

const Container = styled.div`
    flex: 1 1 20%;
    margin: 3px;
    height: 70vh;
    max-height: 500px;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    max-height: 500px;
    object-fit: cover;
    ${mobile({ height: "30vh" })}
`
const Info = styled.div`
    position: absolute;    
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`
const Button = styled.button`
    border: none;
    padding: 10px; 
    background-color: #fff;
    color: gray;
    cursor: pointer;
    font-weight: 600;
`
const CategoryItem = ({item}) => {
    return (
        <Container>
            <Link to={`/products/${item.category}`}>
                <Image src={item.img} />
                <Info>
                    <Title>{item.title}</Title>
                    <Button>SHOP NOW</Button>
                </Info>
            </Link>
            
        </Container>
    )
}

export default CategoryItem
