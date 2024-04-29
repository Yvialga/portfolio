'use client'
import {SectionButton} from "./sectionButton"
import { PROJECTS_LIST } from "../../libs/projectsList";
import { useState } from "react";

const PROJECTS = "projects";

export default function Projects() {
    const [projectButtonState, setProjectButtonState] = useState(false);

    function handleDisplayOfProjectSection () {
        setProjectButtonState(!projectButtonState);
    }
    
    return <section>
        <SectionButton sectionName={PROJECTS} handleClick={handleDisplayOfProjectSection} handleClickState={projectButtonState} />
        <ProjectItem handleProjectButtonState={projectButtonState} />
    </section>;
}

function ProjectItem({handleProjectButtonState}) {
    return <>
        {
            [...Array(PROJECTS_LIST.length)].map( (e, i) => {
                return <section className={`${handleProjectButtonState ? "hidden" : "block"} flex flex-col`}>
                    <div className={`w-80 h-80`}>
                        {/* <Image alt={`Aperçu du projet ${PROJECTS_LIST[i].title}`} src={} /> */}
                        <div>
                            <h4 className="capitalize text-white">Projet {PROJECTS_LIST[i].title}</h4>
                            <hr className="rotate-90 transform translate-y-2 border-none bg-secondary h-1 w-10 my-8 text-center" />
                            <p>{PROJECTS_LIST[i].desc}</p>
                        </div>
                    </div>
                    <button className="bg-white border-primary border-2 text-primary font-bold hover:bg-primary self-end hover:text-white px-4 py-2 rounded-3xl">Voir plus</button>  
                </section>;
            })
        }
    </>;
}