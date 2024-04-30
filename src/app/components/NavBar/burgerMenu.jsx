'use client';

/**Return animate burger icon for navigation bar.
 * 
 * @param {Object} paramOfBurger
 * @param {Function} paramOfBurger.handleChange manage checkbox's state to close or open menu.
 * @returns {import("react").ReactElement}
 */
export default function BurgerIcon({handleChange}) {
    const barsNumber = 3;
    return (
        <div className="md:hidden w-max float-right z-50">
            {/* import 'switch' burger icon https://uiverse.io/Creatlydev/pretty-gecko-71 */}
            <input className="check-icon  hidden" id="check-icon" name="check-icon" type="checkbox" onChange={handleChange}/>
            <label
                tabIndex={0}
                className="icon-menu  cursor-pointer relative flex flex-col bg-secondary px-3 w-12 rounded-full "
                htmlFor="check-icon"
            >
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