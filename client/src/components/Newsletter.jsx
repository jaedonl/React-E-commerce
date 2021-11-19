import React from 'react'
import styled from 'styled-components'
import { Send } from "@material-ui/icons";


const Container = styled.div`
    margin: 20px 0;
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Title = styled.h1`
    font-size: 70px;
    margin-bottom: 20px;
`

const Desc = styled.div`
    font-size: 24px;
    font-weight: 3;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    border: 1px solid #eee;
    padding-left: 20px;    
`

const Input = styled.input`    
    flex: 8;
    border: none;
    
    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: #fff;
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>See what’s dropping next and set notifications for the pairs you want most.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send/>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter
