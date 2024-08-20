interface IProps{
    title:string
    heading:string
    className?:string
}
export default function Head({title,heading,className}:IProps) {
    return (
        <div className={`flex-col space-y-4 pt-20 ${className}`}>
            <span className="text-[#96BB7C] font-bold tracking-widest">{title}</span>
            <h3 className="font-bold color-[#252B42] text-3xl md:text-4xl">
                {heading}
            </h3>
            <p className={`text-gray-500 text-sm ${className ? '' : 'max-w-lg'} font-semibold`}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
        </div>
    )
}