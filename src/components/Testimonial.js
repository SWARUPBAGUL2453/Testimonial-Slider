import React, { useState } from 'react'
import Card from './Card'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews
    const[index, setIndex] = useState(0)
    
    function leftShiftHandler (){
        if(index - 1 < 0){
          setIndex(reviews.length - 1)
        }
        else{
          setIndex(index - 1)
        }
    }
    function rightShiftHandler (){
      console.log(index)
        if(index + 1 >= reviews.lenght){
          setIndex(0)
        }
        else{
          setIndex(index + 1)
        }
         console.log(index)
    }
    function surpriseMeHandler (){
       let randomIndex =  Math.floor(Math.random()*reviews.length)
       setIndex(randomIndex)
    }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 hover:shadow-xl rounded-md'>
        
        <Card review = {reviews[index]}></Card>

        <div className=' text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto '>
            <button 
            onClick={leftShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button 
            onClick={rightShiftHandler}
            className='cursor-pointer hover:text-violet-500'>
                <FiChevronRight></FiChevronRight>
            </button>
        </div>
        <div className='mt-6'>
            <button 
            onClick={surpriseMeHandler}
            className='cursor-pointer px-10 py-2 bg-violet-400 hover:bg-violet-500 text-white text-lg font-bold rounded-md'>Surprise Me</button>
        </div>

    </div>
  )
}

export default Testimonial  