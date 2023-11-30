import React from 'react'
import { Card } from '../Card'

export const Events = () => {
  return (
    <>
        <div className="container mx-auto p-4 ">
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold">POPULAR EVENTS</h1>
            </div>
            <div className="flex space-x-3">
                <Card 
                    imageUrl={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    title={"Event 1"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    title={"Event 2"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    title={"Event 3"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl={"https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"}
                    title={"Event 4"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
            </div>
        </div>
    </>
  )
}
