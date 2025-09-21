import React from 'react'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import BlogClient from '../blog-client'
import { notFound } from 'next/navigation'

interface PageProps {
    params: { slug: string }
}

export default function BlogPost({ params }: PageProps) {
    const posts = getAllPosts()
    const post = getPostBySlug(params.slug)

    if (!post) {
        notFound()
    }

    return <BlogClient posts={posts} selectedSlug={params.slug} />
}

export async function generateStaticParams() {
    const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}