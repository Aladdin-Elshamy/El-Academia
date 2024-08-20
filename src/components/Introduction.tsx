import { IoIosArrowForward } from "react-icons/io";

export default function Introduction() {
    return (
        <section className="pt-20 flex-cols justify-center md:flex md:space-x-12">
            <div className="inline-flex flex-col space-y-8 pr-8">
                <div className="w-28 h-2 bg-red-500">
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] ">
                    Approdable Packages
                </h2>
                <p className="text-gray-500 text-sm max-w-72 font-semibold">
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics:
                    Newtonian mechanics 
                </p>
                <button className="inline-flex items-center  gap-2 text-[#96BB7C]"><span className="font-bold tracking-wider">Learn More</span> <IoIosArrowForward className="size-5"/></button>
            </div>
            <div className="flex-cols space-y-4 shadow-md p-8">
                <div className="bg-[#96BB7C] w-fit p-5 rounded-md">
                    <img src="./images/cool-icon-n2.svg" alt="" />
                </div>
                <h3 className="text-[#252B42] font-bold">Certified Teacher</h3>
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-gray-500 text-sm font-semibold max-w-48 md:max-w-32">The gradual 
                accumulation of 
                information about</p>
            </div>
            <div className="flex-cols space-y-4 shadow-md p-8">
                <div className="bg-[#96BB7C] w-fit p-5 rounded-md">
                    <img src="./images/cool-icon-n2.svg" alt="" />
                </div>
                <h3 className="text-[#252B42] font-bold">Expert instruction</h3>
                <div className="w-12 h-1 bg-red-500"></div>
                <p className="text-gray-500 text-sm font-semibold max-w-48 md:max-w-32">The gradual 
                accumulation of 
                information about</p>
            </div>
        </section>
    )
}   