'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { type Post } from '../../lib/posts'

interface BlogClientProps {
    posts: Post[]
    selectedSlug?: string
}

export default function BlogClient({ posts, selectedSlug }: BlogClientProps) {
    const initialPost = selectedSlug
        ? posts.find(post => post.slug === selectedSlug) || posts[0] || null
        : posts[0] || null
    const [selectedPost] = useState<Post>(initialPost)

    return (
        <div className="flex min-h-screen">
            {/* Left Pane - Post Index */}
            <div className="hidden md:block md:w-1/3 p-6 border-r border-gray-300 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Posts</h2>
                <ul className="space-y-3 list-none">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <Link
                                href={`/blog/${post.slug}`}
                                className='block w-full text-left p-3 rounded-md transition-colors no-underline text-black dark:text-white'
                            >
                                <div className="text-sm font-monobold font-medium text-accent dark:text-accent-dark mb-1 uppercase tracking-wide">
                                    {post.date}
                                </div>
                                <div className={`text-sm leading-tight  ${
                                    selectedPost?.slug === post.slug
                                        ? 'font-bold'
                                        : 'font-medium'
                                }`}>{post.title}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Pane - Post Content */}
            <div className="flex-1 p-8 max-w-4xl">
                {selectedPost ? (
                    <div>
                        <div className="mb-6 border-b border-gray-300 dark:border-gray-700 pb-4">
                            <div className="text-sm font-monobold font-medium text-accent dark:text-accent-dark mb-2 uppercase tracking-wide">
                                {selectedPost.date}
                            </div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                                {selectedPost.title}
                            </h1>
                        </div>
                        <div className="prose dark:prose-invert max-w-none">
                            <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                        </div>
                    </div>
                ) : (
                    <div className="text-gray-500 dark:text-gray-400">Select a post to read</div>
                )}
            </div>
        </div>
    )
}