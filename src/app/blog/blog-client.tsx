'use client'

import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { type Post } from '../../lib/posts'

interface BlogClientProps {
    posts: Post[]
}

export default function BlogClient({ posts }: BlogClientProps) {
    const [selectedPost, setSelectedPost] = useState<Post>(posts[0] || null)

    return (
        <div className="flex min-h-screen">
            {/* Left Pane - Post Index */}
            <div className="w-1/3 bg-gray-50 dark:bg-gray-900 p-6 border-r border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">Blog Posts</h2>
                <ul className="space-y-2">
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <button
                                onClick={() => setSelectedPost(post)}
                                className={`w-full text-left p-3 rounded-md transition-colors ${
                                    selectedPost?.slug === post.slug
                                        ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                                        : 'hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
                                }`}
                            >
                                <div className="font-medium">{post.title}</div>
                                <div className="text-sm text-gray-500 dark:text-gray-400">{post.date}</div>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Pane - Post Content */}
            <div className="flex-1 p-6">
                {selectedPost ? (
                    <div className="prose dark:prose-invert max-w-none">
                        <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
                    </div>
                ) : (
                    <div className="text-gray-500 dark:text-gray-400">Select a post to read</div>
                )}
            </div>
        </div>
    )
}