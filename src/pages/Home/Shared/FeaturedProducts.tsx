import { useGetProductsQuery } from "../../../redux/api/api";
import { Rating } from '@smastrom/react-rating'
import { Link } from "react-router-dom";

interface IProductFormData {
    _id:string,
    title: string;
    rating: number;
    brand: string;
    price: number;
    description: string;
    available_quantity: number;
    image: string;
  }
const FeaturedProducts = () => {
    const { data } = useGetProductsQuery(undefined);
   // Initial value
    return (
        <div className="mt-10">
        <h2 className="text-4xl font-bold text-center my-12">Featured Products</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {
                data?.map((products:IProductFormData,index:number)=>
                    index<=5 && <>
                    <div className="card bg-base-100 w-96 shadow-xl mx-auto my-5">
                    <figure>
                        <img className="h-56 w-96"
                        src={products.image}
                        alt={products.title} />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{products.title}</h2>
                        <p>Brand:{products.brand}</p>
                        <p>Quantity:{products.available_quantity}</p>
                        <p>Price:${products.price}</p>
                        <Rating style={{ maxWidth: 150 }} readOnly={true} value={products.rating}/>
                        <div className="card-actions justify-end">
                        <Link className="btn btn-primary" to={`/product/${products._id}`}>See details</Link>
                        </div>
                    </div>
                </div>
                    
                    </>
                )
            }

        </div>
        </div>
    );
};

export default FeaturedProducts;