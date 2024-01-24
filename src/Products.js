import { useEffect, useState } from "react"
import axios  from "axios"
import ProductCard from "./ProductCard"

export default function Products(){
    const[productList, setProductList] = useState([]);
   useEffect(()=>{
    axios.get("https://dummyjson.com/products?limit=100")
    .then(response=>{
        console.log(response.data);
        setProductList(response.data.products);
    }).catch(err=>{
        console.log(err);
    })
   },[]) 
    return <>
     <div className="container-fluid mt-5 ">
        <div className="row">
            <ProductCard productList={productList} />
        </div>
     </div>
    </>
}