import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";

export default function OnlineDelivery() {
    const [data, setData] = useState([]);
    const myRef = useRef(null);
    const [isAtTop, setIsAtTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (myRef.current) {
                const rect = myRef.current.getBoundingClientRect();
        if (rect.top <= 0) {
          setIsAtTop(true);
        } else {
          setIsAtTop(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    return (
        <div className='max-w-[1200px] mx-auto px-2' ref={myRef}>
            <div className='flex my-5 items-center justify-between'>
                <div className='text-[20px] font-bold'>Restaurants with online food delivery in Ghaziabad</div>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-[99999999] bg-white w-full left-0' : ''}>
                <div className="max-w-[1200px] mx-auto flex my-4 gap-2">
                    <div className="p-2 rounded-md shadow">Filter</div>
                    <div className="p-2 rounded-md shadow">Sort By</div>
                    <div className="p-2 rounded-md shadow">Fast Delivery</div>
                    <div className="p-2 rounded-md shadow">New on Swiggy</div>
                    <div className="p-2 rounded-md shadow">Ratings 4.0+</div>
                    <div className="p-2 rounded-md shadow">Food in 10 mins</div>
                    <div className="p-2 rounded-md shadow">Offers</div>
                    <div className="p-2 rounded-md shadow">Rs. 300-Rs. 600</div>
                    <div className="p-2 rounded-md shadow">Less than Rs. 300</div>
                    <div className="p-2 rounded-md shadow">Pure Veg</div>
                    <div className="p-2 rounded-md shadow">Non Veg</div>
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {
                data.map(
                    (d,i) => {
                        return <Card {...d}/>
                    }
                )
            }
            </div>
        </div>
    )
}