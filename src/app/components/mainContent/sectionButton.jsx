import { SearchTheRightIcon } from "../../libs/picturesPaths";

/** TODO
 * 
 * @param {Object} sectionButtonParameter 
 * @param {String} sectionButtonParameter.sectionName
 * @param {Event} sectionButtonParameter.handleClick
 * @param {Boolean} sectionButtonParameter.handleClickState
 * @returns 
 */
export function SectionButton({sectionName, handleClick, handleClickState}) {

    return <div className="flex items-center gap-x-4 ml-4">
        <button onPointerDown={handleClick} className={`bg-primary w-max flex py-[0.35rem] rounded-3xl hover:shadow-3xl
                pl-[0.40rem] ${handleClickState ? "pr-[0.40rem]" : "pr-4" } items-center gap-x-3 cursor-pointer`}>
            <div className="bg-white px-3 py-1 rounded-2xl">
                <SearchTheRightIcon sectionName={`${sectionName}`} className=""/>
            </div>
            <p className={`uppercase font-semibold text-white tracking-wider ${handleClickState ? "hidden" : "block"}`}>{sectionName}</p>
        </button>
        <p className="italic text-white cursor-help">Cliquez pour {handleClickState ? "montrer" : "cacher"} </p>
    </div>;
}