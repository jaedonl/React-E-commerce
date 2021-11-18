import React from 'react'
import styled from 'styled-components';
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
    /* max-width: 1500px;
    margin: 0 auto; */
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
