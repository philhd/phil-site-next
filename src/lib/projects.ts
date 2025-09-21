import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/projects')

export interface Project {
  id: string
  title: string
  description: string
  url?: string
  github?: string
  featured?: boolean
}

export function getAllProjects(): Project[] {
  // Get file names under /projects
  const fileNames = fs.readdirSync(projectsDirectory)

  const allProjectsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the project metadata section
      const matterResult = matter(fileContents)

      // Combine the data with the id
      return {
        id,
        title: matterResult.data.title,
        description: matterResult.content.trim(),
        url: matterResult.data.url,
        github: matterResult.data.github,
        featured: matterResult.data.featured || false,
      }
    })

  // Sort projects: featured first
  return allProjectsData.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })
}

export function getProjectById(id: string): Project | null {
  const projects = getAllProjects()
  return projects.find(project => project.id === id) || null
}