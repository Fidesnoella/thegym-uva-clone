import localFont from "@next/font/local";
import Image from "next/image";
import flip from "../../public/assets/flip.jpeg"
import arrow from "../../public/assets/arrow.svg"


const sourceSans = localFont({
    src: [
        {
            path: "../../public/fonts/sourceSansPro-Regular.woff2",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/sourceSansPro-Semibold.woff2",
            weight: "600",
            style: "normal",
        },
    ],
    variable: "--font-sourceSans",
});

export default function Hero() {

    const items = [
        {
            title: "Bachelor's",
            text: "20+ English-taught Bachelor's programmes Master's"
        },
        {
            title: "Master's",
            text: "200 + English - taught Master's programmes"
        },
        {
            title: "Professional development",
            text: "MBA's, executive programmes, and master classes"
        }
    ]

    return (
        <div className='px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem] pt-20 lg:pt-0'>
            <div className="max-w-[40.3125rem] lg:max-w-[72.875rem] mx-auto px-3">
                <div className=" pt-[4.5rem] grid lg:grid-cols-2 gap-y-2 lg:gap-y-0">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-semibold text-[2.625rem] leading-[3.6875rem] text-[#1f1d21]">University of Amsterdam</h1>
                        <h3 className="font-normal text-[1.75rem] leading-[2.8125rem] text-[#1f1d21]">Inspiring generations since 1632.</h3>
                    </div>
                    <div >
                        <Image src={flip} className="object-cover shadow-none sm:shadow-5xl mx-auto" />
                    </div>
                </div>
                <div className="flex flex-col justify-center lg:justify-start items-center px-4 sm:px-8 lg:px-0 lg:flex-row gap-4 -translate-y-32 lg:-translate-y-36">
                    {
                        items.map((item, index) => {
                            return <div className={`bg-white border border-[#bd0032] flex justify-between items-center p-5 hover:shadow-4xl cursor-pointer w-full lg:w-auto max-w-none lg:max-w-[19.6875rem] ${sourceSans.variable} font-sourceSans`} key={index}>

                                <div>
                                    <h5 className="text-[#bd0032] font-semibold text-[1rem] leading-[1.6rem]">{item.title}</h5>
                                    <p className="max-w-[17.5rem] font-normal text-[#575757]">{item.text}</p>
                                </div>
                                <div>
                                    <Image src={arrow} />
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
}
