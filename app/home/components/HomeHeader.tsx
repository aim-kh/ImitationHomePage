"use server"
import { SequentialDisplay } from "./SequentialDisplay";
import { ContentsMenu } from "@components/Common/ContentsMenu";
import Link from "next/link";
import clsx from "clsx";


export async function HomeHeader(){

    return (
        <header 
            className={clsx(
                "relative w-full block min-h-[380px] md:min-h-[760px]",
                "bg-center bg-no-repeat bg-cover"
            )}
            style={{ backgroundImage: "url('/image/top_image.jpg')" }}    
        >
            <div className="">
                <i></i><i></i><i></i>
            </div>
            <SequentialDisplay />
            <ContentsMenu 
                CustomClassName="bg-black opacity-70 border-white text-[#fff] hover:opacity-40 mt-[60px]"
            />
        </header>
    )
}