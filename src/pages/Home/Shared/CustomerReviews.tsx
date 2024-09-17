import { useEffect, useState } from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

interface ICustomerReviews{
    name:string,
    review:string,
    rating:number,
    image:string
}
const CustomerReviews = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        // Fetch data from API
        const fetchData = async () => {
          try {
            const response = await fetch("customerReviews.json");
            const result = await response.json();
            setData(result); // Set the fetched data
           // console.log(data);
            
          } catch (error) {
            console.error("Error fetching data:", error);
          } 
        };
    
        fetchData();
      }, []);
    return (<>
    <h2 className="text-4xl font-bold text-center my-12">Client Reviews</h2>
     <div className="p-8 carousel rounded-box gap-5 py-3 ">
        {
            data.map((datas:ICustomerReviews)=>
            <div className="carousel-item">
                <div className="card bg-base-100 shadow-xl">
                    <div className="card-body">
                            <div className="avatar">
                                <div className="w-12 rounded-xl">
                                    <img src={datas.image}/>
                                </div>
                            </div>
                            <h2 className="card-title">{datas.name}</h2>
                            <p>{datas.review}</p>
                            <Rating style={{ maxWidth: 250 }} readOnly={true} value={datas.rating} />
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                    </div>
                </div>
            </div>      
            )
        }
        </div>
    </>);
};

export default CustomerReviews;