import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const contentDir = path.join(process.cwd(), 'content')
const blogDir = path.join(contentDir, 'blog')
const caseStudiesDir = path.join(contentDir, 'case-studies')

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface BlogFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  image?: string
}

export interface BlogPost {
  slug: string
  frontmatter: BlogFrontmatter
  content: string
  readingTime: number
}

export interface CaseStudyMetrics {
  meetings_booked?: string | number
  response_rate?: string
  meeting_rate?: string
  pipeline?: string
  [key: string]: string | number | undefined
}

export interface CaseStudyFrontmatter {
  title: string
  description: string
  client: string
  industry: string
  metrics: CaseStudyMetrics
  date: string
  image?: string
}

export interface CaseStudy {
  slug: string
  frontmatter: CaseStudyFrontmatter
  content: string
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function estimateReadingTime(text: string): number {
  const wordsPerMinute = 200
  const wordCount = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute))
}

function getSlugsFromDir(dir: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => file.replace(/\.(mdx|md)$/, ''))
}

function readMdxFile(dir: string, slug: string): { content: string; data: Record<string, unknown> } | null {
  const mdxPath = path.join(dir, `${slug}.mdx`)
  const mdPath = path.join(dir, `${slug}.md`)
  const filePath = fs.existsSync(mdxPath) ? mdxPath : fs.existsSync(mdPath) ? mdPath : null
  if (!filePath) return null
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(raw)
  return { content, data }
}

// ---------------------------------------------------------------------------
// Blog
// ---------------------------------------------------------------------------

export function getAllPosts(): BlogPost[] {
  const slugs = getSlugsFromDir(blogDir)
  const posts = slugs
    .map((slug) => {
      const file = readMdxFile(blogDir, slug)
      if (!file) return null
      const fm = file.data as unknown as BlogFrontmatter
      return {
        slug,
        frontmatter: fm,
        content: file.content,
        readingTime: estimateReadingTime(file.content),
      } satisfies BlogPost
    })
    .filter((p): p is BlogPost => p !== null)

  return posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export function getPostBySlug(slug: string): BlogPost | null {
  const file = readMdxFile(blogDir, slug)
  if (!file) return null
  const fm = file.data as unknown as BlogFrontmatter
  return {
    slug,
    frontmatter: fm,
    content: file.content,
    readingTime: estimateReadingTime(file.content),
  }
}

// ---------------------------------------------------------------------------
// Case Studies
// ---------------------------------------------------------------------------

export function getAllCaseStudies(): CaseStudy[] {
  const slugs = getSlugsFromDir(caseStudiesDir)
  const studies = slugs
    .map((slug) => {
      const file = readMdxFile(caseStudiesDir, slug)
      if (!file) return null
      const fm = file.data as unknown as CaseStudyFrontmatter
      return {
        slug,
        frontmatter: fm,
        content: file.content,
      } satisfies CaseStudy
    })
    .filter((s): s is CaseStudy => s !== null)

  return studies.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  )
}

export function getCaseStudyBySlug(slug: string): CaseStudy | null {
  const file = readMdxFile(caseStudiesDir, slug)
  if (!file) return null
  const fm = file.data as unknown as CaseStudyFrontmatter
  return {
    slug,
    frontmatter: fm,
    content: file.content,
  }
}
