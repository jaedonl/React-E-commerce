import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './ProductList.scss'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";

const ProductList = () => {
    const [data, setData] = useState(productRows)

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: "id", headerName: "ID", width: 90 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {            
            return (
              <div className="productListItem">
                <img className="productListImg" src={params.row.img} alt="" />
                {params.row.name}
              </div>
            );
          },
        },
        { field: "stock", headerName: "Stock", width: 200 },
        {
          field: "status",
          headerName: "Status",
          width: 120,
        },
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
                <Link to={"/products/" + params.row.id}>
                  <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline
                  className="productListDelete"
                  onClick={() => handleDelete(params.row.id)}
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
            <DataGrid rows={data} columns={columns} pageSize={10} checkboxSelection disableSelectionOnClick />
        </div>
    )
}

export default ProductList

