import { ChangeEvent, useState } from "react";
import Head from "./Head";

export default function Newsletter() {
    const [email, setEmail] = useState<string>("")
    function onChange(e: ChangeEvent<HTMLInputElement>) {
        const {value} = e.target
        setEmail(value)
    }
    return (
        <div className="bg-red-50 mt-20 py-20">
            <div className="container">
            <Head title="Newsletter" heading="Subscribe to our Newsletter" className="text-center justify-center mx-auto w-fit pt-0"/>
            <form action="" className="flex flex-col mx-auto items-center gap-4 sm:flex-row sm:gap-0 sm:border-[#96BB7C] sm:border sm:w-fit mt-8" onSubmit={(e) => {
                    e.preventDefault()
                    alert("Thank you for subscribing")
                    setEmail("")
                }
            }>
                <input type="text" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" className="focus:outline-none focus:ring-2 focus:ring-[#96BB7C] focus:border-[#96BB7C] p-2 rounded border-[#96BB7C] sm:focus:ring-0 sm:h-14 sm:border-none sm:px-4 sm:w-72" placeholder="Your Email" value={email} onChange={onChange} />
                <button className="bg-[#96BB7C] text-white px-6 py-4 rounded sm:rounded-none ">Subscribe</button>
            </form>
            </div>
        </div>
    )
}