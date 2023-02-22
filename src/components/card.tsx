import Image from "next/image";
import clsx from "clsx";
import { bigShouldersDisplay } from "@/app/head";

type Props = {
    title: string;
    text: string;
    icon: string;
    variant: "green" | "orange" | "dark-green",
};

export function Card({ variant, text, title, icon }: Props) {
    return (
        <section className={clsx("text-white p-12 flex flex-col lg:w-[307px]", {
            "bg-orange rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg": variant === "orange",
            "bg-green": variant === "green",
            "bg-darkGreen rounded-b-lg lg:rounded-bl-none lg:rounded-r-lg": variant === "dark-green",
        })}>
            <Image src={`/images/${icon}`} alt={"Icon"} width={64} height={40}/>

            <div
                className={`uppercase text-grey text-[40px] font-semibold leading-[48px] mt-9 ${bigShouldersDisplay.className}`}>{title}</div>
            <div className={"opacity-75 my-6 text-[15px] leading-[25px]"}>{text}</div>

            <div className={"mt-auto"}>
                <button className={clsx("rounded-[25px] bg-white hover:text-white py-3 px-8 text-[15px] lg:mt-[83px] lg:pt-0 leading-[25px]", {
                    "text-orange hover:bg-orange": variant === "orange",
                    "text-green hover:bg-green": variant === "green",
                    "text-darkGreen hover:darkGreen": variant === "dark-green",
                })} type={"button"}>Learn more
                </button>
            </div>
        </section>
    );
}