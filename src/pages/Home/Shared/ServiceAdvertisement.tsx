import { CiDollar } from 'react-icons/ci';
import { FaCcMastercard, FaShippingFast } from "react-icons/fa";
import { IoChatboxEllipses } from 'react-icons/io5';

const ServiceAdvertisement = () => {
    return (<>

    <div className='relative mt-10 mb-10'>
    <div className="absolute mt-2 h-96 w-full bg-center bg-cover bg-no-repeat bg-[url('https://res.cloudinary.com/dfelm3bvn/image/upload/v1725390332/polotno_1_-Photoroom_ircxrz.png')]">
    </div>
   <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2'>

   <div className="relative my-2 mx-auto card bg-[#ffe47f] rounded-box grid h-36 w-72 flex-grow px-5 py-5">
      <div className='text-2xl mb-2'>
         <FaShippingFast />
      </div>
      <div className='font-semibold'>
      Free shipping
      </div>
      <div>
      Order over $500
      </div>
      <div className='absolute top-3 right-2 opacity-10 text-4xl'>
      <FaShippingFast />
      </div>
   </div>
   <div className="relative my-2  mx-auto card bg-[#e9effc] rounded-box grid h-36 w-72 flex-grow px-5 py-5">
      <div className='text-2xl mb-2'>
      <FaCcMastercard />
      </div>
      <div className='font-semibold'>
      Free shipping
      </div>
      <div>
      Order over $500
      </div>
      <div className='absolute top-3 right-2 opacity-10 text-4xl'>
      <FaCcMastercard />
      </div>
   </div>
   <div className="relative my-2  mx-auto card bg-[#ebd3c5] rounded-box grid h-36 w-72 flex-grow px-5 py-5">
      <div className='text-2xl mb-2'>
      <CiDollar />
      </div>
      <div className='font-semibold'>
      Free shipping
      </div>
      <div>
      Order over $500
      </div>
      <div className='absolute top-3 right-2 opacity-10 text-4xl'>
      <CiDollar />
      </div>
   </div>
   <div className="relative my-2  mx-auto card bg-[#eaeed6] rounded-box grid h-36 w-72 flex-grow px-5 py-5">
      <div className='text-2xl mb-2'>
      <IoChatboxEllipses />
      </div>
      <div className='font-semibold'>
      Free shipping
      </div>
      <div>
      Order over $500
      </div>
      <div className='absolute top-3 right-2 opacity-10 text-4xl'>
      <IoChatboxEllipses />
      </div>
   </div>

   
   </div>
 
    </div>

   

    </>
    );
};

export default ServiceAdvertisement;