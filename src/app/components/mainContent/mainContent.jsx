'use client'
import { useState } from "react";
import Skills from "./skillsSection";
import Overview from "./overview";
import Projects from "./projectsSection";
import Contact from "./contactSection";

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