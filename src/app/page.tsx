import React from 'react'
import Link from 'next/link'
import { getAllProjects } from '../lib/projects'

export default function Home() {
  const projects = getAllProjects()

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-gray-100">Projects</h1>
      <div className="space-y-8">
        {projects.map((project) => (
          <article key={project.id} className="border-b border-gray-300 dark:border-gray-700 pb-8">
            <div className="flex items-center gap-2 mb-3">
              <h2 className="text-xl font-semibold text-black dark:text-white">
                {project.title}
              </h2>
              {project.featured && (
                <span className="text-xs font-monobold font-bold text-accent dark:text-accent uppercase tracking-wide px-2 py-1 rounded bg-accent/10">
                  Featured
                </span>
              )}
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              {project.description}
            </p>
            <div className="flex gap-4">
              {project.github && (
                <Link
                  href={project.github}
                  className="text-accent hover:font-semibold transition-all no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub →
                </Link>
              )}
              {project.url && (
                <Link
                  href={project.url}
                  className="text-accent hover:font-semibold transition-all no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
