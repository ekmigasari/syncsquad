"use client";

import React from "react";
import Image from "next/image";

export const CreateEvent = () => {
  return (
    <main>
      <div className="mx-auto w-full md:max-w-md sm:w-full md:h-auto items-center my-12">
        <Image src="/images/create_header.png" width={560} height={196}></Image>
        <div className="mx-auto w-full md:max-w-md sm:w-full md:h-auto items-center bg-neutral-900 rounded-lg p-12 text-white space-y-12">
          <div className="flex flex-col justify-start items-center ">
            <div className="text-center text-white text-4xl font-bold leading-10">
              Create Event
            </div>
            <div className="text-center text-white text-base font-normal leading-normal">
              start your memorable experience here
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-none tracking-tight">
                Event Name
              </label>
              <input
                className="input-bordered self-stretch rounded p-2"
                placeholder="event name"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-none tracking-tight">
                Description
              </label>
              <textarea
                className="input-bordered self-stretch rounded p-2 h-32"
                placeholder="what this event about"
              ></textarea>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-none tracking-tight">
                Date
              </label>
              <input
                className="input-bordered self-stretch rounded p-2"
                type="date"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white text-sm font-medium leading-none tracking-tight">
                Location
              </label>
              <input
                className="input-bordered self-stretch rounded p-2"
                placeholder="city, country"
              ></input>
            </div>
            <button className="btn btn-primary mt-4 text-white">
              Create event
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};
