import { useState } from "react";
import { useGetProductsQuery } from "../redux/api/api";
import AllProduct from "./AllProduct";
import ReactSlider from "react-slider";
interface IProductForm {
  _id:string,
  title: string;
  rating: number;
  brand: string;
  price: number;
  description: string;
  available_quantity: number;
  image: string;
}
const Products = () => {
    const { data } = useGetProductsQuery(undefined);
    //const [products,setProducts]=useState([]);
    const [displayProducts,setDisplayProducts]=useState<IProductForm[]>([]);
    //const [rating, setRating] = useState(0) // Initial value
    const [sliderValue,setSliderValue]=useState(0);

  // console.log(data);
  function handleSearchClick(searchVal2: string) { 
    if (searchVal2 === "") 
    { 
        setDisplayProducts(data); 
        return; 
    }  
    const filterBySearch = data.filter((item: { title: string; }) => { 
        if (item.title.toLowerCase() 
            .includes(searchVal2.toLowerCase())) 
            {
                 return item;
            }
        else{
            return setDisplayProducts(data); 
        }     
    }) 
    setDisplayProducts(filterBySearch); 
}

const handleSliderChange=(range: number)=>{
 setSliderValue(range);
 const filterData=data.filter((products:IProductForm)=>products.price <= range)
 setDisplayProducts(filterData);
}
const highToLow=()=>{
    //The spread operator (...) creates a shallow copy of the data array. This ensures that you are not directly modifying the original data array when sorting.
    const newData=[...data];
    const sortedData= newData?.sort((a,b)=>parseFloat(b.price)-parseFloat(a.price));
    setDisplayProducts(sortedData);
}
const lowToHigh=()=>{
    const newData=[...data];
    const sortedData= newData?.sort((a,b)=>parseFloat(a.price)-parseFloat(b.price));
    setDisplayProducts(sortedData);
}
const clearFilter=()=>{
    setDisplayProducts(data);
    setSliderValue(0);
}
    return (<>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Open Filtering
    </label>
    <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <div className="mt-10">
            {
                displayProducts.length>0 ? 
                <AllProduct product={displayProducts}></AllProduct>:
                <AllProduct product={data}></AllProduct>
            }

        </div>

  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
        <ReactSlider
        value={sliderValue}
        min={0}
        max={200}
        onChange={handleSliderChange}
        className="horizontal-slider"
        thumbClassName="bg-blue-700 w-6 h-6 text-center text-white"
        trackClassName="bg-gray-300 h-6 text-center"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
    />
    <select className="select select-bordered w-full max-w-xs mt-10">
    <option disabled selected>Sort Product</option>
    <option onClick={highToLow}>High to low</option>
    <option onClick={lowToHigh}>Low to High</option>
    </select>
    <div className="my-4">
            <input className="input  input-bordered w-full max-w-xs" placeholder="Search products Here" onChange={e =>handleSearchClick(e.target.value)} type="text" />
            {/* <button onClick={handleSearchClick} className="btn">search</button> */}
    </div> 
    <button className="btn btn-primary" onClick={clearFilter}>Clear Filter</button>
    </ul>
  </div>
</div>
    </>);
};

export default Products;