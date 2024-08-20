import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

interface IProps {
    image:string
    name:string
    job:string
}
export default function TeamCard({image,name,job}:IProps) {
    return (
        <div className="flex flex-col items-center space-y-3 shadow-md pb-8 mt-8 sm:mt-16 rounded-xl">
            <img src={image} alt="" className="rounded-t-xl w-full h-64 object-cover" />
            <h5 className="font-bold text-[#252B42]">{name}</h5>
            <span className="text-gray-500">{job}</span>
            <div className="flex items-center gap-4 lg:gap-8 justify-center text-[#96BB7C] text-3xl">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
            </div>
        </div>
    )
}