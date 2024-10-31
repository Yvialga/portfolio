import { useState } from "react";
import { createPortal } from "react-dom";
import ModalContent from "./BookiModalContent";

export default function BookiModalbutton() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className="bg-white border-primary border-2 text-primary font-bold hover:bg-primary self-end hover:text-white px-4 py-2 mr-8 rounded-3xl"
                onClick={() => setShowModal(true)}
                >Voir plus</button>
            {showModal && createPortal(
                <ModalContent closeModal={() => setShowModal(false)} />,
                document.body
            )}
        </>
    );
}