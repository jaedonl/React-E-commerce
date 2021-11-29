import React, { useState, useEffect } from 'react'
import { useLocation } from "react-router-dom";
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
    const location = useLocation()
    const category = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value
        setFilters({
            ...filters,
            [e.target.name]: value 
        })
        
    }
    
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Shoes</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="type" onChange={handleFilters}>
                        <Option disabled>Series</Option>
                        <Option>Air Jordan</Option>
                        <Option>Air Force</Option>                        
                        <Option>Air Max</Option>
                        <Option>Air Vapormax</Option>
                        <Option>Dunk</Option>
                        <Option>Blazer</Option>                        
                        <Option>Basketball</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters}>
                        <Option disabled>Size</Option>
                        <Option>7</Option>
                        <Option>8</Option> 
                        <Option>9</Option>
                        <Option>10</Option>
                        <Option>11</Option>
                    </Select>
                </Filter>
                
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (Asc)</Option> 
                        <Option value="desc">Price (Desc)</Option> 
                    </Select>
                </Filter>
            </FilterContainer> 
            <Products category={category} filters={filters} sort={sort} />
            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductList
