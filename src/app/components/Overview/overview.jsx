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
        <header className="text-white flex flex-col md:flex-wrap items-start overflow-hidden
                            w-full h-[20rem] md:w-[90%] md:m-12 md:rounded-[3rem] md:shadow-[0_0_20px_10px_rgb(0,0,0,0.1)]"> 
            <Image 
                src={code_screen}
                alt="Capture d'écran de l'environnement de développement"
                className="origin-top scale-150 md:transform-none md:w-2/5 md:order-1 md:bg-primary/85 md:p-8 "
            />
            <div className="absolute md:static flex flex-wrap flex-col items-center gap-y-4 sm:gap-y-6 md:gap-y-4 mt-4 sm:mt-20 md:mt-4 w-full md:w-min">
                <p className="font-bold mb-2.5 z-20 md:text-black">
                    Je suis <em 
                        className="not-italic capitalize  underline decoration-secondary underline-offset-5 decoration-4"
                    >tommy <span className="uppercase">bernard</span></em>,
                </p>
                <h1 className="font-extrabold bg-primary p-1.5 w-max px-2.5 rounded-3xl z-20">Développeur web Full Stack</h1>
                <p className="font-bold z-20 text-center md:text-black">Développe des sites web visibles sur ordinateurs, tablettes, et téléphones</p>
            </div>
            <div className="scroll-indicator relative md:absolute md:translate-y-[700%] mb-4 w-6 h-12 border-2 border-white md:border-black z-20 rounded-3xl self-center
                            before:relative before:content-[''] before:animate-bounce-increase before:bg-white md:before:bg-black before:w-4 before:h-4
                            before:inline-block before:rounded-full before:left-[2px] before:top-[20px] md:order-2 md:left-1/2">
            </div>
            <ul className="flex md:flex-wrap gap-x-1.5 bg-primary w-max py-2.5 z-20 md:w-2/5 whitespace-nowrap
                            animate-scrollingText md:animate-none md:justify-center">
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