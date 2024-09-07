import Link from "next/link";

export default function ContactButton() {
    return (
        <Link href="https://t.me/andrewlevada" target="_blank"
                className="self-center hover:text-[#2F3FD2] m:text-[#474747]/60 m:self-start">
                <h1>написать мне ↗</h1>
        </Link>
    )
}