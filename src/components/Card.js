import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Card = (props) => {
    let review = props.review
  return (
    <div className=' flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-10 mx-auto'>
            <img src={review.image} className='h-[140px] w-[140px] aspect-square rounded-full z-25'></img>
            <div className=' h-[140px] w-[140px] absolute top-[-6px] bg-violet-500 rounded-full z-[-10] left-[10px]'></div>
        </div>
        <div className=' text-center mt-7'>
            <p className='font-bold text-2xl capitalize tracking-wider'>{review.name}</p>
            <p className='text-violet-400 uppercase text-sm '>{review.job}</p>
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>
        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>
        {/* <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold '>
            <button className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight></FiChevronRight>
            </button>
        </div>
        <div>
            <button className='cursor-pointer px-10 py-2 bg-violet-400 hover:bg-violet-500 text-white text-lg font-bold rounded-md'>Surprise Me</button>
        </div> */}
    </div>
  )
}

export default Card