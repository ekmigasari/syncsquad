"use client";

import Image from "next/image";
import { Button } from "../Button";

const handleEvent = () => {
    console.log("Event");
}

export const Hero = () => {
  return (
    <div>
        <div className="">
            <Image className="sm:w-full md:w-2/3 lg:w-full xl:w-full min-h-screen object-cover" 
                src="/images/backgroud-hero.png" 
                alt="Tailwind CSS Hero component" 
                width={1920}
                height={1080}
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
                <h2 className="text-7xl font-bold">MUSIC CONCERT</h2>
                <p className="text-lg mt-4">Unleash Your Heroic Journey and Explore the Pinnacle of Experiences Worldwide, Whether Joining Spectacular Events or Crafting Your Own</p>
                <Button
                    label={"Create Event"}
                    onClick={handleEvent}
                    btnColor={"btn btn-warning mt-5 w-[196px]"}
                />
            </div>
        </div>
    </div>
  )
}
