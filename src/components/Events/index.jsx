"use client";
import { Card } from '../Card'

export const Events = () => {
  return (
    <>
        <div className="container mx-auto p-4 mb-24">
            <div className="text-center py-10">
                <h1 className="text-2xl font-bold text-white">POPULAR EVENTS</h1>
            </div>
            <div className="md:flex md:space-x-3">
                <Card 
                    imageUrl="/images/event.png"
                    title={"Event 1"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl="/images/event.png"
                    title={"Event 1"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl="/images/event.png"
                    title={"Event 1"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                <Card 
                    imageUrl="/images/event.png"
                    title={"Event 1"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
                />
                
            </div>
        </div>
    </>
  )
}
