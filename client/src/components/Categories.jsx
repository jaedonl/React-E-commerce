import React from 'react'
import styled from 'styled-components';
import { categories } from '../data'
import CategoryItem from './CategoryItem';
import {mobile} from '../responsive'

const Container = styled.div`
    max-width: 1350px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    /* max-width: 1500px;
    margin: 0 auto; */
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Categories = () => {
    return (
        <Container>
            {categories.map(element => (
                <CategoryItem item={element} />
            ))}
        </Container>
    )
}

export default Categories
