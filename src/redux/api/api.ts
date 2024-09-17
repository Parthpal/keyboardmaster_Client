import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi=createApi({
    reducerPath:'baseApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://keyboard-master-server-side.vercel.app/'
    }),
    tagTypes:['products','cart'],
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>({
                url:`/products`,
                method:'GET',
            }),
            providesTags:['products']
        }),
        getProductsByID:builder.query({
            query:(data)=>({
                url:`/products/${data}`,
                method:'GET',
            }),
            providesTags:['products']
        }),
        addProduct:builder.mutation({
            query:(data)=>({
                url:`/addProduct`,
                method:'POST',
                body:data
            }),
            invalidatesTags: ['products']
        }),
        deleteProductItems:builder.mutation({
            query:(data)=>({
                url:`/deleteProductItem/${data}`,
                method:'Delete',
                body:data
            }),
            invalidatesTags: ['products']
        }),
        addToCart:builder.mutation({
            query:(data)=>({
                url:`/addToCart`,
                method:'POST',
                body:data
            }),
            invalidatesTags: ['cart']
        }),
        fetchCart:builder.query({
            query:()=>({
                url:`/addToCart`,
                method:'GET',
            }),
            providesTags: ['cart'],
        }),
        updateProduct:builder.mutation({
            query:({id,data})=>({          
                url:`/productsUpdate/${id}`,
                method:'PUT',
                body:data
            }),
            invalidatesTags: ['products']
        }),
        updateCartQuantity:builder.mutation({
            query:(data)=>({
                url:`/addToCart/${data}`,
                method:'PUT',
                body:data
            }),
            invalidatesTags: ['cart']
        }),
        updateDecCartQuantity:builder.mutation({
            query:(data)=>({
                url:`/addToCartDec/${data}`,
                method:'PUT',
                body:data
            }),
            invalidatesTags: ['cart']
        }),
        deleteCartItems:builder.mutation({
            query:(data)=>({
                url:`/deleteItem/${data}`,
                method:'Delete',
                body:data
            }),
            invalidatesTags: ['cart']
        }),
        updateProductQuantity:builder.mutation({
            query:()=>({
                url:`/productsQuantityUpdate`,
                method:'PUT'
            }),
            invalidatesTags: ['products','cart']
        }),

    })
})

export const {
    useDeleteProductItemsMutation,
    useUpdateProductMutation,
    useGetProductsByIDQuery,
    useAddProductMutation,
    useUpdateProductQuantityMutation,
    useDeleteCartItemsMutation,
    useGetProductsQuery,
    useAddToCartMutation,
    useFetchCartQuery,
    useUpdateCartQuantityMutation,
    useUpdateDecCartQuantityMutation}=baseApi