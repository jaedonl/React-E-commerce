import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import {  } from "@material-ui/icons";

const Container = styled.div`

`

const Wrapper = styled.div`
    padding: 20px;
`

const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "#000" : "transparent"};
    color: ${props => props.type === "filled" && "#fff"};
    
`

const TopTexts = styled.div`
`

const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`

`

const Info = styled.div`

`

const Summary = styled.div`

`
const Cart = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>            
            
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag(2)</TopText>
                        <TopText>Wishlist (0)</TopText>
                    </TopTexts>                    
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                
                <Bottom>
                    <Info>info</Info>
                    <Summary>summary</Summary>
                </Bottom>
            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Cart
