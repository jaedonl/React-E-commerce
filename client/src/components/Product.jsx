import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AddShoppingCart, Search, FavoriteBorder } from "@material-ui/icons";


const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s ease;
`
const Container = styled.div`
    /* flex: 1; */
    /* margin: 5px; */
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Info} {
        opacity: 1;
    }
`
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
`
const Image = styled.img`
    /* height: 75%; */
    height: 100%;
    width: 100%;
    object-fit: cover;
    z-index: 2;
`
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex; 
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.3s ease;

    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
        cursor: pointer;
    }
`

const Product = ({item}) => {
    return (
        <Container>
            <Circle/>
            <Image src={item.img} />
            <Info>
                <Icon>
                    <AddShoppingCart/>
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <Search/>
                    </Link>                    
                </Icon>
                <Icon>
                    <FavoriteBorder/>
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
