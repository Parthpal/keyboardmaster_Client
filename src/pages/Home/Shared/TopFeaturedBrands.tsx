import React from 'react';

interface Product {
  image: string;
  brand: string;
}

const products: Product[] = [
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219247/razer_logo_rkrpxi.png",
    brand: "Razer"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219247/windows_logo_zckiaa.png",
    brand: "Microsoft"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219246/Apple_logo_bwm7go.png",
    brand: "Apple"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219246/Corsair_logo_zgdeg3.png",
    brand: "Corsair"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219247/logitech_logo_dy1b7l.png",
    brand: "Logitech"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219246/hyperXaloy_logo_pfspm1.png",
    brand: "HyperX"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219246/dell_logo_peblau.png",
    brand: "Dell"
  },
  {
    image: "https://res.cloudinary.com/dfelm3bvn/image/upload/v1725219246/keyChronhk_logo_c1m94o.png",
    brand: "Keychron"
  }
];

const TopFeaturedBrands: React.FC = () => {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center my-12">Top Featured Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.brand} className="card bg-base-100 shadow-md p-4 text-center">
            <img 
              src={product.image} 
              alt={product.brand} 
              className="flex w-20 h-20 mx-auto" 
            />
            <h3 className="text-xl font-semibold">{product.brand}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopFeaturedBrands;
