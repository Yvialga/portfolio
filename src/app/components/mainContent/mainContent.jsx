'use client'
import { useState } from "react";
import Skills from "./skills";
import Overview from "./overview";
import Projects from "./projects";
import Contact from "./contact";

export default function MainContent() {
    const [sectionButtonState, setSectionButtonState] = useState(false);

    function handleDisplayOfSectionButton () {
        setSectionButtonState(!sectionButtonState);
    }

    
    return <>
        <Overview />
        <Skills handleClick={handleDisplayOfSectionButton} handleClickState={sectionButtonState} />
        <Projects handleClick={handleDisplayOfSectionButton} handleClickState={sectionButtonState}/>
        <Contact />
    </>
}