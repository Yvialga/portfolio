'use client'
import {SectionButton} from "./sectionButton"
import { PROJECTS_LIST } from "../../libs/projectsList";
import { useState } from "react";
import Image from "next/image";
import ContentSeparatorBar from "../../libs/contentSeparatorBar";

const PROJECTS = "projects";

export default function Projects() {
    const [projectButtonState, setProjectButtonState] = useState(false);

    function toggleDisplayOfProjectSection () {
        setProjectButtonState(!projectButtonState);
    }
    
    return <section className="mb-8">
        <SectionButton sectionName={PROJECTS} handleClick={toggleDisplayOfProjectSection} handleClickState={projectButtonState} />
        <ProjectItem handleProjectButtonState={projectButtonState} />
    </section>;
}

function ProjectItem({handleProjectButtonState}) {
    const [isPointedDownwards, setPointerState] = useState(false);

    function togglePointerState() {
        setPointerState(!isPointedDownwards);
    }

    return <div className={`${handleProjectButtonState ? "hidden" : "block"}  flex flex-col sm:flex-row items-center justify-center`}>
        {
            [...Array(PROJECTS_LIST.length)].map( (e, i) => {
                return <>
                    <section className="flex flex-col items-center">
                        <div className={`m-8 sm:mx-4 mt-6 overflow-clip rounded-3xl h-64 w-72 v-sm:w-80 sm:w-72 cursor-pointer hover:shadow-3xl`}
                            onPointerDown={togglePointerState}
                        >
                            <Image
                                alt={`Aperçu du projet ${PROJECTS_LIST[i].title}`}
                                src={PROJECTS_LIST[i].src}
                                width={1440}
                                height={280}
                                className="w-full aspect-auto"
                            />
                            <div className={`relative duration-500 transform ${isPointedDownwards ? "-translate-y-[250%]" : ""} pb-4 pl-2 bg-gray-600/95 text-white h-[100%] flex flex-col pt-20 font-semibold`}>
                                <h4 className="capitalize">Projet {PROJECTS_LIST[i].title}</h4>
                                <hr className="rotate-90 transform translate-y-2 border-none bg-secondary h-1 w-10 my-8 text-center" />
                                <p>{PROJECTS_LIST[i].desc}</p>
                            </div>
                        </div>
                        <button className="bg-white border-primary border-2 text-primary font-bold hover:bg-primary self-end hover:text-white px-4 py-2 mr-8 rounded-3xl">Voir plus</button>  
                    </section>
                    <ContentSeparatorBar iteration={i} arraySize={PROJECTS_LIST.length}/>
                </>;
            })
        }
    </div>;
}