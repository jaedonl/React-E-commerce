import React, {useState, useEffect, useMemo} from 'react'
import { Link, useLocation } from "react-router-dom";
import './Product.scss'
import Chart from "../../components/chart/Chart"
import { productData } from "../../dummyData"
import { Publish } from "@material-ui/icons";
import { useSelector, useDispatch } from 'react-redux';
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls"


const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split("/")[2]    
    const product = useSelector((state) => 
        state.product.products.find(product => product._id === productId)
    )
    const dispatch = useDispatch()
    const [updateProductInfo, setUpdateProductInfo] = useState(product)
    const [pStats, setPStats] = useState([])

    const MONTHS = useMemo(
        () => [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ], 
        []
    )

    useEffect(() => {
        const getStats = async () => {
            try {
                const res = await userRequest.get("orders/income?pid=" + productId);
                const list = res.data.sort((a,b)=>{
                    return a._id - b._id
                })
                list.map((item) =>
                    setPStats((prev) => [
                            ...prev,
                            { name: MONTHS[item._id - 1], Sales: item.total },
                        ])
                );
            } catch (err) {
                console.log(err);
            }
        };
        getStats();
    }, [productId, MONTHS]);

    
    const handleChange = (e) => {        
        setUpdateProductInfo(prev=> {
            return { 
                ...prev, 
                [e.target.name]: e.target.value 
            }
        })
    }

    const handleSubmit = (e) => {                   
        e.preventDefault()
        updateProduct(productId, updateProductInfo, dispatch)
    }

 
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newproduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={pStats} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src={product.img} alt="" className="productInfoImg" />
                        <span className="productName">{product.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey" style={{marginRight: "10px"}}>id:</span>
                            <span className="productInfoValue">{product._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey" style={{marginRight: "10px"}}>category:</span>
                            <span className="productInfoValue">{product.categories}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey" style={{marginRight: "10px"}}>sales:</span>
                            <span className="productInfoValue">5123</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey" style={{marginRight: "10px"}}>in stock:</span>
                            <span className="productInfoValue">{product.inStock ? "yes" : "no"}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type="text" name="title" value={updateProductInfo.title} onChange={handleChange} />
                        
                        <label>Product Description</label>
                        <textarea type="text" name="desc" rows="4" value={updateProductInfo.desc} onChange={handleChange} />

                        <label>Product Price</label>                        
                        <input type="number" name="price" value={updateProductInfo.price} className="productPriceInput" onChange={handleChange} />
                        
                        <label>In Stock</label>
                        <select name="inStock" id="idStock">
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src={updateProductInfo.img} alt="" className="productUploadImg" />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display:"none"}} />
                        </div>
                        <button className="productButton" onClick={handleSubmit}>Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
