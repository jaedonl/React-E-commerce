import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import './ProductList.scss'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, deleteProduct } from "../../redux/apiCalls"


const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.products)

    useEffect(() => {
        getProducts(dispatch)
    }, [dispatch])

    const handleDelete = (id) => {
      deleteProduct(id, dispatch)
    };

    const columns = [
        { field: "_id", headerName: "ID", width: 220 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {            
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.title}
              </div>
            );
          },
        },
        { field: "inStock", headerName: "Stock", width: 200 },
        {
            field: "price",
            headerName: "Price",
            width: 160,
          },
        {
          field: "action",
          headerName: " ",
          width: 150,
          renderCell: (params) => {
            return (
              <>
                <Link to={"/products/" + params.row._id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row._id)}
                />
              </>
            );
          },
        },
    ];   


    return (
        <div className="productList">
            <div className="productListAddButton">
                <h1 className="productListTitle">Product List</h1>
                <Link to="/products/newproduct">
                    <button className="newProductButton">Create</button>
                </Link>              
            </div>
            <DataGrid 
              rows={products} 
              columns={columns} 
              getRowId={(row) => row._id}
              pageSize={10} 
              checkboxSelection 
              disableSelectionOnClick />
        </div>
    )
}

export default ProductList

