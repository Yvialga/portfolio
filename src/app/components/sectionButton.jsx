import { useState } from "react";
import { SearchTheRightIcon } from "../libs/picturesPaths";

const SKILLS = "compétences";

/**
 * 
 * @param {Object} param0 
 * @param {Event} param0.handleClick
 * @returns 
 */
export function SectionButton({handleClick, handleClickState}) {

    return <div className="flex items-center gap-x-4 ml-4">
        <button onPointerDown={handleClick} className={`bg-primary w-max flex py-1 rounded-3xl
                pl-1 ${handleClickState ? "pr-1" : "pr-4" } items-center gap-x-3 cursor-pointer`}>
            <div className="bg-white px-3 py-1 rounded-2xl">
                <SearchTheRightIcon sectionName={`${SKILLS}`} className=""/>
            </div>
            <p className={`uppercase font-semibold text-white tracking-wider ${handleClickState ? "hidden" : "block"}`}>SKILLS</p>
        </button>
        <p className="italic text-gray-500">Cliquez pour {handleClickState ? "montrer" : "cacher"} </p>
    </div>;
}