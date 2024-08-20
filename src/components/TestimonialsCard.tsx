import { IoIosStar } from "react-icons/io"
import { IoStarOutline } from "react-icons/io5";

interface IProps {
    image:string
    rating:number
    name:string
    job:string
    children:React.ReactNode
}
export default function TestimonialsCard({image,children,rating,name,job}:IProps) {
    const stars = []
    for (let i = 0; i < 5; i++) {
        if(i < rating) stars.push(<IoIosStar key={i} size="20" className="text-[#FFCE31]" />)
        else stars.push(<IoStarOutline key={i} size="20" className="text-[#FFCE31]" />)
    }
    return (
        <div className="flex flex-col items-center space-y-4 text-center pt-8 sm:pt-16">
            <img src={image} alt="" className="rounded-full w-48 h-48 object-cover"  />
            <p className="max-w-md text-sm text-gray-500">{children}</p>
            <div className="flex items-center gap-1 justify-center">
                {stars}
            </div>
            <h5 className="font-bold text-[#252B42]">{name}</h5>
            <span className="text-gray-500">{job}</span>
        </div>
    )
}