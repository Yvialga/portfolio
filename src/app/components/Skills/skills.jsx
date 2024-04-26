'use client'
import { useState } from "react";
import { ChooseTheRightLogo, SearchTheRightIcon } from "../../libs/picturesPaths";
import { SectionButton } from "../sectionButton";

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
    const [sectionButtonState, setSectionButtonState] = useState(false);

    function handleDisplayOfSectionButton () {
        setSectionButtonState(!sectionButtonState);
    }

    return <section className="my-8 md:my-20">
        <SectionButton handleClick={handleDisplayOfSectionButton} handleClickState={sectionButtonState}/>
        <div>
        {
            [...Array(HARD_SKILLS.length)].map((e, i) => {
                return <div className="flex flex-wrap flex-col items-center">
                    <section className={`${sectionButtonState ? "hidden" : "block"}`}>
                        <h3 className="uppercase font-semibold text-center py-6 text-white">{HARD_SKILLS[i].title}</h3>
                        <div className="flex flex-wrap px-[10%] v-sm:px-[10%] gap-y-4 gap-x-4 justify-start v-sm:justify-center">
                            {
                                [...Array(HARD_SKILLS[i].skills_list.length)].map((e, j) => {
                                    return <SkillItem text={HARD_SKILLS[i].skills_list[j]}/>
                                })
                            }
                        </div>
                    </section>
                    {
                        ((++i) < HARD_SKILLS.length) ? <hr className={`rotate-90 transform translate-y-2 border-none bg-secondary h-1 w-10 my-8 text-center ${sectionButtonState ? "hidden" : "block"}`} />
                            : <hr className="hidden" />
                    }
                </div>;
            })
        }
        </div>
    </section>;
}

function SkillItem({text}) {
    return <div className="border bg-white border-white flex gap-x-2 rounded-3xl w-max px-2 items-center py-1 cursor-default transfrom hover:translate-y-1 transition hover:shadow-[0_0_20px_10px_rgb(0,0,0,0.1)]">
        <ChooseTheRightLogo toolName={text} />
        <strong className="font-semibold w-max">{text}</strong>
    </div>;
}