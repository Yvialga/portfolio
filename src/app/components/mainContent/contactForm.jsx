export default function ContactForm() {
    return <section className="flex flex-col items-center w-full px-[8%] v-sm:px-[15%] mb-8">
        <header className="flex flex-col items-center my-10 gap-y-4">
            <h1 className="uppercase text-white font-bold bg-primary py-2 px-4 min-w-max rounded-3xl">Formulaire de contact</h1>
            <p className="text-white font-medium px-[16%]">Afin de me contacter, veuillez saisir les champs ci-dessous.</p>
        </header>
        <FormToFill />
    </section>
}

function FormToFill() {

    const FORM_FIELDS = [
        {
            text: "Nom",
            isRequired: true,
            inputLength: "w-40"
        },
        {
            text: "Prénom",
            isRequired: false,
            inputLength: "w-40"
        },
        {
            text: "Adresse e-mail",
            isRequired: true,
            inputLength: "w-56 v-sm:w-64"
        }
    ]

    return <form method="POST" action="" className="flex flex-col items-center shadow-3xl w-full v-sm:w-[400px] sm:w-[500px] rounded-3xl bg-white gap-y-4 py-4 px-[8%] v-sm:px-8">
        <label className="font-semibold text-red-900/90">Formulaire non fonctionnel pour le moment.</label>
        {[...Array(FORM_FIELDS.length)].map((e, i) =>
            <div key={i} className="flex flex-col w-full">
                <label htmlFor={FORM_FIELDS[i].text}>
                    {FORM_FIELDS[i].text} {FORM_FIELDS[i].isRequired ? "*" : ""}
                </label>
                <input id={FORM_FIELDS[i].text.replaceAll(/\s+/g, "")} type="text" className={`border-2 border-black/70 rounded ${FORM_FIELDS[i].inputLength} `}/>
            </div>
        )}
        <label htmlFor="message" className="flex flex-col w-full">Sujet *
            <textarea name="message" id="message" cols="30" rows="2" className="border-2 border-black/70 rounded"></textarea>
        </label>
        <label htmlFor="message" className="flex flex-col w-full">Message *
            <textarea name="message" id="message" cols="30" rows="5" className="border-2 border-black/70 rounded"></textarea>
        </label>
        <label htmlFor="submitButton">
            <input className="text-white bg-primary px-2 py-1 font-semibold rounded-md" type="submit" id="submitButton" value={"Envoyer"} />
        </label>
    </form>
}