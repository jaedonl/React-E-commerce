import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";


const Container = styled.div`        
`

const Wrapper = styled.div`
    padding: 50px 20px;
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-gap: 20px;
    justify-content: space-between;
`

const ImgContainer = styled.div`
    /* border: 3px solid #ccc; */
`

const Image = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: cover;
`

const InfoContainer = styled.div` 
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;        
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`        
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: space-between;    
    margin: 30px 0px;
`

const Filter = styled.div`
    display: flex;
    align-items: center;
`

const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;    
`

const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
`

const FilterSize = styled.select`
    margin: 10px;
    padding: 5px;
`

const FilterSizeOption = styled.option`
`

const AddContainer = styled.div`    
    display: flex;
    align-items: center;        
`

const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-right: 50px;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid #555;
    background-color: #fff;
    font-weight: 500;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        background-color: #555;
        color: #fff;
    }
`


const ProductDetail = () => {
        
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <ImgContainer>
                    <Image src="/assets/shoes/dunk_high.jpg" />
                </ImgContainer>

                <InfoContainer>
                    <Title>Nike Dunk High</Title>
                    <Desc>Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp leather and retro colors. The classic hoops design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.</Desc>
                    <Price>$ 110</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="orange" />  
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>7</FilterSizeOption>
                                <FilterSizeOption>8</FilterSizeOption>
                                <FilterSizeOption>9</FilterSizeOption>
                                <FilterSizeOption>10</FilterSizeOption>
                                <FilterSizeOption>11</FilterSizeOption>
                            </FilterSize>                            
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductDetail
