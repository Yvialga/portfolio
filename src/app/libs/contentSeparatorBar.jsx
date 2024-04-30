
/**
 * 
 * @param {Object} specifications 
 * @param {Number} specifications.iteration An Integer which represents the current iteration
 * @param {Number} specifications.arraySize Size of array. Usually pass with length property
 * @returns 
 */
export default function ContentSeparatorBar({iteration, arraySize}) {
    return <>
        {
            ((++iteration) < arraySize) ? <hr className={`rotate-90 transform translate-y-2 border-none bg-secondary h-1 w-10 my-8 text-center`} />
                : <hr className="hidden" />
        }
    </>
}