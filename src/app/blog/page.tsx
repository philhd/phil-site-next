import React from 'react'
import { getAllPosts } from '../../lib/posts'
import BlogClient from './blog-client'

export default function Blog() {
    const posts = getAllPosts()

    return <BlogClient posts={posts} />
}
