"use-client";

import React from 'react'
import Image from 'next/image';

export const SingleEvent = () => {
  return (
        <>
            <div className="container mx-auto p-4 min-h-screen flex flex-col relative mb-24">
                <main className="flex-1">
                    <div className="relative w-full h-0 aspect-w-16 aspect-h-9">
                        <Image 
                        src="/images/event-2.jpg"
                        width={1920}
                        height={1080}
                        className="rounded-lg"
                        />
                    <div className="grid md:grid-cols-3 gap-4">
                            <div className="col-span-2">
                                <div className="mt-10">
                                    <h1 className="text-5xl font-bold">Music Concert</h1>
                                    <p className="text-lg mt-4">Unleash Your Heroic Journey and Explore the Pinnacle of Experiences Worldwide, Whether Joining Spectacular Events or Crafting Your Own. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis placeat dignissimos quas debitis quis consequuntur quisquam fugiat omnis! Temporibus consectetur veritatis iusto suscipit quidem repudiandae fugiat ipsum deleniti, sequi minus.</p>
                                </div>
                                <div className="mt-5">
                                    <h1 className="text-3xl font-bold">Event Details</h1>
                                    <div className="grid grid-cols-2 gap-4 mt-5">
                                        <div className="col-span-1">
                                            <p className="text-lg">Date</p>
                                            <p className="text-lg">Time</p>
                                            <p className="text-lg">Location</p>
                                            <p className="text-lg">Ticket Price</p>
                                        </div>
                                        <div className="col-span-1">
                                            <p className="text-lg">: 12/12/2021</p>
                                            <p className="text-lg">: 12:00 PM</p>
                                            <p className="text-lg">: Jakarta, Indonesia</p>
                                            <p className="text-lg">: Rp. 500.000</p>
                                        </div>
                                    </div>
                                    <div className="mt-7">
                                        <button className="btn btn-primary w-52">Buy Ticket</button>
                                    </div>
                                </div>
                            </div>
                            <div className="">

                            </div>
                    </div>
                    </div>
                </main>
            </div>    
        </>
    )
}