import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data";


const App = () => {
  return (
    <div className=" bg-gray-300 flex flex-col h-[100vh] w-[100vw] justify-center items-center ">
      <div className="text-center " >
        <h1 className=" font-bold text-4xl  ">Our Testimonials</h1>
        <div className=" bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto"></div>
        <Testimonial reviews = {reviews}></Testimonial>
      </div>
    </div>
  )
};

export default App;
