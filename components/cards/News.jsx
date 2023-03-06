import Image from "next/image";

export default function News({ img, title, text, style }) {
    return (
        <div className={`border border-[#e6e6e6] group hover:shadow-3xl cursor-pointer ${style}`}>
            <Image src={img} className="w-full h-[200px] object-cover" />
            <div className='p-4 flex flex-col gap-2'>
                <h2 className='text-[1.5rem] leading-[1.725rem] font-semibold text-[#1f1d21] group-hover:text-[#bd0032] group-hover:underline'>{title}</h2>
                <p className="text-[1rem] leading-[1.6rem] font-normal text-[#1f1d21]">{text}</p>
            </div>
        </div>
    );
}

News;