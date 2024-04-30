'use client';
import Link from "next/link";
import "../../../assets/styles/navbar.css";
import { useState } from "react";
import { openSans } from "../../../assets/fonts/fonts";

// SI aucune solution trouvé, peut-être chercher un tuto comment faire un menu av+ sous menu en react

/**
 * @type {Array.<{title: string, link: string, hasSubMenu: boolean}>} */
const NAVBAR_ITEMS = [
    {
        key: 2,
        title: "à propos",
        link: "",  // TODO
        hasSubMenu: false,
    }, {
        key: 3,
        title: "compétences",
        link: "#",  // TODO
        hasSubMenu: false,
    }, {
        key: 4,
        title: "projets",           //exemple de sM https://tailwindui.com/components/application-ui/elements/dropdowns
        link: "",           // Link property is let empty if is a sub-menu.
        hasSubMenu: [
            {
                key: 40,
                title: "développement web",
                link: "",
                hasSubMenu: false,
            }, {
                key: 41,
                title: "game design",
                link: "",
                hasSubMenu: false,
            }
        ],
    }, {
        key: 5,
        title: "contact",
        link: "",    // TODO / redirect towards contact page
        hasSubMenu: false,
    }
];

const MENU_ITEMS_CLASSES = `text-white/90 hover:bg-secondary/95 active:bg-secondary/95 hover:text-black/90 active:text-black/90
                            font-bold uppercase block underline decoration-secondary underline-offset-8 hover:no-underline md:no-underline decoration-4
                            delay-50 duration-200 py-6 pr-6 v-sm:pr-12 rounded-3xl md:px-2 md:mx-2 md:py-4 md:my-2 md:text-left cursor-pointer`;

/** TODO
 * 
 * @param {boolean}
 * @param {boolean} checkboxIsChecked
 * @returns {import("react").ReactElement}
 */
export default function Menu({checkboxIsChecked}) {
    const [isOpen, setOpen] = useState(false);

    function handleDisplayOfSubMenu() {
        setOpen(!isOpen);
    }

    return (
        <ul className={`${checkboxIsChecked ? "right-0" : "-right-full"}  absolute bg-primary top-0 w-3/6 pt-28 h-screen text-end duration-300
                            md:flex md:items-center md:w-auto md:static md:h-auto md:pt-0`}>
            {
                [...Array(NAVBAR_ITEMS.length)].map((e, i) => (
                    <MenuItems
                        menuItem={NAVBAR_ITEMS[i]} onHover={handleDisplayOfSubMenu} menuState={isOpen}
                    />
                ))
            }
        </ul>
    )
}

/**Return the JSX menu item with his title and his correct redirection.
 * 
 * @param {Object} menuItemsLink Specifications of the link.
 * @param {string} menuItemsLink.title Title of the menu item.
 * @param {string} menuItemsLink.link Link towards anchor or page. Let empty if item is a sub-menu.
 * @param {(boolean|string)} menuItemsLink.hasSubMenu True if the item should display as sub-menu, false otherwise.
 * @returns {import("react").ReactElement}
 */
function MenuItems({menuItem, onHover, menuState}) {

    if (menuItem.hasSubMenu) {
        return (
            <SubMenuItem menuItem={menuItem} handleHoveringOfMenuItems={onHover} menuState={menuState}/>
        );
    } else {
        return (
            <li key={menuItem.key}>
                <Link href={menuItem.link} id={menuItem.title} className={MENU_ITEMS_CLASSES}>{menuItem.title}</Link>
            </li>
        );
    }
}

// TODO
function SubMenuItem({menuItem, handleHoveringOfMenuItems, menuState}) {
    return <>
        <li
            onPointerDown={ () => { handleHoveringOfMenuItems(); } }
            // onPointerLeave={ () => { handleHoveringOfMenuItems(); } }
        >
            <h3 className={`${MENU_ITEMS_CLASSES} group`} tabIndex={0}>
                {menuItem.title}
                <svg className={`${menuState ? "-rotate-90" : "rotate-0"} transition h-5 w-5 ml-1 ${menuState ? "animate-none" : "group-hover:animate-bounce"} md:inline-block hidden text-white`} viewBox="0 0 20 20"  fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </h3>
            <svg className={`${menuState ? "-rotate-90" : "rotate-0"} transition h-5 w-5 ml-1 block md:hidden -translate-y-12 float-right mr-1 v-sm:mr-4 text-white`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            <ul className={`${menuState ? "block" : "hidden"} md:absolute md:bg-primary md:border-secondary md:border-4 rounded-3xl -translate-y-2`} >
                {
                    [...Array(menuItem.hasSubMenu.length)].map((e, i) => (
                        <li>
                            <Link href={menuItem.link} className={`${MENU_ITEMS_CLASSES} text-sm underline leading-[250%] v-sm:pr-16`}>
                                {menuItem.hasSubMenu[i].title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    </>;
}