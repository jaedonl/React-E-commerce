import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    position: relative;    
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;  
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: .5;
    z-index: 2;
`

const Wrapper = styled.div`
    height: 100%;    
    display: flex;    
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all .7s ease;
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    background-color: #${props => props.bg};
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;    
`

const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
    line-height: 1;
`

const Description = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: 2px solid #000;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)    

    const handleClick = (direction) => {        
        if (direction === 'left') {
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : sliderItems.length-1)
        } else {
            setSlideIndex(slideIndex < sliderItems.length-1 ? slideIndex+1 : 0)
        }
    }
    
    useEffect(() => {
        console.log(slideIndex ,sliderItems.length-1);
    })

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")} >  
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper className="sliderWrapper" slideIndex={slideIndex}>
                {sliderItems.map(element => (
                    <Slide bg={element.bg} key={element.id}>
                        <ImgContainer>
                            <Image src={element.img}/>
                        </ImgContainer>

                        <InfoContainer>
                            <Title>{element.title}</Title>
                            <Description>{element.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
