import Link from "next/link";

export default function MenuItem({ name, href }: { name: string, href: string }) {
    const getIcon = (menuName: string) => {
        switch (menuName) {
            case 'Home':
                return 'fa-solid fa-house'
            case 'Blog':
                return 'fa-solid fa-memo'
            case 'About':
                return 'fa-solid fa-circle-info'
            default:
                return 'fa-solid fa-circle'
        }
    }

    return (
        <Link className="text-black dark:text-white text-2xl hover:font-black no-underline" href={href}>
            <span className="block sm:hidden">
                <i className={getIcon(name)}></i>
            </span>
            <span className="hidden sm:block">{name}</span>
        </Link>
    )
}