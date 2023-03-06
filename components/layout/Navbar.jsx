import localFont from "@next/font/local";
import { useState, useEffect } from "react";
import Image from 'next/image';
import logo from "../../public/assets/logo-UvA-large-en.svg"
import logoSmall from "../../public/assets/logo-UvA-small .svg"
import logoMedium from "../../public/assets/logo-UvA-medium-en .svg"
import search from "../../public/assets/search-gray.svg"
import heart from "../../public/assets/heart.svg"
import language from "../../public/assets/language.svg"
import menu from "../../public/assets/menu.svg"

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


export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);
    const [edu, setEdu] = useState(0);
    const [research, setResearch] = useState(0);
    const [event, setEvent] = useState(0);
    const [about, setAbout] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 5) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (

        <div className=''>
            <div className="shadow-7xl bg-white fixed w-full z-50">
                <div className="px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem]">
                    <div className='hidden lg:flex justify-between bg-white py-[1.3125rem] cursor-pointer'>
                        <div>
                            {scrolled ? <Image src={logoSmall} className="duration-300 h-12 object-cover" /> : <Image src={logo} className="duration-300" />}
                        </div>
                        <div className={`flex gap-4 items-center${sourceSans.variable} font-sourceSans`}>
                            <div className='flex relative'>
                                <input type="text" className='w-[20rem] xl:w-[25rem] rounded-md placeholder-[#575757] border border-[#d6d6d6] py-2 px-2 outline-1 outline-black' placeholder='Search...' />
                                <Image src={search} className="absolute right-2 top-2 border-l p-1 w-8" />
                            </div>
                            <div className='flex gap-2 items-center group'>
                                <p className='text-[#1f1d20] flex-nowrap group-hover:underline group-hover:underline-offset-4 text-[1rem] font-semibold leading-[1rem]'>Compare programmes</p>
                                <Image src={heart} className="overflow-hidden" />
                            </div>
                            <div className='border border-[#1f1d21] p-2'>
                                <Image src={language} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between bg-white py-[1.3125rem] cursor-pointer lg:hidden">
                        <div>
                            <Image src={logoMedium} className="duration-300 object-cover hidden sm:block" />
                            <Image src={logoSmall} className="duration-300 h-12 object-cover sm:hidden block" />
                        </div>
                        <div className={`flex gap-4 items-center${sourceSans.variable} font-sourceSans`}>
                            <div className='flex gap-2 items-center group'>
                                <p className='text-[#1f1d20] flex-nowrap group-hover:underline group-hover:underline-offset-4 text-[1rem] font-semibold leading-[1rem]  hidden sm:block'>Compare programmes</p>
                                <Image src={heart} className="overflow-hidden" />
                            </div>
                            <div className='border border-[#1f1d21] p-2'>
                                <Image src={search} />
                            </div>
                            <div className='border border-[#1f1d21] p-2'>
                                <Image src={language} />
                            </div>
                            <div className="bg-black rounded-sm hover:bg-opacity-80 flex items-center px-2 gap-1">
                                <span className="text-white hidden sm:block">Menu</span>
                                <Image src={menu} width={20} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='hidden lg:block shadow-7xl bg-[#f5f5f5] pt-[5.75rem] cursor-pointer'>
                <div className="px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem] text-[#1f1d21]">
                    <div className="flex gap-8 text-[1.25rem] leading-[2rem] font-normal py-2">
                        <div onMouseOver={() => setEdu(1)} onMouseLeave={() => setEdu(0)} className="relative" >
                            <span className="hover:underline hover:underline-offset-4 hover:text-[#bd0032]">Education</span>
                            {
                                edu ? (
                                    <ul className="flex flex-col gap-2 absolute z-[9999] cursor-pointer bg-[#f5f5f5] w-[18.75rem] p-2">
                                        {
                                            ["Bachelor's", "Master's", "Professional development", "Summer School", "Open programmes", "Exchange"].map((item, index) => <li className="flex gap-1 text-[1rem] leading-[2rem] hover:underline hover:text-[#bd0032]" key={index}>{item}</li>)
                                        }
                                    </ul>
                                ) : ""
                            }
                        </div>
                        <div onMouseOver={() => setResearch(1)} onMouseLeave={() => setResearch(0)} className="relative">
                            <div>
                                <span className="hover:underline hover:underline-offset-4 hover:text-[#bd0032]">Research</span>
                                {
                                    research ? (
                                        <ul className="flex flex-col gap-2 absolute z-[9999] cursor-pointer bg-[#f5f5f5] w-[18.75rem] p-2">
                                            {
                                                ["Research at the UvA", "PHD"].map((item, index) => <li className="flex gap-1 text-[1rem] leading-[2rem] hover:underline hover:text-[#bd0032]" key={index}>{item}</li>)
                                            }
                                        </ul>
                                    ) : ""
                                }
                            </div>
                        </div>
                        <div onMouseOver={() => setEvent(1)} onMouseLeave={() => setEvent(0)} className="relative">
                            <span className="hover:underline hover:underline-offset-4 hover:text-[#bd0032]">News & Events</span>
                            {
                                event ? (
                                    <ul className="flex flex-col gap-2 absolute z-[9999] cursor-pointer bg-[#f5f5f5] w-[18.75rem] p-2">
                                        {
                                            ["News", "Events", "Press Office", "Coronavirus information", "Ukraine information and support"].map((item, index) => <li className="flex gap-1 text-[1rem] leading-[2rem] hover:underline hover:text-[#bd0032]" key={index}>{item}</li>)
                                        }
                                    </ul>
                                ) : ""
                            }
                        </div>
                        <div onMouseOver={() => setAbout(1)} onMouseLeave={() => setAbout(0)} className="relative">
                            <span className="hover:underline hover:underline-offset-4 hover:text-[#bd0032]">About the UvA</span>
                            {
                                about ? (
                                    <ul className="flex flex-col gap-2 absolute z-[9999] cursor-pointer bg-[#f5f5f5] w-[18.75rem] p-2">
                                        {
                                            ["About the University", "Alumni", "Contact and locations", "Organisation", "Policy and regulations", "Working at the UvA"].map((item, index) => <li className="flex gap-1 text-[1rem] leading-[2rem] hover:underline hover:text-[#bd0032]" key={index}>{item}</li>)
                                        }
                                    </ul>
                                ) : ""
                            }
                        </div>
                        <div>
                            <span className="hover:underline hover:underline-offset-4 hover:text-[#bd0032]">Library</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}
