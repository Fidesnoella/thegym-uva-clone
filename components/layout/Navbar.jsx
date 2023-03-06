import React from 'react';
import Image from 'next/image';
import logo from "../../public/assets/logo-UvA-large-en.svg"

export default function Navbar() {
    return (
        <div className='px-[0.625rem] xl:px-2 mx-auto container max-w-none xl:max-w-[87.5rem]'>
            <div className='flex justify-between bg-white py-[1.3125rem]'>
                <div>
                    <Image src={logo} />
                </div>
                <div className='flex gap-4 items-center'>
                </div>
            </div>
            <div className='text-[#f5f5f5]'>

            </div>

        </div>
    );
}
