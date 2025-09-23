export default function NavMenu({ children }: { children: React.ReactNode }) {
    return (
        <div className="sticky top-0 bg-white dark:bg-black z-50 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center py-4 space-x-5 text-2xl">
                { children }
            </div>
        </div>
    )
}