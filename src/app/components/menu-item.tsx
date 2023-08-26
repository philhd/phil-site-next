import Link from "next/link";

export default function MenuItem({ name, href }: { name: string, href: string }) {
    return (
        <Link className="text-black text-2xl hover:font-black no-underline" href={href}>{name}</Link>
    )
}