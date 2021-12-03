import React from 'react'
import styled from "styled-components"
import { Facebook, Instagram, Twitter, Pinterest, Room, Phone, MailOutline } from "@material-ui/icons";
import { mobile } from '../responsive';

const Container = styled.div`
    max-width: 1350px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    ${mobile({ gridTemplateColumns: "1fr", gridGap: "10px" })}
`

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;

`

const Logo = styled.h1`
`

const Desc = styled.p`
    margin: 20px 0;
`

const SocialContainer = styled.div`
    display: flex;
    align-items: center;    
`

const SocialIcon = styled.div`
    width: 35px;
    height: 35px;
    color: #fff;
    background-color: #${props => props.color};
    border-radius: 50%;        
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;    
`

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`

const ListItem = styled.li`
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
`

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

const Payment = styled.img`
    width: 50%;
`

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>JdonL.</Logo>
                <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae hendrerit elit. Praesent pulvinar nibh id vulputate rhoncus.</Desc>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook/>
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram/>
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter/>
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest/>
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>All Kicks</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}} />123 New York, New York 10010                    
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}} />+1 123 123 1234                    
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} />jyjd6404@gmail.com                    
                </ContactItem>

                <Payment src="/assets/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
