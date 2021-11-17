import React from 'react'
import styled from 'styled-components'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;    
    position: relative;
    background: coral;
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
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
`

const Image = styled.img`
    height: 80%;
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
`

const Slider = () => {
    return (
        <Container>
            <Arrow direction="left"> 
                <ArrowLeftOutlined />
            </Arrow>

            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="/assets/banner/nike_main_banner.jpeg" />
                    </ImgContainer>

                    <InfoContainer>
                        <Title>The Best of Air Max</Title>
                        <Description>Featuring the OG’s ripple design that was inspired by Japanese bullet trains, the Nike Air Max 97 lets you push your style full speed ahead.</Description>
                        <Button>Shop</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right">
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider
