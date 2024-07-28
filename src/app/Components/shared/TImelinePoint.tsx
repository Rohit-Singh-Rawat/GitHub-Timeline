'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import { Repository } from '@/app/lib/actions/github.action'
import cn from '@/app/lib/util'
import { GitFork, Star } from 'lucide-react'
import 'devicon/devicon.min.css'

type TImelinePointProps = { repo: Repository; index: number }

const TImelinePoint = ({ repo, index }: TImelinePointProps) => {
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getLanguageIcon = (language: string) => {
    const deviconClass = `devicon-${language.toLowerCase()}-plain`
    return (
      <i
        className={`${deviconClass} colored px-2 text-3xl`}
        title={language}
      ></i>
    )
  }

  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.15 })

  const isSmallScreen = windowWidth < 1000

  const containerVariants = {
    hidden: { scale: 0, transformOrigin: '0 0' },
    visible: {
      scale: 1,
      transformOrigin: '0 0',
      transition: { duration: 0.6 },
    },
  }

  const contentVariants = {
    hidden: {
      opacity: 0,
      x: isSmallScreen ? '0%' : index % 2 === 0 ? '-100%' : '100%',
    },
    visible: {
      opacity: 1,
      x: isSmallScreen ? '0%' : index % 2 === 0 ? '-48.5%' : '48.5%',
      transition: { duration: 0.6, delay: 0.62 },
    },
  }

  const infoVariants = {
    hidden: {
      scale: 0,
      transformOrigin: isSmallScreen
        ? '50% 50%'
        : index % 2 === 0
          ? '100% 50%'
          : '0% 50%',
    },
    visible: {
      scale: 1,
      transition: { duration: 0.6, delay: 1.2 },
    },
  }

  return (
    <div
      className="mt-10 flex flex-col items-start justify-center gap-5 lg:items-center"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="h-80 w-1 rounded-b-full bg-gradient-to-t from-[#1CC6FC] via-[#5C38B6] to-[#0b0b10]/30"
      ></motion.div>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={contentVariants}
        className={cn(
          'flex items-center gap-5',
          index % 2 == 0
            ? 'flex-row lg:-translate-x-[48.5%] lg:flex-row-reverse'
            : 'flex-row lg:translate-x-[48.5%] lg:flex-row'
        )}
      >
        <div className="flex size-4 items-center justify-center rounded-full border border-white shadow-sm">
          <div className="size-2 rounded-full border border-blue-400 bg-blue-400" />
        </div>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={infoVariants}
          className={cn(
            'flex w-[300px] items-center gap-5 rounded-2xl bg-[#161921]/60 px-4 py-2 lg:w-[450px]',
            index % 2 == 0
              ? 'lg:flex-row-reverse lg:text-right'
              : 'text-left lg:flex-row'
          )}
        >
          <div className="h-10 w-3 rounded-xl bg-red-700"></div>
          <div className="flex flex-col gap-2">
            <div
              className={cn(
                'flex items-center gap-2 py-1',
                index % 2 == 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              )}
            >
              <div className="font-medium">
                <a href={repo.url} target="_blank" rel="noopener noreferrer">
                  {repo.name}
                </a>
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-red-100/50 bg-[#32392d] p-1 px-2 text-xs text-yellow-100">
                <Star className="size-3 stroke-yellow-100" />
                {repo.stargazerCount}
              </div>
              <div className="flex items-center justify-center gap-2 rounded-lg border border-blue-600/60 bg-[#1d1f25] p-1 px-2 text-xs text-blue-600">
                <GitFork className="size-3 stroke-blue-600" />
                {repo.forkCount}
              </div>
              {repo.primaryLanguage &&
                getLanguageIcon(repo.primaryLanguage.name)}
            </div>
            <div className="text-sm text-gray-700">
              created at:{' '}
              <span className="text-white/70">
                {new Date(repo.createdAt).toLocaleDateString('en-US', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                })}
              </span>
            </div>
            <div className="line-clamp-1 text-ellipsis text-sm text-gray-700">
              {repo.description || 'No description provided '}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default TImelinePoint
