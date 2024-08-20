import { IoIosArrowForward } from "react-icons/io";

export default function Feature() {
    return (
        <section className="pt-20 flex-cols items-center md:flex md:space-x-12">
            <div>
                <img src="./images/4758689.png" alt="" className="animate-bounce" />
            </div>
            <div className="inline-flex flex-col space-y-8 pr-8">
                <div className="w-28 h-2 bg-[#d166ca]">
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#252B42] ">
                    Video in Live Action
                </h2>
                <p className="text-gray-500 text-sm max-w-72 font-semibold">
                    Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: 
                    Newtonian mechanics 
                </p>
                <button className="inline-flex items-center gap-2 text-[#d166ca]"><span className="font-bold tracking-wider">Learn More</span> <IoIosArrowForward className="size-5"/></button>
            </div>
        </section>
    )
}