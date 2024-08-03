import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Mateo Ivan Radman. I live in Slavonski Brod, Croatia, where I develop software with passion.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            From Politics and Geography to Software Development: My Journey in
            Tech
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              After earning a Master's degree in Economic Geography from Utrecht
              University, I found my true passion lay in technology and software
              development. This realization led me to dive into computer
              science, where I could merge my analytical skills with creative
              problem-solving. My first major breakthrough came at T3K.AI, where
              I played a pivotal role in developing the Law Enforcement
              Analytics Platform (LEAP). This AI-powered tool revolutionizes
              forensic workflows, helping law enforcement agencies analyze vast
              amounts of media to detect criminal activities.
            </p>
            <p>
              In my role, I’ve built robust, scalable APIs using FastAPI and
              Django, integrating with various data sources and machine learning
              models. One of my proudest projects is Swift File, an open-source
              file transfer system that uses QR codes for seamless sharing
              between devices. Another highlight is Bazarr Bulk, a tool that
              simplifies subtitle management for the self-hosting community.
            </p>
            <p>
              My journey is not just about professional achievements but also
              about my commitment to the open-source community. Contributing to
              projects like Django has been incredibly rewarding, allowing me to
              give back and collaborate with developers worldwide. As I continue
              to innovate and solve real-world problems, my goal remains to
              leverage technology to make a positive impact and inspire others
              to do the same.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/mateoradman"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/mateoradman"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:mateoradman@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              mateoradman@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
