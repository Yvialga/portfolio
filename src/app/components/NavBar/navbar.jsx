'use client';
import "../../../assets/styles/navbar.css";
import { useState } from "react";
import Logo from "./logo";
import BurgerIcon from "./burgerMenu";
import Menu from "./menu";

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
        <nav className="sticky top-0 bg-primary flex flex-wrap items-center overflow-x-clip justify-between w-full py-4 md:py-0
        text-lg px-2 md:px-6 shadow-2xl z-50">
            <Logo />
            <BurgerIcon handleChange={onCheckboxChange} />
            <Menu checkboxIsChecked={isChecked} />
        </nav>
    );
}