import { useNavigate } from "react-router-dom"

export default function ProductCard({ productList }) {
    const navigate = useNavigate();
    const navigateToVieMore=(product)=>{
        navigate("/view-more",{state:{param:product}});
    }
    return <>
        {productList.map((product, index) => <div key={index} className="col-md-4 p-4 mb-3" style={{boxShadow: "10px 10px 10px black"}}>
            <img src={product.thumbnail} style={{ width: "100%", height: "400px" }} />
            <h1 className="text-center">{product.title}</h1>
            <h4 className="text-center">Price :<del>{product.price}</del><span className="text-success">{product.price - ((product.price * product.discountPercentage) / 100)}</span></h4>
            <p className="text-center"><a onClick={()=>navigateToVieMore(product)}  style={{cursor:"pointer"}} >View More</a></p>
    </div>)
} 
    </>
}