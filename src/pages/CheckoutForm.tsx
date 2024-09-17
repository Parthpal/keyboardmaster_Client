
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useUpdateProductQuantityMutation } from '../redux/api/api';

// Define the types for the form inputs
interface IFormInput {
  name: string;
  email: string;
  mobile: string;
  address: string;
  checkoutMethod: string;
}

const CheckoutForm = () => {
  // Initialize React Hook Form methods
  const [updateCartQuantity]=useUpdateProductQuantityMutation(undefined);
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>();
  const navigate=useNavigate();
  // Handle form submission
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
   // console.log(data);
   navigate('/thank-you', { state: { customerData: data } });
   updateCartQuantity(null);
  };

  return (
    <>
      <div className="hero mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left max-h-screen">
            <h1 className="text-3xl font-bold flex justify-center">Pay now!</h1>
            <img
              src="https://res.cloudinary.com/dfelm3bvn/image/upload/v1726370998/9e61195a-5524-4678-99d8-112529b4096b-removebg-preview_oa4yvg.png"
              className="rounded-lg"
            />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="name" 
                  className="name input input-bordered" 
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
              </div>

              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="email" 
                  className="input input-bordered" 
                  {...register('email', { 
                    required: 'Email is required', 
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: 'Invalid email address'
                    } 
                  })}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
              </div>

              {/* Mobile Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile</span>
                </label>
                <input 
                  type="text" 
                  placeholder="mobile" 
                  className="input input-bordered" 
                  {...register('mobile', { required: 'Mobile number is required' })}
                />
                {errors.mobile && <p className="text-red-500">{errors.mobile.message}</p>}
              </div>

              {/* Address Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Address</span>
                </label>
                <input 
                  type="text" 
                  placeholder="address" 
                  className="input input-bordered" 
                  {...register('address', { required: 'Address is required' })}
                />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
              </div>

              {/* Checkout Method Select */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Checkout Method</span>
                </label>
                <select 
                  className="select select-bordered w-full max-w-xs" 
                  {...register('checkoutMethod', { required: 'Checkout method is required' })}
                >
                  <option disabled selected>Choose Option</option>
                  <option value="Cash On delivery">Cash On Delivery</option>
                  <option value="Stripe">Stripe (not available)</option>
                </select>
                {errors.checkoutMethod && <p className="text-red-500">{errors.checkoutMethod.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Checkout</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
