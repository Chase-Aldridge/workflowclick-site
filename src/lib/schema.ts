const BASE_URL = 'https://workflowclick.com'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'WorkflowClick',
    url: BASE_URL,
    description: 'Done-for-you cold email infrastructure for insurance agencies and insurtech companies',
    email: 'moe@workflowclick.com',
    founder: {
      '@type': 'Person',
      name: 'Moe Randera',
    },
    sameAs: ['https://www.linkedin.com/company/workflowclick'],
  }
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'WorkflowClick Cold Email Services',
    provider: {
      '@type': 'Organization',
      name: 'WorkflowClick',
    },
    serviceType: 'Cold Email Infrastructure & Management',
    areaServed: 'US',
    description:
      'Done-for-you cold email infrastructure including domain warming, SPF/DKIM/DMARC authentication, psychology-driven copywriting, verified prospect lists, and qualified meetings delivered to your calendar.',
  }
}

export function getFAQSchema(
  items: Array<{ question: string; answer: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function getArticleSchema({
  title,
  description,
  date,
  author,
  url,
}: {
  title: string
  description: string
  date: string
  author: string
  url: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date,
    author: {
      '@type': 'Person',
      name: author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'WorkflowClick',
      url: BASE_URL,
    },
    url,
  }
}
