export default function NavMenu({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center py-4 space-x-5 text-2xl">
            { children }
        </div>
    )
}