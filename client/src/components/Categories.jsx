import React from 'react'
import styled from 'styled-components';
import { categories } from '../data'
import CategoryItem from './CategoryItem';

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 3px;
    display: flex;
    justify-content: space-between;    
    padding: 20px;

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
