
export default function Visit() {
    return (
        <div className='px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem] py-16'>
            <h1 className='text-[1.875rem] leading-[3rem] text-[#1f1d21] font-semibold py-1'>Go to:</h1>
            <div className='grid sm:grid-cols-3 pt-6 gap-6'>
                {
                    ["Alumni", "PhD", "Working at the UvA", "UvA Experts", "Staff website", "Student website"].map((item, index) => {
                        return <div key={index} className='border border-[#e6e6e6] group hover:shadow-3xl cursor-pointer'>
                            <h2 className='text-[1.5rem] leading-[1.15rem] font-semibold text-[#1f1d21] group-hover:text-[#bd0032] group-hover:underline group-hover:underline-offset-4 p-4 pb-8'>{item}</h2>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
