"use client";

import Image from "next/image";
import { Button } from "../Button";

const handleView = () => {
    console.log("View");
}

export const Card = ({title, description, imageUrl}) => {
  return (
    <>
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mb-4">
            <figure>
                <Image src={imageUrl} 
                    alt="Event" 
                    width={500}
                    height={500}
                    className="rounded-t-xl"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <Button
                        label={"View"}
                        onClick={handleView}
                        btnColor={"btn btn-primary"}
                    />
                </div>
            </div>
        </div>
    </>
  )
}
