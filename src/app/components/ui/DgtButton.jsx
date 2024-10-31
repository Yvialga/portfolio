import { useRouter } from "next/navigation";

/**
 * Return button for linking to SaaS DGT's page.
 * @returns {import("react").ReactElement}
 */
export default function DgtButton() {
    const router = useRouter();

    return (
        <>
            <button onPointerDown={
                () => router.push(`/projects/saas-dgt`)
            } className="bg-white border-primary border-2 text-primary font-bold hover:bg-primary self-end hover:text-white px-4 py-2 mr-8 rounded-3xl"
            >
                Voir plus
            </button> 
        </>
    )
}