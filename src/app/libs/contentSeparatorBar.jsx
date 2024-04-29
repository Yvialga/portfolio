export default function ContentSeparatorBar({iteration, arraySize, handleDisplayBar}) {
    return <>
        {
            ((++iteration) < arraySize) ? <hr className={`rotate-90 transform translate-y-2 border-none bg-secondary h-1 w-10 my-8 text-center ${handleDisplayBar ? "hidden" : "block"}`} />
                : <hr className="hidden" />
        }
    </>
}