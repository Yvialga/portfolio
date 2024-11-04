export default function Content() {
    return (
        <section className="text-white px-4 md:px-0 md:w-10/12 mx-auto">
            <h1 className="text-center uppercase font-bold text-3xl my-10">Canoe For Sale</h1>
            <p className="text-lg">Plateforme fictive de mise en vente et d’achat de canoë ou kayak réalisé pour le titre DWWM.</p>
            <p className="text-sm my-3">App web - Développement back-end</p>
            <ul className="flex flex-wrap items-center gap-1 text-black">
                <li className="language">Symfony</li>
                <li className="language">PHP</li>
                <li className="language">HTML/Twig</li>
                <li className="language">JavaScript</li>
            </ul>
            <h2 className="uppercase text-3xl mt-12 mb-6">Mes tâches</h2>
            <ul>
                <li className="list-item">Conception de la base de données</li>
                <li className="list-item">Appel API d’un module de paiement</li>
                <li className="list-item">Filtres de tri des annonces avec JavaScript</li>
                <li className="list-item">Système d’authentification</li>
                <li className="list-item">CRUD des annonces pour que les utilisateurs puissent les gérer</li>
                <li className="list-item">CRUD admin pour gérer les utilisateurs</li>
            </ul>
        </section>
    );
}