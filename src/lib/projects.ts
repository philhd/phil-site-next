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
  image?: string
  sortIndex?: number
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
        image: matterResult.data.image,
        sortIndex: matterResult.data.sortIndex,
      }
    })

  // Sort projects by sortIndex (lower numbers first)
  return allProjectsData.sort((a, b) => {
    const aSortIndex = a.sortIndex ?? 999
    const bSortIndex = b.sortIndex ?? 999
    return aSortIndex - bSortIndex
  })
}

export function getProjectById(id: string): Project | null {
  const projects = getAllProjects()
  return projects.find(project => project.id === id) || null
}