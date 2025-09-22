import Link from "next/link";

export default function MenuItem({ name, href }: { name: string, href: string }) {
    const isHome = name === 'Home'

    if (isHome) {
        return (
            <Link className="text-black dark:text-white text-2xl hover:font-black no-underline" href={href}>
                <span className="block sm:hidden">
                    <i className="fa-solid fa-house"></i>
                </span>
                <span className="hidden sm:block">{name}</span>
            </Link>
        )
    }

    return (
        <Link className="text-black dark:text-white text-2xl hover:font-black no-underline" href={href}>
            {name}
        </Link>
    )
}