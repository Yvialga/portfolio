'use client';
import Link from "next/link";
import "./ui/navbar.css";
import { useState } from "react";

/**
 * @type {Array.<{title: string, link: string, submenu: boolean}>}
 */
const navbarItems = [
    {
        title: "À propos",
        link: "#",  // TODO
        submenu: false
    }, {
        title: "Compétences",
        link: "#",  // TODO
        submenu: false
    }, {
        title: "Projets",           //exemple de sM https://tailwindui.com/components/application-ui/elements/dropdowns
        link: "",           // Link property is let empty if is a sub-menu.
        submenu: [
            {
                title: "Web Development",
                link: "",
                submenu: true
            }, {
                title: "Game Design",
                link: "",
                submenu: true
            }
        ]
    }, {
        title: "Contact",
        link: "",    // TODO / redirect towards contact page
        submenu: false
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
        } else {    // Open menu
            setChecked(true);
        }
    }

    return (
        <nav className="sticky bg-primary flex flex-wrap items-center justify-end w-full py-4 md:py-0
        text-lg px-4">
            <BurgerIcon handleChange={onCheckboxChange} />
            <ul className={`${isChecked ? "right-0" : "-right-full"} absolute bg-primary top-0 w-3/6 pt-28 h-screen text-end duration-300
                            md:flex md:items-center md:w-auto md:static md:h-auto md:pt-0`}>
                {
                    [...Array(navbarItems.length)].map((e, i) => (
                        <MenuItems title={navbarItems[i].title} link={navbarItems[i].link} subMenu={navbarItems[i].submenu}/>
                    ))
                }
            </ul>
        </nav>
);
}

/**Return animate burger icon for navigation bar.
 * 
 * @param {Object} paramOfBurger
 * @param {Function} paramOfBurger.handleChange manage checkbox's state to close or open menu.
 * @returns {import("react").ReactElement}
 */
function BurgerIcon({handleChange}) {
    const barsCount = 3;
    return (
        <div className="md:hidden w-max float-right z-50">
            {/* import 'switch' burger icon https://uiverse.io/Creatlydev/pretty-gecko-71 */}
            <input className="check-icon  hidden" id="check-icon" name="check-icon" type="checkbox" onChange={handleChange}/>
            <label className="icon-menu  cursor-pointer relative flex flex-col bg-secondary px-3 w-12 rounded-full " htmlFor="check-icon">
                {
                    [...Array(barsCount)].map((e, i) => (
                        <BurgerBars index={i+1}/>
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
        <div className={`bar bar--${index}`}></div>
    );
}

/**Return the menu JSX item with his title and his correct redirection.
 * 
 * @param {Object} menuItemsLink Specifications of the link.
 * @param {string} menuItemsLink.title title of the menu item.
 * @param {string} menuItemsLink.link Link towards anchor or page. Let empty if item is a sub-menu.
 * @param {boolean} menuItemsLink.subMenu true if the item should display as sub-menu, false otherwise.
 * @returns {import("react").ReactElement}
 */
function MenuItems({title, link, subMenu}) {

    const classOfMainItems = `text-white/90 hover:bg-secondary/95 active:bg-secondary/95 hover:text-black/90 active:text-black/90
                            font-bold uppercase block
                            delay-50 py-6 pr-10 rounded-3xl duration-200 md:px-2 md:mx-2 md:py-4 md:my-2`;
    return (
        <li>
            <Link href={link} className={classOfMainItems}>{title}</Link>
        </li>
    );
}