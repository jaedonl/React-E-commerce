import React from 'react'
import styled from 'styled-components'

const Container = styled.div`        
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
        ),
        url("https://static.nike.com/a/images/f_auto/dpr_1.0,cs_srgb/w_300,c_limit/749dfc62-3208-4f71-9887-316a406e5958/nike-membership.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`        
    font-size: 24px;
    font-weight: 300;
`

const Wrapper = styled.div`        
    width: 40%;
    padding: 20px;
    background-color: white;

`

const Form = styled.form`        
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`

const Input = styled.input`        
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Agreement = styled.div`      
    font-size: 12px;
    margin: 20px 0px;  
`

const Button = styled.button`  
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`

const Link = styled.a`  
    margin: 5px 0;
    font-size: 12px;
    cursor: pointer;    
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>SIGN UP</Title>
                <Form>
                    <Input placeholder="username"/>
                    <Input placeholder="password" type="password" />
                    <Agreement>
                        By logging in, you agree to JdonL's <u><b>Privacy Policy</b></u> and <u><b>Terms of Use</b></u>.
                    </Agreement>
                    <Button>SIGN IN</Button>

                    <Link>Forgot password? <u>Click here.</u></Link>
                    <Link>Don't have an account? <u>Join us.</u></Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
