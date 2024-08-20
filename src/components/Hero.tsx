export default function Hero() {
    return (
        <section className="flex flex-cols md-flex-row space-x-8 items-center pt-8">
            <div className="flex-cols space-y-8">
                <span className="text-[#96BB7C] font-bold tracking-widest">Welcome</span>
                <h1 className="font-bold color-[#252B42] text-4xl md:text-5xl lin">
                    <span className="">Best Learning</span>
                    <span className="pt-4 block">Opportunities</span>
                </h1>
                <p className="text-gray-500 text-xl font-semibold">Our goal is to make online education work for everyone</p>
                <div className="flex gap-4">
                    <button className="bg-[#96BB7C] text-white px-6 py-4 rounded">Join Us</button>
                    <button className="border border-[#96BB7C] text-[#96BB7C] px-4 py-4 rounded">Learn More</button>
                </div>
            </div>
            <div className="hidden md:block">
                <img src="./images/20943391.png" alt="" className="animate-bounce" />
            </div>
        </section>
    )
}