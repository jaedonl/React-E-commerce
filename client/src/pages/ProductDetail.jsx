import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'


const Container = styled.div`        
`

const Wrapper = styled.div`
    padding: 50px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    justify-content: space-between;
`

const ImgContainer = styled.div`
    /* border: 3px solid #ccc; */
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
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
`

const FilterSize = styled.select`
    
`

const FilterSizeOption = styled.option`
    
`

const ProductDetail = () => {
        
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <ImgContainer>
                    <Image src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/ec602aa2-b8e6-4a6e-97fe-9ed8e7febb87/dunk-high-womens-shoes-L3Tqlr.png" />
                </ImgContainer>

                <InfoContainer>
                    <Title>Nike Dunk High</Title>
                    <Desc>Created for the hardwood but taken to the streets, the '80s b-ball icon returns with crisp leather and retro colors. The classic hoops design channels '80s vintage back onto the streets while the padded, high-top collar adds an old-school look rooted to comfort.</Desc>
                    <Price>$ 110</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="One color" />  
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
                </InfoContainer>
            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductDetail
