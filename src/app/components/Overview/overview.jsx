'use client'
import Image from "next/image";
import code_screen from "../../../assets/pictures/images/menu-code.png";

const businessKeyWords = [
    "web",
    "full-stack",
    "SEO",
    "accessibilité",
    "cyber-sécurité",
    "javascript",
    "react-js",
    "tailwind-css",
    "next-js",
    "front-end",
    "back-end"
]

export default function Overview() {
    return (
        <header className="text-white flex flex-col overflow-hidden ">
            <Image 
                src={code_screen}
                alt="Capture d'écran de l'environnement de développement"
                className="origin-top scale-150 md:transform-none md:w-2/4"
            />
            <div className="absolute flex flex-wrap flex-col items-center gap-y-4 sm:gap-y-6 mt-4 sm:mt-20 w-full">
                <p className="font-bold mb-2.5 z-20">
                    Je suis <em 
                        className="not-italic capitalize  underline decoration-secondary underline-offset-5 decoration-4"
                    >tommy <span className="uppercase">bernard</span></em>,
                </p>
                <h1 className="font-extrabold bg-primary p-1.5 w-max px-2.5 rounded-3xl z-20">Développeur web Full Stack</h1>
                <p className="font-bold z-20 text-center">Développe des sites web visibles sur ordinateurs, tablettes, et téléphones</p>
            </div>
            <div className="scroll-indicator relative mb-4 w-6 h-12 border-2 border-white z-20 rounded-3xl self-center
                            before:relative before:content-[''] before:animate-bounce-increase before:bg-white before:w-4 before:h-4
                            before:inline-block before:rounded-full before:left-[2px] before:top-[20px]">
            </div>
            <ul className="flex gap-x-1.5 bg-primary w-max md:w-screen py-2.5 z-20 whitespace-nowrap animate-scrollingText md:animate-none md:justify-center">
                {   // generate hashtags list
                    [...Array(businessKeyWords.length)].map((e, i) => {
                        return <li className="font-semibold">#{businessKeyWords[i]}</li>
                    })
                }
                {   // generate second time hashtags to give an effect to text to disappear on the left to reappear on the right
                    [...Array(businessKeyWords.length)].map((e, i) => {
                        return <li className="font-semibold md:hidden">#{businessKeyWords[i]}</li>
                    })
                }
            </ul>
        </header>
    );
}