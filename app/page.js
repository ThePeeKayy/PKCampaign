'use client'

import Image from "next/image";
import waves from "./waves.png"
import img1 from "./img1.jpeg"
import MainContent from "./MainContent";
import SuggestedEvents from "./SuggestedEvents";
import { FaTelegram } from "react-icons/fa";

export default function Home() {
  return (
    <div className="">
      <main className="">
          <div className="">
          <div className="sm:h-[36vh] h-[26vh] overflow-hidden w-full bg-gray-50">
            <Image src={waves} 
                      alt="Top Right Decoration"
                      layout="fill"
                      objectFit="cover" 
                      className="scale-y-[-1] pt-[400px]"
                      />
          </div>
          <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20 -z-10">
           
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
                <h1 className="max-w-2xl text-4xl font-bold tracking-tight md:mt-[20px] mt-[10px] text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
                  Finding fulfillment through unity
                </h1>
                <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
                  <p className="text-lg leading-8 text-gray-600">
                    Hello, I am <strong>Peng Kiang</strong>! A candidate for Odyssea house captain with a vision of unity and progress. I’m excited to contribute my leadership skills and passion for creating positive experiences, ensuring every member feels heard and supported
                  </p>
                </div>
                <Image
                  alt=""
                  src={img1}
                  className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-8 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-18"
                />
              </div>
            </div>
          </div>
        </div>
        <MainContent />
        <SuggestedEvents />
        <p className="flex flex-row text-gray-400 text-md font-semibold justify-center items-center"> Drop me a dm: <a href="https://t.me/pengkiang" className="flex flex-row justify-center items-center">@pengkiang <FaTelegram size={22} /></a> </p>

        <div className="h-[30vh] relative w-full">
          <Image src={waves} 
                        alt="bottom decoration"
                        layout="fill"
                        objectFit="cover" 
                        className="absolute"
          />
        </div>
      </main>
    </div>
  );
}
