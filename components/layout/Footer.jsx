import localFont from "@next/font/local";
import { useState } from "react";
import Image from "next/image";
import chevronRight from "../../public/assets/chevron-right.svg"
import logo from "../../public/assets/logo-UvA-large-en -1.svg"
import facebook from "../../public/assets/facebook.svg"
import twitter from "../../public/assets/twitter.svg"
import linkedin from "../../public/assets/linkedin.svg"
import instagram from "../../public/assets/instagram.svg"
import whatsapp from "../../public/assets/whatsapp.svg"
import youtube from "../../public/assets/youtube.svg"
import chevronDown from "../../public/assets/chevron-down.svg"
import chevronUp from "../../public/assets/chevron-up.svg"


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


export default function Footer() {
    const [edu, setEdu] = useState(false);
    const [go, setGo] = useState(false);
    const [info, setInfo] = useState(false);
    const [contact, setContact] = useState(false);
    return (
        <div className={`bg-[#1f1d20] text-white font-normal text-sm leading-[1.375rem]
        mt-16 ${sourceSans.variable} font-sourceSans`}>
            <div className='px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem]'>
                <div className="pt-9 pb-12">
                    <Image src={logo} className="w-[19.8125rem] h-[2.1875rem]" />
                </div>
                <div className="flex gap-2 flex-col sm:hidden">
                    <div>
                        <div className="flex items-start  justify-between  border-t border-[#8f8f8f] pt-4" onClick={() => setEdu(!edu)}>
                            <h3 className="pb-5 font-semibold leading-4">Education & research</h3>
                            {edu ? <Image src={chevronUp} width={20} /> : <Image src={chevronDown} width={20} />}
                        </div>
                        {edu && (
                            <ul className="flex flex-col gap-2">
                                {
                                    ["Bachelors programmes", "Minors", "Masters programmes", "Professional development", "Exchange", "Summer School", "PhD at UvA", "Research at UvA"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                                }
                            </ul>
                        )
                        }
                    </div>
                    <div>
                        <div className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between" onClick={() => setGo(!go)}>
                            <h3 className="pb-5 font-semibold leading-4">Go to</h3>
                            {go ? <Image src={chevronUp} width={20} /> : <Image src={chevronDown} width={20} />}
                        </div>
                        {go && (
                            <ul className="flex flex-col gap-2">
                                {
                                    ["Webmail for UvA staff", "Webmail UvA students", "Library", "Canvas", "SIS", "Timetable", "Course Catalogue", "Vacancies", "UvAshopnl Merchandise store"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                                }
                            </ul>
                        )
                        }
                    </div>
                    <div>
                        <div className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between" onClick={() => setInfo(!info)}>
                            <h3 className="pb-5 font-semibold leading-4">Information for</h3>
                            {info ? <Image src={chevronUp} width={20} /> : <Image src={chevronDown} width={20} />}
                        </div>
                        {info && (
                            <ul className="flex flex-col gap-2">
                                {
                                    ["Prospective students", "Current students", "Staff", "Journalists", "Alumni", "Donors", "Employers", "External suppliers"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                                }
                            </ul>
                        )
                        }
                    </div>
                    <div>
                        <div className="flex items-start border-t border-[#8f8f8f] pt-4 justify-between" onClick={() => setContact(!contact)}>
                            <h3 className="pb-5 font-semibold leading-4">Contact</h3>
                            {contact ? <Image src={chevronUp} width={20} /> : <Image src={chevronDown} width={20} />}
                        </div>
                        {contact && (
                            <ul className="flex flex-col gap-2">
                                {
                                    ["Contact information", "Locations", "Contact Student Services", "The UvA and social media"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                                }
                            </ul>
                        )
                        }
                    </div>
                </div>
                <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-y-7 lg:gap-y-0 pb-[1.8125rem] cursor-pointer">
                    <div>
                        <h3 className="pb-5 text-base font-semibold leading-4">Education & research</h3>
                        <ul className="flex flex-col gap-2">
                            {
                                ["Bachelors programmes", "Minors", "Masters programmes", "Professional development", "Exchange", "Summer School", "PhD at UvA", "Research at UvA"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-5 text-base font-semibold leading-4">Go to</h3>
                        <ul className="flex flex-col gap-2">
                            {
                                ["Webmail for UvA staff", "Webmail UvA students", "Library", "Canvas", "SIS", "Timetable", "Course Catalogue", "Vacancies", "UvAshopnl Merchandise store"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-5 text-base font-semibold leading-4">Information for</h3>
                        <ul className="flex flex-col gap-2">
                            {
                                ["Prospective students", "Current students", "Staff", "Journalists", "Alumni", "Donors", "Employers", "External suppliers"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <h3 className="pb-5 text-base font-semibold leading-4">Contact</h3>
                        <ul className="flex flex-col gap-2">
                            {
                                ["Contact information", "Locations", "Contact Student Services", "The UvA and social media"].map((item, index) => <li className="flex gap-1" key={index}><Image src={chevronRight} width={20} />{item}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className="border-[#1f1d20] border-t sm:border-[#8f8f8f] w-full">
                <div className="px-2 mx-auto container max-w-[87.5rem] flex flex-col lg:flex-row justify-center items-center gap-y-7 lg:gap-y-0 lg:justify-between py-[1.875rem]">
                    <ul className="flex gap-3 cursor-pointer order-2 lg:order-none flex-wrap justify-center">
                        {
                            ["Copyright UvA 2023", "About this site", "Privacy", "Cookie settings"].map((item, index) => <li key={index}>{item}</li>)
                        }
                    </ul>
                    <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-2 gap-y-2 sm:gap-y-4 order-1 lg:order-none">
                        <p>Follow UvA on social media</p>
                        <div className="flex w-full sm:w-auto items-center justify-between sm:justify-self-auto gap-2 cursor-pointer px-12 sm:px-0">
                            {
                                [facebook, twitter, linkedin, instagram, whatsapp, youtube].map((item, index) => <Image src={item} key={index} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
