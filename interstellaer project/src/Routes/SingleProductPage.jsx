import { useEffect, useState } from "react"
import axios from "axios";
import { useParams } from "react-router-dom";
function SingleProductPage(){

    const [value,setvalue]=useState("");
    const { id } = useParams(); 

    const handleget=()=>{
        axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
        .then(response => {
            setvalue(response.data);
            console.log(response.data);
        })
    }

    useEffect(()=>{
        handleget();
    },[id]);

    return (
        <div data-testid="products-container">   
            <div>

                
                <h3 data-testid="product-brand">{value.data?.brand}</h3>
            </div>
            <div >
            <img data-testid="product-image" src={value.data?.img} alt={value.data?.brand} />
            </div>
            <div data-testid="product-category">
                <h3>{value.data?.category}</h3>
            </div>
           
            <div data-testid="product-details">
                <h3>{value.data?.details}</h3>
            </div>
            <div data-testid="product-price">
                <h3>{value.data?.price}</h3>
            </div>

            </div>
    )
}
export default SingleProductPage