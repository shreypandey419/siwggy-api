import React, { useState, useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Card from "./Card";

export default function TopRest() {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchTopRestaurant = async () => {
            const response = await fetch('http://localhost:5001/top-restaurant-chains');
            const apiData = await response.json();
            setData(apiData);
        }

    useEffect(
        () => {
            fetchTopRestaurant();
        }, []
    )
    const nextSlide = () => {
        console.log(data.length);
        if (data.length - 4 === slide) return false;
        setSlide(slide + 2);
    }
    const prevSlide = () =>  {
        if (slide === 0) return false;
        setSlide(slide - 2);
    }
    return (
        <div className='max-w-[1200px] mx-auto px-2'>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[20px] font-bold'>Top restaurant chains in Ghaziabad</div>
                    <div className='flex'>
                        <div className='curson-pointer flex justify-center items-center w-[30px] 
                            h-[30px] bg-[#e2e2e7] rounded-full mx-2' onClick={prevSlide}>
                                <FaArrowLeft/>
                        </div>
                        <div className='curson-pointer flex justify-center items-center w-[30px] h-[30px] 
                            bg-[#e2e2e7] rounded-full mx-2' onClick={nextSlide}>
                                <FaArrowRight/>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 overflow-hidden'>
                    {
                        <div
                    className="flex gap-4 transition-transform duration-500"
                    style={{ transform: `translateX(-${slide * 300}px)` }}
                >
                    {data.map((d, i) => (
                        <Card width="w-full md:w-[273px]" {...d} key={i} />
                    ))}
                </div>
                    }
                    
                </div>
                {/* Orange line slider indicator */}
                <div className="relative mt-4 h-3 flex justify-center items-center">
                    <div className="relative w-[50px] h-[4px] bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="absolute h-full bg-orange-500 w-[10px] rounded-full transition-all duration-500"
                            style={{
                                transform: `translateX(${slide * 7}px)`
                            }}
                        ></div>
                    </div>
                </div>
                <hr className='my-4 border-[1px]'/> 
            </div> 
    )
}