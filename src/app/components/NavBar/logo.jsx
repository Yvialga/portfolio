'use client';
import Link from "next/link";

/**
 * @returns {import("react").ReactElement} The Logo.
 */
export default function Logo() {
    return (
        <div className="text-white/90 hover:scale-110 transition-all
                        font-bold text-center text-xl rounded-2xl py-1 px-2">
            <h2>
                <Link href={"/"}>
                    Tommy <br />
                    <em className="not-italic uppercase">Bernard</em>
                </Link>
            </h2>
        </div>
    );
}