import React, {useState, useEffect} from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from '../responsive'
import { useSelector, useDispatch } from "react-redux";
import { userRequest } from '../requestMethods'
import StripeCheckout from 'react-stripe-checkout'
import { clear } from '../redux/cartRedux'

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div``
const Wrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: "10px" })}
`
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;

    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "#000" : "transparent"};
    color: ${props => props.type === "filled" && "#fff"};
    
`
const TopTexts = styled.div`
    ${mobile({ display: "none" })}
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
`
const Info = styled.div`
    flex: 3;
`
const Product = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ margin: "10px 0" })}
`
const ProductInfo = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;    
    ${mobile({ width: "135px", objectFit: "cover" })}
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    ${mobile({ padding: "10px" })}
`
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColorWrapper = styled.div`
    display: flex;    
`
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color };
    margin-right: 3px;
`
const ProductSize = styled.span`
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${mobile({ flex: "none" })}
`
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    ${mobile({ fontSize: "1em" })}
`
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;  
    ${mobile({ margin: "5px 15px" })}
`
const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ fontSize: "24px" })}
`
const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 5px;
    padding: 20px;
    height: 50vh;
`
const SummaryTitle = styled.h1`
    font-weight: 200;
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === "total" && "500"};
    font-size: ${(props) => props.type === "total" && "24px"};
`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`


const Cart = () => {
    const location = useLocation()
    const cart = useSelector((state) => state.cart)
    const [stripeToken, setStripeToken] = useState(null)
    const history = useHistory()
    const dispatch = useDispatch()


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    const onToken = (token) => {
        setStripeToken(token)
    }

    const clearCart = () => {
        dispatch(
            clear()
        )        
    }
    
    useEffect(() => {        
        const makeRequest = async () => {
            try {
                const res = await userRequest.post("/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: cart.total * 100,
                })
                history.push("/success", {
                    stripeData: res.data,
                    products: cart,
                })
            } catch (err) {console.log(err)}
        }
        if(stripeToken) makeRequest()        
    }, [stripeToken, cart.total, history])
    

    return (
        <Container>
            <Announcement/>
            <Navbar/>            
            
            <Wrapper>
                <Title>YOUR BAG</Title>
                <Top>
                    <TopButton>CONTINUE SHOPPING</TopButton>
                    <TopTexts>
                        <TopText>Shopping Bag({cart.quantity})</TopText>
                        <TopText>Wishlist (0)</TopText>
                    </TopTexts>                    
                    <TopButton type="filled">CHECKOUT</TopButton>
                </Top>
                
                <Bottom>
                    <Info>
                        { cart.products.map((product, index) => (
                            <Product key={index}>
                                <ProductInfo>
                                    <Image src={product.img} />
                                    <Details>
                                        <ProductName><b>Product:</b> {product.title}</ProductName>
                                        <ProductId><b>ID:</b> {product._id}</ProductId>
                                        <ProductColorWrapper>
                                            { product.color?.map((c, idx) => 
                                                <ProductColor color={c} key={idx}/>                                            
                                            )}    
                                        </ProductColorWrapper>
                                       
                                        
                                        <ProductSize><b>Size: </b> {product.size}</ProductSize>
                                    </Details>
                                </ProductInfo>

                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{product.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>$ {product.price * product.quantity}</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))
                        
                        }
                        <Hr />
                    </Info>
                    <Summary>
                        <SummaryTitle>ORDER SUMMARY</SummaryTitle>

                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Estimated Shipping</SummaryItemText>
                            <SummaryItemPrice>$ 6.00</SummaryItemPrice>
                        </SummaryItem>

                        <SummaryItem>
                            <SummaryItemText>Shipping Discount</SummaryItemText>
                            <SummaryItemPrice>$ -6.00</SummaryItemPrice>
                        </SummaryItem>
                        
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
                        </SummaryItem>

                        <StripeCheckout
                            name="JdonL Shop"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total*100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <Button>CHECKOUT NOW</Button>                            
                        </StripeCheckout>
                        <Button onClick={clearCart}>Clear Cart</Button>
                    </Summary>
                </Bottom>
            </Wrapper>

            <Footer/>
        </Container>
    )
}

export default Cart
