import Link from "next/link";

export default function MenuItem({ name, href }: { name: string, href: string }) {
    return (
        <Link href={href}>{name}</Link>
    )
}