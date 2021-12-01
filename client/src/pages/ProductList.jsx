import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from "react-router-dom";
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from '../responsive';
import { categories } from '../data';

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
    const history = useHistory()
    const category = location.pathname.split("/")[2]
    const [filters, setFilters] = useState({})
    const [sort, setSort] = useState("newest")
    
    let splitted = location.pathname.split("/")        
    let x

    const handleFilters = (e) => {
        const value = e.target.value
        const valueType = e.target.name

        if(valueType === "type" && value !== category) {
            splitted.splice(splitted.length-1, splitted.length, value)
            x = splitted.join('/')

            history.push(x)
            window.location.reload()
        }

        setFilters({
            ...filters,
            [e.target.name]: value 
        })        
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title><span style={{textTransform:"capitalize"}}>{category.replace("-", " ")}</span></Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="type" onChange={handleFilters} style={{textTransform: "capitalize"}}>
                        { categories.map(option =>          
                            option.category === category 
                                ? <Option disabled selected>{option.category}</Option> 
                                : <Option>{option.category}</Option>
                        )}

                        {/* <Option disabled selected>select</Option>
                        <Option>jordan</Option>
                        <Option>force</Option>                        
                        <Option>max</Option>
                        <Option>vapormax</Option>
                        <Option>dunk</Option>
                        <Option>blazer</Option>                        
                        <Option>basketball</Option> */}
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
