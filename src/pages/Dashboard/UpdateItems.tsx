
import { useEffect } from 'react';
import {useGetProductsByIDQuery, useUpdateProductMutation } from '../../redux/api/api';
import { SubmitHandler, useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

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
  // Define the type for props
interface UpdateItemsProps {
    id: string; // or `number` based on your requirement
  }
const UpdateItems :React.FC <UpdateItemsProps>= ({id}) => {
   // const [addProducts]=useAddProductMutation(undefined);
    const {data,isLoading}=useGetProductsByIDQuery(id);
    const { register, handleSubmit,reset } = useForm<IProductFormData>();
    const [updateProductItem]=useUpdateProductMutation(undefined);
    useEffect(() => {
        if (data) {
          reset(data);  // Populate the form with the fetched data
        }
      },[reset,data]);
   // let date=startDate_post;
   if(isLoading){
    return <h1>loading</h1>
    }    
    const updateProduct : SubmitHandler<IProductFormData>=async (data)=>{
        console.log ('upcome',{data});
            updateProductItem({id,data})
            Swal.fire({
                position:'top-left',
                icon: "success",
                title: 'Product updated .',
                showConfirmButton: false,
                timer: 1500
              });
    }
    return (
        
        <div>
            <h3 className='text-5xl font-bold text-[#1A0F91] text-center my-5'>Add Product Here</h3>
            <div className="hero">
            
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    
                    <form onSubmit={handleSubmit(updateProduct)} className="card-body ">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Title</span>
                            </label>
                            <input type="text" defaultValue={data?.title} placeholder="Product title" {...register('title')} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="text" defaultValue={data?.rating}  {...register('rating')} placeholder="Product Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input type="text" defaultValue={data?.brand}  {...register('brand')} placeholder="Product Brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                            <span className="label-text">Price</span>
                            </label>
                            <input type="text" defaultValue={data?.price} {...register('price')}  placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" defaultValue={data?.description} {...register('description')} placeholder="Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                        
                            <input type="text" defaultValue={data?.available_quantity} {...register('available_quantity')} placeholder="Quantity" className="input input-bordered" required />
                            </div>
                          
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text"  {...register('image')} defaultValue={data?.image} placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="inline mx-auto form-control mt-6">
                            <button type='submit' className="mx-4 px-12 btn border-none btn-primary bg-[#1A0F91]">Update Product</button>
                        </div>
                        <div>
                            <p className='text-center'>Press ESC to close Window</p>
                        </div>
                    <div/>
                    </form>
                    </div>
                </div>
                </div>
        </div>
        
    );
};

export default UpdateItems;