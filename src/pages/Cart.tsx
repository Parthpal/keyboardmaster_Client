import { Link } from "react-router-dom";
import { useDeleteCartItemsMutation, useFetchCartQuery, useUpdateCartQuantityMutation, useUpdateDecCartQuantityMutation } from "../redux/api/api";
import Swal from "sweetalert2";
export interface ICartData {
  _id: string;
  product_id: string;
  product_image: string;
  product_title: string;
  product_brand: string;
  product_available_quantity: number;
  product_price: number;
  product_rating: number;
  product_purchase_quantity: number;
  product_description: string;
}

const Cart = () => {
    const { data, isLoading } = useFetchCartQuery(undefined);
    const[updateCartQuantity]=useUpdateCartQuantityMutation(undefined);
    const [updateDecCartQuantity]=useUpdateDecCartQuantityMutation(undefined)
    const [deleteCart]=useDeleteCartItemsMutation(undefined);
    console.log(data);
    if(isLoading){
            return <div className="flex justify-center align-middle">
             <span className="loading loading-spinner loading-lg"></span>
            </div>
    }
    const handleIncrement=(id:string)=>{
        //console.log('handleIncrement clicked',id);
        updateCartQuantity(id);
    }
    const handleDecrement=(id:string)=>{
       // console.log('handleDecrement clicked',id);
       updateDecCartQuantity(id);
   
    }
    const handleRemove=(id:string)=>{
        console.log('handleRemove clicked',id);
        Swal.fire({
            title: "Do you want to Remove the Product?",
            showCancelButton: true,
            confirmButtonText: "Delete",
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              deleteCart(id);
              Swal.fire("Product Deleted    ", "", "success");
            }
          });

    }

    const priceArray:number[]=[];
    data.map((cartItems: { product_price: number; product_purchase_quantity: number; })=>{
        const totalPricing:number=cartItems.product_price * cartItems.product_purchase_quantity;
        console.log(totalPricing);
        priceArray.push(totalPricing);  
    })
    const addTotalfunc=(total: number,sum: number)=> total+sum;
    const TotalPrice=priceArray.reduce(addTotalfunc,0);
    if(data.length<=0){
        return <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center p-6 bg-white shadow-lg rounded-lg">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Nothing in the Cart</h1>
          <p className="text-gray-600 mb-4">It looks like your cart is empty. Add some items to it to get started!</p>
          <a
            href="/products"
            className="btn btn-primary bg-blue-500 text-white hover:bg-blue-600"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    }
    return (<>
            <div>
               <div className="overflow-x-auto">
               <table className="table">
                   {/* head */}
                   <thead>
                   <tr>
                       <th></th>
                       <th>Product Name</th>
                       <th>Quantity</th>
                       <th>Pricing</th>
                       <th>Action</th>
                   </tr>
                   </thead>
           {
               data?.map((cartItems: ICartData,index: number)=>
       
                   <tbody>
                   {/* row 1 */}
                   <tr className="bg-base-200">
                       <th>{index+1}</th>
                       <td>{cartItems.product_title}</td>
                       <td><button onClick={()=>handleIncrement(cartItems._id)} className="btn btn-active btn-accent">+</button><span className="border-2 m-2 px-2 py-1 border-black">{cartItems.product_purchase_quantity}</span><button onClick={()=>handleDecrement(cartItems._id)} className="btn btn-error">-</button></td>
                       <td>{(cartItems.product_price * cartItems.product_purchase_quantity).toFixed(2)}</td>
                       <td><button onClick={()=>handleRemove(cartItems._id)} className="btn btn-active btn-primary">Remove</button></td>
                   </tr>
                   </tbody>
               )
           }
           <tfoot>
           <tr>
                       <th></th>
                       <th></th>
                       <th></th>
                       <th>Total Price:{TotalPrice.toFixed(2)}</th>
                       <th><Link className="btn btn-outline btn-success" to='/checkout'> Checkout</Link></th>
                   </tr>
           </tfoot>
                   </table>
               </div>
           </div>
           </>
    );
};

export default Cart;