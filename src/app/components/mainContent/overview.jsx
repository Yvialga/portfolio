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
        <header id="overview" className="text-white bg-white flex flex-col md:flex-wrap items-start md:items-center overflow-hidden md:overflow-visible relative left-1/2 transform -translate-x-1/2
                            w-full md:w-[50%] md2:w-[40%] md:my-12 md:rounded-[3rem] md:shadow-3xl"> 
            <Image 
                src={code_screen}
                alt="Capture d'écran de l'environnement de développement"
                className="origin-top scale-150 md:hidden"
            />
            <div className="absolute md:static flex flex-wrap flex-col items-center gap-y-4 sm:gap-y-6 md:gap-y-4 mt-4 sm:mt-20 md:mt-4 w-full md:w-auto md:mb-4">
                <p className="font-bold mb-2.5 z-20 md:text-black">
                    Je suis <em 
                        className="not-italic capitalize underline decoration-secondary underline-offset-5 decoration-4 md:hover:decoration-2"
                    >tommy <span className="uppercase">bernard</span></em>,
                </p>
                <h1 className="font-extrabold bg-primary p-1.5 w-max px-2.5 rounded-3xl z-20">Développeur web Full Stack</h1>
                <p className="font-bold z-20 text-center md:text-black px-2">Développe des sites web pour ordinateurs, tablettes, et téléphones</p>
            </div>
            <div className="scroll-indicator relative md:absolute md:transform md:translate-y-[650%] lg:translate-y-[580%] mb-4 w-6 h-12 border-2 border-white z-50 rounded-3xl self-center
                            before:relative before:content-[''] before:animate-bounce-increase before:bg-white before:z-50 before:w-4 before:h-4
                            before:inline-block before:rounded-full before:left-[1px] v-sm:before:left-[2px] before:top-[20px] md:left-1/2">
            </div>
            <ul className="flex md:flex-wrap gap-x-1.5 bg-primary w-max py-2.5 md:px-1 z-20 md:w-full whitespace-nowrap
                            animate-scrollingText md:animate-none md:justify-center md:rounded-b-[2.5rem]">
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