import Image from "next/image";
import News from "../cards/News";
import arrow from "../../public/assets/arrow.svg"
import teflon from "../../public/assets/teflon.png"
import richMan from "../../public/assets/rich-man.webp"
import honey from "../../public/assets/honey.jpeg"
import illustre from "../../public/assets/illustre.jpeg"
import flavia from "../../public/assets/flavia.jpeg"
import groupViolence from "../../public/assets/group-violence.jpeg"
import plasticBottles from "../../public/assets/plasticbottles.jpeg"
import ice from "../../public/assets/ice.png"

export default function MoreNews() {

    const items = [
        {
            img: teflon,
            title: "Teflon is so slippery because it slides on itself",
            text: "The surface of Teflon – the non- stick coating in your pan – is incredibly slippery.Thanks to research carried out at the Institute of Physics(UvA) and research centre ARCNL, we finally know where this slipperiness ..."
        },
        {
            img: richMan,
            title: " The richest people don't turn out to be the smartest",
            text: "  Are the highest-paid jobs with the highest prestige performed by the smartest people? No, say sociologists who used unique information about 59,000 men to uncover the connection between intelligence and wealth."
        },
        {
            img: honey,
            title: "Why are our brains so huge?",
            text: " Why are human brains three times larger than those of our closest living relatives? A diverse, high-quality diet and a long childhood in which we learn complex ways to acquire and gather food could be a major ..."
        },
        {
            img: illustre,
            title: "Moratorium on research with Shell",
            text: "The UvA will not enter into research collaborations with Shell or similar companies for the time being.A discussion with students and staff needs to be concluded first, according to the Executive Board.In recent ..."
        },
        {
            img: flavia,
            title: "International Day of Women and Girls in Science: why role models matter",
            text: "On 11 February, it’s the International Day of Women and Girls in Science.This day is dedicated to promoting full and equal access to and participation in science for everyone.Role models are an important way to ..."
        },
        {
            img: groupViolence,
            title: "Political elites(sometimes) incite violence to strengthen group identity",
            text: "Using evidence from India political scientists from the University of Amsterdam and University College of London analyzed under what conditions political parties incite violence."
        },
        {
            img: illustre,
            title: "Investigation into Social Sciences whistleblower allegations",
            text: "A committee led by Carel Stolker, former rector magnificus and president of the Executive Board of Leiden University, will investigate whistleblower allegations from a Social Sciences lecturer at the UvA."
        },
        {
            img: ice,
            title: "Why icicles are rippled",
            text: "Winter is coming to an end; the last nights of below zero temperatures are here.In the morning, one still spots the occasional icicle on a gutter or car bumper.When you look at these icicles carefully, you may ..."
        },
        {
            img: plasticBottles,
            title: "Empty plastic bottles",
            text: "Consumers favour bio - based alternatives over traditional fossil - based plastic bottles When it comes to enhancing the sustainability of plastic beverage bottles, consumers are willing to pay a bonus for bio - based alternatives - the more so when the alternative is visually distinctive.This follows from ..."
        },
    ]

    return (
        <div className='bg-[#e6e6e6]'>
            <div className="px-2 mx-auto container max-w-[87.5rem] py-16 flex flex-col">
                <h1 className='text-[1.875rem] leading-[3rem] text-[#1f1d21] font-semibold py-1'>News</h1>
                <div className="flex gap-6 pt-6 overflow-auto scroll-hidden pb-[0.9375rem] ">
                    {
                        items.map((item, index) => <News key={index} img={item.img} title={item.title} text={item.text} style="bg-white pb-4 min-w-[20.5rem] max-w-[20.5rem]" />)
                    }
                </div>
                <div className="pb-[0.1875rem] self-end"><button className="flex items-end  text-[#bd0032] underline underline-offset-4">More news<Image src={arrow} width={20} /></button></div>
            </div>
        </div>
    );
}

