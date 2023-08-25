import React from 'react'

import {Cloth1} from '../assets/img/index'

const ProductCard = ({imgUrl, price, btnLabel, productTag, productType}) => {
    return (
        <div className={`relative bg-backgroundColor px-3 py-4 max-sm:min-w-[170px] min-w-[190px] ${ productType === "new" ? "h-[250px]" : "h-[225px]"} flex flex-col items-center justify-between rounded-md shadow-xl`}>
            <img src={imgUrl} alt="" className='cursor-pointer max-w-[150px] max-h-[150px] object-center'/>
            <div className='relative flex items-center justify-between gap-3 mt-3'>
                {
                    productType == "new" 
                    ?
                        <div className='cursor-default text-[#829AB9] flex flex-col items-start justify-center gap-1 text-xs font-montserrat'>
                            <p className='absolute -top-[55%] text-[#18B039]'>Available In stock</p>
                            <p>Size: L</p>
                            <p className='text-redTxt'>Price: 7$</p>
                        </div>
                    :
                    productType == "trending" 
                    ? 
                        <p className='text-redTxt cursor-default text-base max-sm:text-sm font-montserrat'>{price} Only</p>
                    : 
                    productType == "discount"   
                    ?   
                        <div>
                            <p className='absolute -top-[70%] text-redTxt line-through text-base'>8$</p>
                            <p className='text-[#18B039] cursor-default text-base max-sm:text-sm font-montserrat'>{price} <span className='text-black'> Only</span></p>
                        </div>
                    : ""
                }
                
                <button className='bg-[#AFC3CE] bg-opacity-60 max-sm:text-sm px-3 py-1 rounded-lg text-base font-palanquin'>
                        {btnLabel}
                </button>
            </div>
            {/* title thing */}
            {
                productType == "new"
                ?
                <div className='absolute top-[0%] -left-[6%] text-xl bg-redTxt text-white px-3 rounded-sm -rotate-[35deg]'>
                    <p className='text-[15px]'>{productTag}</p>
                </div> 
                :
                <div className='absolute -top-[5%] -left-[8%] bg-[#18B039] text-white px-2 rounded-sm'>
                    <p className='text-[15px]'>{productTag}</p>
                </div>
            }
        </div>
    )
}

export default ProductCard
