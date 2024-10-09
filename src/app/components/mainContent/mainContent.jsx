'use client'
import Skills from "./skillsSection";
import Overview from "./overview";
import Projects from "./projectsSection";
import Contact from "./contactSection";

export default function MainContent() {
    return <>
        <Overview />
        <Skills />
        <Projects />
        <Contact />
    </>
}