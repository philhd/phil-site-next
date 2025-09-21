export interface Project {
  id: string
  title: string
  description: string
  url?: string
  github?: string
  featured?: boolean
}

export function getAllProjects(): Project[] {
  const projects: Project[] = [
    {
      id: 'phil-site-next',
      title: 'Personal Website (Next.js)',
      description: 'A modern personal website built with Next.js, TypeScript, and Tailwind CSS. Features a responsive design, dark mode support, and a dynamic blog system powered by markdown files.',
      github: 'https://github.com/username/phil-site-next',
      featured: true
    },
    {
      id: 'terminal-productivity',
      title: 'Terminal Productivity Tools',
      description: 'A collection of shell scripts and configurations to enhance developer productivity in the terminal. Includes custom aliases, functions, and workflow automations.',
      github: 'https://github.com/username/terminal-tools',
      featured: true
    },
    {
      id: 'code-snippets',
      title: 'Code Snippet Manager',
      description: 'A command-line tool for managing and organizing code snippets across different programming languages. Built with Python and features syntax highlighting and search capabilities.',
      github: 'https://github.com/username/snippet-manager'
    },
    {
      id: 'api-wrapper',
      title: 'REST API Wrapper Library',
      description: 'A lightweight TypeScript library that simplifies API interactions with built-in error handling, request/response interceptors, and automatic retry logic.',
      github: 'https://github.com/username/api-wrapper'
    }
  ]

  return projects.sort((a, b) => {
    // Featured projects first
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}

export function getProjectById(id: string): Project | null {
  const projects = getAllProjects()
  return projects.find(project => project.id === id) || null
}