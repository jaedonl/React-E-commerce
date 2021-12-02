import React, {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Announcement from '../components/Announcement'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from "@material-ui/icons";
import { mobile, tablet } from '../responsive'
import { publicRequest } from '../requestMethods';
import { addProduct } from '../redux/cartRedux'
import { useDispatch } from 'react-redux'


const Container = styled.div`        
`
const Wrapper = styled.div`
    padding: 50px 20px;
    display: grid;
    grid-template-columns: 5fr 3fr;
    grid-gap: 20px;
    justify-content: space-between;
    ${mobile({ padding: "10px", gridTemplateColumns: "1fr" })}
`
const ImgContainer = styled.div`
`
const Image = styled.img`
    width: 100%;
    height: 75vh;
    object-fit: cover;
    ${mobile({ height: "45vh" })}
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
    /* display: grid;
    grid-template-columns: 1fr 1fr; */
    width: 50%;
    display: flex;
    justify-content: space-between;    
    margin: 30px 0px;
    ${tablet({ width: "100%" })}
    ${mobile({ width: "100%" })}
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
    border: 1px solid #bbb;
    background-color: ${props=> props.color};
    margin: 0px 0px 0px 5px ;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
`
const AddContainer = styled.div`    
    width: 50%;
    display: flex;
    align-items: center;   
    justify-content: space-between;
    ${tablet({ width: "100%" })}
    ${mobile({ width: "100%" })}
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
    padding: 10px;
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
    const location = useLocation()
    const productId = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)    
    const [size, setSize] = useState("")  
    const dispatch = useDispatch()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + productId)
                setProduct(res.data)                         
                setSize(res.data.size[0])                
                
            } catch(err) {console.log(err)}
        }
        getProduct()
    }, [productId]);        
    
    
    const addToCart = () => {
        dispatch(
            addProduct({ ...product, quantity, size })
        )        
    }

    return (
        <Container>
            <Announcement/>
            <Navbar/>
            
            <Wrapper>
                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>

                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>$ {product.price}</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Theme Color</FilterTitle>           
                                { product.color?.map((c, idx) => 
                                    <FilterColor color={c} key={idx} />
                                )}                                                    
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize onChange={(e) => setSize(e.target.value)}> 
                                    { product.size?.map((s) => 
                                        <FilterSizeOption key={s}>{s}</FilterSizeOption>
                                    )}                                

                                {/* <FilterSizeOption>7</FilterSizeOption>
                                <FilterSizeOption>8</FilterSizeOption>
                                <FilterSizeOption>9</FilterSizeOption>
                                <FilterSizeOption>10</FilterSizeOption>
                                <FilterSizeOption>11</FilterSizeOption> */}
                            </FilterSize>                            
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={(e) => quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)} />
                            <Amount>{quantity}</Amount>
                            <Add onClick={(e) => setQuantity(quantity + 1)} />
                        </AmountContainer>
                        <Button onClick={addToCart}>ADD TO CART</Button>
                    </AddContainer>

                </InfoContainer>
            </Wrapper>

            <Newsletter/>
            <Footer/>
        </Container>
    )
}

export default ProductDetail
