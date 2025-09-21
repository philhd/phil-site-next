import React from 'react'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function Blog() {
    const posts = getAllPosts()

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Blog Posts</h1>
            <div className="space-y-6">
                {posts.map((post) => (
                    <article key={post.slug} className="border-b border-gray-200 dark:border-gray-700 pb-6">
                        <div className="text-sm font-mono text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-wide">
                            {post.date}
                        </div>
                        <Link href={`/blog/${post.slug}`} className="block group">
                            <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                {post.title}
                            </h2>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    )
}
