'use client'

import { useState } from "react";
import { SectionButton } from "./sectionButton"
import { PROJECTS_LIST } from "../../libs/projectsList";
import Image from "next/image";
import ContentSeparatorBar from "../../libs/contentSeparatorBar";
import BookiModalButton from "../ui/BookiModalButton";
import PortfolioModalButton from "../ui/PortfolioModalButton";
import DgtButton from "../ui/DgtButton";
import CanoeButton from "../ui/CanoeButton";

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
                        <div className={`sm:mx-4 mt-6 overflow-clip rounded-3xl h-64 w-72 v-sm:w-80 sm:w-72 hover:shadow-3xl`}
                            onPointerDown={togglePointerState}
                        >
                            <Image
                                alt={`Aperçu du projet ${PROJECTS_LIST[i].title}`}
                                src={PROJECTS_LIST[i].src}
                                width={1440}
                                height={280}
                                className="w-full aspect-auto"
                            />
                        </div>
                        <h4 className="my-4 text-white first-letter:uppercase text-lg">{PROJECTS_LIST[i].title}</h4>
                        <ChooseProjectCardButton projectName={PROJECTS_LIST[i].title} />
                    </section>
                    <ContentSeparatorBar iteration={i} arraySize={PROJECTS_LIST.length}/>
                </>;
            })
        }
    </div>;
}

function ChooseProjectCardButton ({projectName}) {
    if (projectName == "booki") {
        return <BookiModalButton />
    } else if (projectName == "portfolio") {
        return <PortfolioModalButton />
    } else if (projectName == "DGT Calculator") {
        return <DgtButton />
    } else {
        return <CanoeButton />
    }
}