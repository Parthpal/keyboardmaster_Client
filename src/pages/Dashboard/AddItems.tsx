
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAddProductMutation } from "../../redux/api/api";

interface IProductFormData {
    title: string;
    rating: number;
    brand: string;
    price: number;
    description: string;
    available_quantity: number;
    image: string;
  }

const AddItems: React.FC = () => {
    const [addProducts]=useAddProductMutation(undefined);
    const { register, handleSubmit } = useForm<IProductFormData>();
   // let date=startDate_post;
    const addProduct: SubmitHandler<IProductFormData>=async (data)=>{
        addProducts(data);
            Swal.fire({
                icon: "success",
                title: 'Product is added .',
                showConfirmButton: false,
                timer: 1500
              });
        
    }
    return (
        <div>
            <h3 className='text-5xl font-bold text-[#1A0F91] text-center my-5'>Add Product Here</h3>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
                    <form  onSubmit={handleSubmit(addProduct)} className="card-body ">
                        <div className='grid md:grid-cols-3 grid-cols-1 gap-6'>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Title</span>
                            </label>
                            <input type="text" placeholder="Product title" {...register('title')} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Rating</span>
                            </label>
                            <input type="text"  {...register('rating')} placeholder="Product Rating" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Brand</span>
                            </label>
                            <input type="text"  {...register('brand')} placeholder="Product Brand" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="text" {...register('price')}  placeholder="price" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <input type="text" {...register('description')} placeholder="Description" className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                        
                            <input type="text" {...register('available_quantity')} placeholder="Quantity" className="input input-bordered" required />
                            </div>
                          
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Image</span>
                            </label>
                            <input type="text"  {...register('image')} placeholder="photoUrl" className="input input-bordered" required />
                        </div>
                        </div>
                        <div className="inline mx-auto form-control mt-6">
                            <button type="submit" className="mx-4 px-12 btn border-none btn-primary bg-[#1A0F91]">Add Product</button>
                        </div>
                    <div/>
                    </form>
                    </div>
                </div>
                </div>
        </div>

    );
};

export default AddItems;