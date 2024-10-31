import Link from "next/link";

export default function ModalContent ({closeModal}) {

    return (
        <>
            <div onClick={closeModal} className="fixed inset-0 bg-slate-800/75"
            ></div>
            <div className="fixed z-10 top-1/3 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-slate-300 text-slate-900 px-4 py-6 rounded">
                <div className="flex justify-between items-center">
                    <h4 className="text-xl font-semibold">Booki</h4>
                    <button className="w-7 h-7 bg-slate-600 hover:bg-red-600 text-white flex justify-center items-center rounded-md" onClick={closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" height={18} width={18}>
                            <path fill="#FFFFFF" d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/>
                        </svg>
                    </button>
                </div>
                <div className="space-x-3 mt-2">
                    <span>HTML</span>
                    <span>CSS</span>
                </div>
                <p className="my-5">
                    Site fictif de recherche d’hébergement réalisé lors d’un module d’Openclassrooms. <br />
                    Pour ce projet, j’ai intégré une maquette Figma.
                </p>
                <div id="tags" className="space-x-3 pt-4">
                    <i className="not-italic bg-slate-400 px-3 py-2 rounded-3xl">Site vitrine</i>
                    <i className="not-italic bg-slate-400 px-3 py-2 rounded-3xl">Développement front-end</i>
                </div>
                <div className="flex justify-between items-center mt-3">
                    <p>Exercice de formation</p>
                    <Link
                        className="bg-white border-primary border-2 text-primary font-bold hover:bg-primary self-end hover:text-white px-4 py-2 rounded-3xl"
                        href={"https://github.com/Yvialga/siteBooki"}
                    >
                        Voir le repository
                    </Link>
                </div>
            </div>
        </>
    )
    
}