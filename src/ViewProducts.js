import { useRef } from "react";
import { useLocation } from "react-router-dom"

export default function ViewProduct(){
    let mainImage=useRef(null);
    const location = useLocation();
    let product = location.state.param;

    const swapImage = (currentImageUrl, index)=>{
        let currentImage = document.getElementById("img"+index);
        let temp = mainImage.current.src;
        mainImage.current.src= currentImageUrl;
        currentImage.src= temp;
    }
    return <>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <img ref={mainImage} src={product.thumbnail} style={{width:"100%", height:"500px"}} />
                    <div className="d-flex mt-2 ">
                        {product.images.map((productUrl, index)=><div key={index} className="p-3 mb-3" style={{boxShadow:"5px 5px 5px black"}}>
                            <img id={"img"+index} onClick={()=>swapImage(productUrl, index)} src={productUrl} width="100%" height="100%" />
                        </div>)}
                    </div>
                </div>
                <div className="col-md-5 offset-1 p-3">
                    <h2 className="text-success">{product.title}</h2>
                    <br/>
                    <h1><span className="text-danger">-{product.discountPercentage}%</span>   ₹ {product.price - ((product.price * product.discountPercentage) / 100)}</h1>
                    <h4 className="text-success">M.R.P. ₹<del>{product.price}</del></h4>
                    <br/>
                    <h3 className="text-primary">Brand : {product.brand}</h3>
                    <h6>Product description : {product.description}</h6>
                    <br/>
                    <h6>Product category : {product.category}</h6>
                    <br/><br/>
                    <button className="btn btn-warning form-control">Add To Cart</button>

                </div>
            </div>
        </div>
    </>
}