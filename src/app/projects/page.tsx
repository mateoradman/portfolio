import { type Metadata } from 'next'
import Image, { ImageProps } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'

interface Project {
  name: string
  description: string
  logo?: ImageProps['src']
  link: { href: string; label: string }
}

const projects: Project[] = [
  {
    name: 'LEAP',
    description:
      'Law Enforcement Analytics Platform - AI platform that streamline forensic workflows for law enforcement.',
    link: { href: 'https://www.t3k.ai/leap', label: 't3k.ai' },
  },
  {
    name: 'E-Style Barbershop',
    description:
      'Website and appointment booking workflow for a local barbershop.',
    link: { href: 'https://e-style.hair', label: 'e-style.hair' },
  },
  {
    name: 'Real Solution Istria',
    description:
      'Real estate listing website that allows listing properties for sale or rent in Croatia.',
    link: { href: 'https://realestateistria.co', label: 'realestateistria.co' },
  },
  {
    name: 'Jugsie Bottles',
    description: 'A webshop selling insulated personalized bottles - archived.',
    link: {
      href: 'https://jugsiebottles.vercel.app',
      label: 'jugsiebottles.vercel.app',
    },
  },
  {
    name: 'Swift File',
    description:
      'Utility written in Rust for transferring files over Wi-Fi using a QR code.',
    link: {
      href: 'https://github.com/mateoradman/swift_file',
      label: 'github.com',
    },
  },
  {
    name: 'Bazarr Bulk',
    description:
      "A niche project where people in the self-hosting community have the ability to perform various actions on subtitles through Bazarr's API.",
    link: {
      href: 'https://github.com/mateoradman/bazarr-bulk',
      label: 'github.com',
    },
  },
  {
    name: 'Django',
    description:
      'Code contributions to one of the most popular web frameworks in Python.',
    link: {
      href: 'https://github.com/django/django/commits/main/?author=mateoradman',
      label: 'github.com',
    },
  },
  {
    name: 'FastAPI',
    description:
      'Discussion contributions to one of the most popular web frameworks in Python.',
    link: {
      href: 'https://github.com/fastapi/fastapi/discussions?discussions_q=mateoradman',
      label: 'github.com',
    },
  },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'Portfolio',
  description: "Projects I'm Passionate About.",
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Projects I'm Passionate About."
      intro="Over the years, I've poured my heart into countless projects, but these stand out as my favorites. Many are open-source, inviting you to explore, tweak, and enhance. If something sparks your curiosity, join me in pushing the boundaries and making these tools even better."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card as="li" key={project.name}>
            {project.logo && (
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.logo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
            )}
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={project.link.href} target="_blank">
                {project.name}
              </Card.Link>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
              <LinkIcon className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
