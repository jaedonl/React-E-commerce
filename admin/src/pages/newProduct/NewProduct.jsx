import React, { useState }  from 'react'
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import './NewProduct.scss'

const NewProduct = () => {
    const [inputs, setInputs] = useState({});
    const [file, setFile] = useState(null);
    const [cat, setCat] = useState([]);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setInputs((prev) => {
            return { ...prev, [e.target.name]: e.target.value}
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        addProduct(inputs, dispatch)
    }

    return (
        <div className="newProduct">
            <h1 className="addProductTitle">New Product</h1>
            <form className="addProductForm">
                <div className="addProductItem">
                    <label>Image URL</label>
                    {/* <input type="file" id="file" /> */}
                    <input type="text" name="img" placeholder="/assets/shoes/..." onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Title</label>
                    <input type="text" name="title" placeholder="Product title" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Description</label>
                    <input type="text" name="desc" placeholder="Product description" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Price</label>
                    <input type="number" name="price" placeholder="0" onChange={handleChange} />
                </div>
                <div className="addProductItem">
                    <label>Categories</label>
                    <select name="category" onChange={handleChange}>
                        <option disabled selected>choose type</option>
                        <option value="air-jordan">air-jordan</option>
                        <option value="air-force">air-force</option>                        
                        <option value="air-max">air-max</option>
                        <option value="air-vapormax">air-vapormax</option>
                        <option value="nike-dunk">nike-dunk</option>
                        <option value="nike-blazer">air-blazer</option>
                        <option value="basketball">basketball</option>                                                                                                
                    </select>
                </div>
                <div className="addProductItem">
                    <label>Stock</label>
                    <select name="inStock"onChange={handleChange} >
                        <option value="true" selected>Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>                
                <button className="addProductButton" onClick={handleClick}>Create</button>
            </form>
        </div>
    )
}

export default NewProduct
