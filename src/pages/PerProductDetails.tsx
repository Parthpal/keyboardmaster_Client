import { Rating } from "@smastrom/react-rating";
import { useParams } from "react-router-dom";
import { useAddToCartMutation, useGetProductsQuery } from "../redux/api/api";
import { FormEvent } from "react";
import Swal from "sweetalert2";

const PerProductDetails = () => {
    const{id}=useParams();
    const { data, isSuccess} = useGetProductsQuery(undefined);
    const [addToCart]=useAddToCartMutation(undefined);
    const filteredData=data?.filter((product: { _id: string | undefined; })=>product?._id===id)   ;
    if (!filteredData) {
        return <div className="flex justify-center align-middle">
                    <span className="loading loading-spinner loading-lg"></span>
        </div>
        // Show a loading message until data is available
      }
    const handleCartData=(e:FormEvent)=>{
        e.preventDefault();
        //console.log(filteredData[0]);
        const data={
            product_id:filteredData[0]._id,
            product_image:filteredData[0].image,
            product_title:filteredData[0].title,
            product_brand:filteredData[0].brand,
            product_available_quantity:filteredData[0].available_quantity,
            product_price:filteredData[0].price,
            product_rating:filteredData[0].rating,
            product_purchase_quantity:1,
            product_description:filteredData[0].description
        }
        addToCart(data);
        if(isSuccess){
            Swal.fire({
                title: "Product Added!",
                text: "Product Added to the Cart",
                icon: "success"
              });
        }

    }
    return (
        <div className="flex justify-center align-middle mx-10 mt-10">
            <div className="card card-side grid grid-cols-2 sm:grid-cols-2 bg-base-100 shadow-xl">
            <figure className="flex-1">
                <img className="h-full"
                src={filteredData[0].image}
                alt={filteredData[0].title} />
            </figure>
            <div className="card-body flex-1">
            <h2 className="card-title">Title:{filteredData[0].title}</h2>
                            <p><span className="font-semibold">Brand:</span>{filteredData[0].brand}</p>
                            <p><span className="font-semibold">Quantity:</span>{filteredData[0].available_quantity}</p>
                            <p><span className="font-semibold">Price:</span>${filteredData[0].price}</p>
                            <p>{filteredData[0].description}</p>
                           <div>
                           <p className="font-semibold">Overall Rating</p>
                           <Rating style={{ maxWidth: 150 }} readOnly={true} value={filteredData[0].rating} />
            </div>
                            
                <div className="card-actions justify-end">
                <button onClick={handleCartData} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default PerProductDetails;