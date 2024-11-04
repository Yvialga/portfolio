export default function Content () {
    return (
        <section className="text-white px-4 md:px-0 md:w-10/12 mx-auto">
            <h1 className="text-center uppercase font-bold text-3xl my-10">DGT Calculator</h1>
            <p className="text-lg">Logiciel web de calcul de la concentration des micropolluants dans les cours d’eaux pour la start-up Ecometrique.</p>
            <p className="text-sm my-3">SaaS - Développement front-end</p>
            <ul className="flex flex-wrap items-center gap-1 text-black">
                <li className="language">SCSS</li>
                <li className="language">JavaScript</li>
                <li className="language">HTML/Jinja</li>
                <li className="language">Bootstrap</li>
                <li className="language">htmx</li>
                <li className="language">Python</li>
            </ul>
            <h2 className="uppercase text-3xl mt-12 mb-6">Mes tâches</h2>
            <ul>
                <li className="list-item">Maquettage des différentes pages sur Figma</li>
                <li className="list-item">Intégration de la maquette avec Jinja	et rendu responsive avec Bootstrap et SCSS</li>
                <li className="list-item">Amélioration de l’ergonomie avec JavaScript (complétion des formulaires, gestion des boîtes de dialogues)</li>
                <li className="list-item">Test de sécurité (CSRF, XSS, ...)</li>
            </ul>
        </section>
    )
}