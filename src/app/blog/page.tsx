import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function Blog() {
    const posts = getAllPosts()

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Posts</h1>
            <div className="space-y-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b border-gray-300 dark:border-gray-700 pb-6">
                        <Link href={`/blog/${post.slug}`} className="block group no-underline text-black dark:text-white">
                            <h2 className="text-xl font-normal hover:[text-shadow:0_0_0.5px_currentColor] transition-all mb-2">
                                {post.title}
                            </h2>
                        </Link>
                        <div className="text-sm font-monobold font-medium text-accent dark:text-accent-dark uppercase tracking-wide">
                            {post.date}
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
}
