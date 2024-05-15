import {SectionButton} from "./sectionButton"
import { useState } from "react";
import { SearchTheRightIcon, ChooseTheRightLogo } from "../../libs/picturesPaths";
import Link from "next/link";

const SECTION_NAME = "contact";
const CONTACTS = [
    {
        name: "mail",
        desc: "envoyez moi un mail",
        img: <SearchTheRightIcon sectionName={"mail"} className={"w-6 h-6"}/>,
        link: "/contact"
    },
    {
        name: "github",
        desc: "mes projets",
        img: <ChooseTheRightLogo toolName="github" className={"w-6 h-6"}/>,
        link: "https://github.com/Yvialga"
    },
    {
        name: "linkedin",
        desc: "mon réseaux",
        img: <ChooseTheRightLogo toolName="linkedin" className={"w-6 h-6"}/>,
        link: "https://www.linkedin.com/in/tommybernard/"
    },
];

export default function Contact() {
    const [contactButtonState, setContactButtonState] = useState(false);

    function toggleDisplayOfContactSection () {
        setContactButtonState(!contactButtonState);
    }

    return <section id="contacts" className="mb-8">
        <SectionButton sectionName={SECTION_NAME} handleClick={toggleDisplayOfContactSection} handleClickState={contactButtonState} />
        <div className={`my-8 gap-y-4 flex flex-col pl-4 sm:pl-0 sm:flex-row sm:justify-center sm:gap-x-6 ${contactButtonState ? "hidden" : "block"}`}>
            {[...Array(CONTACTS.length)].map((e, i) =>
                        <ContactItem description={CONTACTS[i].desc} href={CONTACTS[i].link} img={CONTACTS[i].img} key={i}/>
            )}
        </div>
    </section>;     
}

/**
 * 
 * @param {Object} contactElement
 * @param {String} contactElement.img Element's img to refers to the right icon or logo.
 * @param {String} contactElement.description Description which is displayed to the public.
 * @param {Object|String} contactElement.href Hyperlink reference which can redirect both within the same page or point to another page.
 * @returns {import("react").ReactElement} 
 */
function ContactItem({img, description, href}) {
    return <Link href={href} className="bg-white rounded-3xl flex w-max whitespace-nowrap h-min px-[0.75rem] py-[0.40rem] gap-x-2 items-center hover:shadow-3xl">
        <p className="first-letter:capitalize h-min w-auto min-w-max font-semibold">{description}</p>
        {img}
    </Link>
}