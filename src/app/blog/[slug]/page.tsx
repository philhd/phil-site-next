import React from 'react'
import { getAllPosts, getPostBySlug } from '../../../lib/posts'
import BlogClient from '../blog-client'
import { notFound } from 'next/navigation'

interface PageProps {
    params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params
    const posts = getAllPosts()
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    return <BlogClient posts={posts} selectedSlug={slug} />
}

export async function generateStaticParams() {
    const posts = getAllPosts()

    return posts.map((post) => ({
        slug: post.slug,
    }))
}