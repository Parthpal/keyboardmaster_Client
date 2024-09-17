
import { useDeleteProductItemsMutation, useGetProductsQuery } from "../../redux/api/api";
import UpdateItems from "./UpdateItems";
import { useState } from "react";
import Swal from "sweetalert2";

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
const ProductList: React.FC = () => {
    const [selectedId,setSelectedId]=useState('');
    const { data,isLoading } = useGetProductsQuery(undefined);
    const [deleteProduct]=useDeleteProductItemsMutation(undefined);
    console.log(data);
    if(isLoading){
            return <div className="flex justify-center align-middle">
             <span className="loading loading-spinner loading-lg"></span>
            </div>
    }
    const handleRemove=(id:string)=>{
            Swal.fire({
                title: "Do you want to Delete Product?",
                showCancelButton: true,
                confirmButtonText: "Delete",
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                  deleteProduct(id)
                  Swal.fire("Product Deleted    ", "", "success");
                }
              });
        
}
    const handleUpdate=(id:string)=>{
        console.log('handleUpdate clicked',id);
        setSelectedId(id);
    }
    return (
    <>

    <div>
        <div className="overflow-x-auto">
        <table className="table">
            {/* head */}
            <thead>
            <tr>
                <th></th>
                <th>Product Name</th>
                <th>Brand</th>
                <th>Pricing</th>
                <th>Action</th>
            </tr>
            </thead>
    {
        data?.map((items:IProductFormData,index:number)=>

            <tbody>
            {/* row 1 */}
            <tr className="bg-base-200">
                <th>{index+1}</th>
                <td>{items.title}</td>
                <td>{items.brand}</td>
                <td>${items.price.toFixed(2)}</td>
                <td><button onClick={()=>handleRemove(items._id)} className="btn btn-active btn-primary">Remove</button></td>
                <td><button className="btn btn-active btn-primary" onClick={() => {
 (document.getElementById('my_modal_5')as HTMLDialogElement)!.showModal();
  handleUpdate(items._id);
}}>Update</button>
                </td>
            </tr>

            </tbody>
        )    
    }
    <tfoot>
    </tfoot>
    </table>
    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <UpdateItems id={selectedId}/>
    </dialog>
    </div>
    </div>

    </>

    );
};

export default ProductList;

