import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from '../responsive';

const Container = styled.div``

const Title = styled.h1`
    margin: 50px 20px 20px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 20px;
    ${mobile({ margin: "0px 20px", display: "flex", flexDirection:"column" })}
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`

const Select = styled.select`
    padding: 10px;    
    margin-right: 20px;
    ${mobile({ margin: "5px 0px" })}
`

const Option = styled.option`
`


const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Shoes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option disabled selected>Series</Option>
                        <Option>Air Jordan</Option>
                        <Option>Air Force</Option>                        
                        <Option>Air Max</Option>
                        <Option>Air Vapormax</Option>
                        <Option>Dunk</Option>
                        <Option>Blazer</Option>                        
                        <Option>Basketball</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>7</Option>
                        <Option>8</Option> 
                        <Option>9</Option>
                        <Option>10</Option>
                        <Option>11</Option>
                    </Select>
                </Filter>
                
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option>Price (Asc)</Option> 
                        <Option>Price (Desc)</Option> 
                    </Select>
                </Filter>
            </FilterContainer> 
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
