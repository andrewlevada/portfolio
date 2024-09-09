import Link from "next/link";

export default function ContactButton() {
    return (
        <Link href="https://t.me/andrewlevada" target="_blank"
                className="self-center m:self-start">
                <h1 className="hover:text-[#2F3FD2] m:text-[#474747]/60">написать мне ↗</h1>
        </Link>
    )
}