import { IoIosArrowForward, IoIosStar } from "react-icons/io";
import { BsDownload } from "react-icons/bs";
import { LuAlarmClock } from "react-icons/lu";
import { AiOutlineAreaChart } from "react-icons/ai";
import { LiaChartAreaSolid } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";
import { BsCart } from "react-icons/bs";
import { IoMdEye } from "react-icons/io";
interface IProps{
    title:string
    heading:string
    image:string
}
export default function ProductCard({title,heading,image}:IProps) {
    return (
        <div className="flex items-center gap-8 flex-col w-full sm:flex-row">
            <div className="w-full sm:w-[400px] h-[400px] relative px-4" style={{ backgroundImage: `url(${image})`, backgroundSize: "cover", backgroundPosition: "center"}}>
                <span className="text-white font-bold absolute top-5 left-5 px-4 py-3 bg-[#E74040] rounded-md shadow">Sale</span>
                <div className="relative top-80 pt-4 flex items-center justify-center gap-3 flex-wrap">
                    <span className="p-3 sm:p-4 bg-white rounded-full"><FaRegHeart size="20" /></span>
                    <span className="p-3 sm:p-4 bg-white rounded-full"><BsCart size="20" /></span>
                    <span className="p-3 sm:p-4 bg-white rounded-full"><IoMdEye size="20" /></span>
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
                <div className="flex items-center justify-between flex-wrap">
                    <p className="text-[#96BB7C] font-bold">{title}</p>
                    <div className="bg-[#2D4059] flex items-center gap-2 px-2 py-1 rounded-full">
                        <IoIosStar color="#FFCE31" />
                        <span className="text-white">4.8</span>
                    </div>
                </div>
                <h4 className="font-bold color-[#252B42] text-xl md:text-2xl">
                    {heading}
                </h4>
                <p className="text-gray-500 font-semibold max-w-xs">We focus on ergonomics and 
                    meeting you where you work. It's 
                    only a keystroke away.
                </p>
                <div className="flex items-center gap-4 text-lg">
                    <BsDownload className="text-gray-500" />
                    <span className="text-gray-500 font-bold">15 Sales</span>
                </div>
                <p className="flex items-center gap-4 font-bold text-lg">
                    <span className="text-gray-500">$16.48</span>
                    <span className="text-[#FFAB71]">$6.48</span>
                </p>
                <div className="flex justify-between flex-wrap gap-1">
                    <div className="flex items-center gap-2">
                        <LuAlarmClock className="text-[#96BB7C]" size="20" />
                        <span className="text-gray-500 font-semibold">22h...</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <LiaChartAreaSolid className="text-[#E77C40]" size="20" />
                        <span className="text-gray-500 font-semibold">64 Lessons</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <AiOutlineAreaChart className="text-[#FFAB71]" size="20" />
                        <span className="text-gray-500 font-semibold">Progress</span>
                    </div>
                </div>
                <button className="flex w-fit items-center gap-2 text-[#96BB7C] px-4 py-4 rounded-full border border-[#96BB7C]"><span className="font-bold tracking-wider">Learn More</span> <IoIosArrowForward className="size-5"/></button>
            </div>
        </div>
    )
}