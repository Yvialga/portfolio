'use client';
import Link from "next/link";
import "../../../assets/styles/navbar.css";
import { useState } from "react";

/**
 * @type {Array.<{title: string, link: string, hasSubMenu: boolean}>} */
const navbarItems = [
    {
        title: "À propos",
        link: "#",  // TODO
        hasSubMenu: false
    }, {
        title: "Compétences",
        link: "#",  // TODO
        hasSubMenu: false
    }, {
        title: "Projets",           //exemple de sM https://tailwindui.com/components/application-ui/elements/dropdowns
        link: "",           // Link property is let empty if is a sub-menu.
        hasSubMenu: [
            {
                title: "Web Development",
                link: "",
                hasSubMenu: true
            }, {
                title: "Game Design",
                link: "",
                hasSubMenu: true
            }
        ]
    }, {
        title: "Contact",
        link: "",    // TODO / redirect towards contact page
        hasSubMenu: false
    }
];

/**Return the responsive navigation bar. Conditional operator shows or hides menu's items on mobile device.
 * 
 * @exports
 * @default
 * @returns {import("react").ReactElement}
 */
export default function NavBar() {
    let [isChecked, setChecked] = useState(false);

    /** Toggle value of checkbox state to open or close menu.*/
    function onCheckboxChange () {
        if (isChecked) {
            setChecked(false);
        } else {
            setChecked(true);
        }
    }

    return (
        <nav className="sticky bg-primary flex flex-wrap items-center justify-between w-full py-4 md:py-0
        text-lg px-4 shadow-2xl">
            <Logo />
            <BurgerIcon handleChange={onCheckboxChange} />
            <ul className={`${isChecked ? "right-0" : "-right-full"} absolute bg-primary top-0 w-3/6 pt-28 h-screen text-end duration-300
                            md:flex md:items-center md:w-auto md:static md:h-auto md:pt-0`}>
                {
                    [...Array(navbarItems.length)].map((e, i) => (
                        <MenuItems title={navbarItems[i].title} link={navbarItems[i].link} hasSubMenu={navbarItems[i].hasSubMenu}/>
                    ))
                }
            </ul>
        </nav>
    );
}

/**
 * @returns {import("react").ReactElement} The Logo.
 */
function Logo() {
    return (
        <div className="text-white/90 hover:bg-secondary/95 active:bg-secondary/95 hover:text-black/90 active:text-black/90
                        font-bold text-center text-xl rounded-2xl py-1 px-2">
            <h2>
                <Link href={"#"}>
                    Tommy <br />
                    <em className="not-italic uppercase">Bernard</em>
                </Link>
            </h2>
        </div>
    );
}

/**Return animate burger icon for navigation bar.
 * 
 * @param {Object} paramOfBurger
 * @param {Function} paramOfBurger.handleChange manage checkbox's state to close or open menu.
 * @returns {import("react").ReactElement}
 */
function BurgerIcon({handleChange}) {
    const barsNumber = 3;
    return (
        <div className="md:hidden w-max float-right z-50">
            {/* import 'switch' burger icon https://uiverse.io/Creatlydev/pretty-gecko-71 */}
            <input className="check-icon  hidden" id="check-icon" name="check-icon" type="checkbox" onChange={handleChange}/>
            <label className="icon-menu  cursor-pointer relative flex flex-col bg-secondary px-3 w-12 rounded-full " htmlFor="check-icon">
                {
                    [...Array(barsNumber)].map((e, i) => (
                        <BurgerBars index={i+1} key={i}/>
                    ))
                }
            </label>
        </div>
    );
}

/**Return bar to build burger icon. 
 * 
 * @param {Object} bars 
 * @param {number} bars.index The index to matching css classes.
 * @returns {import("react").ReactElement}
 */
function BurgerBars({index}) {
    return(
        <div className={`bar bar--${index}`} key={index}></div>
    );
}

/**Return the JSX menu item with his title and his correct redirection.
 * 
 * @param {Object} menuItemsLink Specifications of the link.
 * @param {string} menuItemsLink.title Title of the menu item.
 * @param {string} menuItemsLink.link Link towards anchor or page. Let empty if item is a sub-menu.
 * @param {(boolean|string)} menuItemsLink.hasSubMenu True if the item should display as sub-menu, false otherwise.
 * @returns {import("react").ReactElement}
 */
function MenuItems({title, link, hasSubMenu}) {
    const [isHover, setHover] = useState(false);
    const [isOpen, setOpen] = useState(false);

    /**Toggle the value of hover state and then calls handleDisplayOfSubNav().*/
    function toggleHoverState() {
        setHover(!isHover);
        handleDisplayOfSubNav();
    }

    function handleDisplayOfSubNav() {
        if (!isHover && !isOpen) {
            setOpen(true);
        } else if (isHover && isOpen) {
            setOpen(false);
        }
    }

    const menuItemsClasses = `text-white/90 hover:bg-secondary/95 active:bg-secondary/95 hover:text-black/90 active:text-black/90
                            font-bold uppercase block underline decoration-secondary underline-offset-8 hover:no-underline md:no-underline decoration-4
                            delay-50 duration-200 py-6 pr-8 sm:pr-10 rounded-3xl md:px-2 md:mx-2 md:py-4 md:my-2 md:text-left cursor-pointer`;

    if (hasSubMenu) {
        return (
            <li
                onPointerEnter={
                    (e) => {
                        toggleHoverState();
                        e.preventDefault();
                    }
                }
                onPointerLeave={
                    (e) => {
                        toggleHoverState();
                        e.preventDefault();
                    }
                }
            
            >
                <h3 className={`${menuItemsClasses}`}>
                    {title}
                    <svg className={`h-5 w-5 ml-1 md:inline-block hidden text-white`} viewBox="0 0 20 20"  fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </h3>
                <svg className={`h-5 w-5 ml-1 block md:hidden -translate-y-12 float-right mr-2 text-white`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>

                <ul className={`${isOpen ? "block" : "hidden"} md:absolute md:bg-primary md:border-secondary md:border-4 rounded-3xl -translate-y-2`} >
                    {
                        [...Array(hasSubMenu.length)].map((e, i) => (
                            <li>
                                <Link href={link} className={`${menuItemsClasses} text-sm ${hasSubMenu[i].hasSubMenu ? "underline" : "no-underline"}`}>
                                    {hasSubMenu[i].title}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </li>
        );
    } else {
        return (
            <li>
                <Link href={link} className={menuItemsClasses}>{title}</Link>
            </li>
        );
    }
}