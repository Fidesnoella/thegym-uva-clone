import News from "../cards/News";
import stairs from "../../public/assets/stairs.jpeg"
import bachelorweek from "../../public/assets/bachelorweek.jpeg"
import stad from "../../public/assets/stad.jpeg"

export default function Current() {
    return (
        <div className='px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem] -mt-20 lg:-mt-0 lg:pt-12 pb-16'>
            <h1 className='text-[1.875rem] leading-[3rem] text-[#1f1d21] font-semibold py-0.5'>Current</h1>
            <div className="grid sm:grid-cols-3 gap-6 pt-6">
                <News img={stairs} title="Study in Amsterdam Week 20 - 24 February" text="Discover everything an international student needs to know about studying at the UvA." />
                <News img={stad} title=" The UvA and the smart city" text="Find out how our cities are becoming smarter every day. UvA researchers are examining the pitfalls and the potential." />
                <News img={bachelorweek
                } title="Bachelor's Week 17 - 25 March" text="Discover your Bachelor's at the UvA." />
            </div>
        </div>
    );
}
