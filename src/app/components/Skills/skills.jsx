'use client'
import Image from "next/image";
import { ChooseTheRightImage } from "../../libs/picturesPaths";

// any tool added must be also added in libs/picturesPaths.jsx.
const HARD_SKILLS = [
    {
        title: "Langages",
        skills_list: [
            "HTML",
            "CSS",
            "JavaScript",
            "SCSS",
            "PHP",
            "Java",
            "SQL",
        ]
    }, {
        title: "Frameworks",
        skills_list: [
            "React.js",
            "Next.js",
            "Tailwind css",
        ]
    }, {
        title: "Outils",
        skills_list: [
            "VS Code",
            "GitHub",
            "Figma",
            "Illustrator",
            "IDE Eclipse",
            "Jira",
            // "Docker",
        ]
    }
]

export default function Skills() {
    return <section>
        <header>   {/* bouton SKILLS */}
            <Image src="/../../../assets/pictures/icons/diamond-icon.png" alt="Icone des compétences" className="" width={35} height={35}/>
            <input type="checkbox" id="skills-button" />
            <label htmlFor="skills-button" className="uppercase">skills</label>
        </header>
        <div>
        {
            [...Array(HARD_SKILLS.length)].map((e, i) => {
                return <>
                    <section>
                        <h3 className="uppercase font-semibold">{HARD_SKILLS[i].title}</h3>
                        <div className="grid grid-cols-[20%_1fr_1fr_20%] grid-rows-2">
                            {
                                [...Array(HARD_SKILLS[i].skills_list.length)].map((e, j) => {
                                    return <SkillItem text={HARD_SKILLS[i].skills_list[j]}/>
                                })
                            }
                        </div>
                    </section>
                    {
                        ((HARD_SKILLS[i++]) != null) ? <hr className="rotate-90 bg-secondary h-1 w-10 block" /> : <hr className="hidden" />
                    }
                    {/*
                        SI il y a un élément après ALORS <hr></hr>
                        length du tableau -> -1 -> Regarde l'index de l'item courant si correspond
                        Si i++ ne renvoie pas null
                    */}
                </>;
            })
        }
        </div>
    </section>;
}

function SkillItem({text}) {
    return <div className="border border-black flex [&:nth-child(odd)]:col-start-2 [&:nth-child(2)]:col-end-4">
        <ChooseTheRightImage toolName={text} />
        <strong className="font-medium w-max">{text}</strong>
    </div>;
}

/* function => 
    quel est le texte recherché ? text

    regarde tt les liens, sélectionne celui qui contient le 

    return <Image src={le bon chemin} ... />
    */
function searchPicturesPath({text}) {
    switch (text) {
        case "HTML" :
            return logosPaths[5];
            case"CSS"  :
            return logosPaths[1];
            case"JavaScript" :
            return logosPaths[5]; // no path...
            case"SCSS" :
            return logosPaths[11];
            case"PHP" :
            return logosPaths[9];
            case"Java" :
            return logosPaths[6];
    }
}