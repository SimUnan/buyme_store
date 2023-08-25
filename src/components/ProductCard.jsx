import React from 'react'

import {Cloth1} from '../assets/img/index'

const ProductCard = ({imgUrl, price, btnLabel, productTag}) => {
    return (
        <div className='relative bg-backgroundColor px-4 py-4 min-w-[170px] min-h-[220px] flex flex-col items-center justify-center rounded-md shadow-xl'>
            <img src={imgUrl} alt="" className='cursor-pointer object-center p-1'/>
            <div className='flex items-center justify-between gap-3 mt-3'>
                <p className='text-redTxt cursor-default text-base max-sm:text-sm font-montserrat'>{price} Only</p>
                <button className='bg-[#AFC3CE] bg-opacity-60 max-sm:text-sm px-3 py-1 rounded-lg text-base font-palanquin'>
                        {btnLabel}
                </button>
            </div>
            {/* title thing */}
            <div className='absolute -top-[5%] -left-[8%] bg-[#18B039] text-white px-2 rounded-sm'>
                <p className='text-[15px]'>{productTag}</p>
            </div>
        </div>
    )
}

export default ProductCard
