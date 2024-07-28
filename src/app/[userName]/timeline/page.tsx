import Twitter from '@/app/Components/Icon/Twitter'
import GitHubCalendarComponent from '@/app/Components/shared/GithubCalendar'
import TimeLine from '@/app/Components/shared/TimeLine'
import { fetchGithubData } from '@/app/lib/actions/github.action'
import { Dot, Github, House, Link2, Users } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

type Props = { params: { userName: string } }

const Page = async ({ params }: Props) => {
  const data = await fetchGithubData(params.userName)
  if (!data) redirect(`/${params.userName}/not-found`)

  const {
    avatarUrl,
    name,
    bio,
    twitterUsername,
    websiteUrl,
    followers,
    following,
    createdAt,
  } = data
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-start gap-14 bg-white px-4 py-20 font-mono bg-dot-blue-50/[0.2] sm:px-6 lg:px-8 dark:bg-[#070012]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-gradient-to-r from-black/50 via-transparent via-60% to-black/50"></div>
      <section className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <div className="flex flex-col items-center justify-center text-center md:text-left">
          <div className="mb-4 size-[202px] rounded-2xl border-2 border-emerald-800/50">
            <Image
              alt="Profile Picture"
              width={200}
              height={200}
              src={avatarUrl}
              className="rounded-[14.4px] bg-[#070802]"
            />
          </div>
          <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            {name}
          </h1>
          <p className="text-gray-600">{bio}</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 pb-20 md:flex-row">
          <div className="mt-4">
            {twitterUsername && (
              <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <Twitter className="size-5 fill-gray-400" />
                <a
                  href={`https://twitter.com/${twitterUsername}`}
                  className="text-blue-500"
                >
                  @{twitterUsername}
                </a>
              </p>
            )}
            {websiteUrl && (
              <p className="flex items-center gap-3 text-gray-800 dark:text-gray-200">
                <Link2 className="size-4 stroke-gray-500" />
                <a href={websiteUrl} className="break-all text-blue-500">
                  {websiteUrl}
                </a>
              </p>
            )}
            <div className="flex items-center gap-1 text-gray-800 dark:text-gray-200">
              <Users className="mr-2 size-4 stroke-yellow-50" />
              <p className="text-gray-600">
                <span className="text-white">{followers.totalCount}</span>{' '}
                followers
              </p>
              <Dot />
              <p className="text-gray-600">
                <span className="text-white">{following.totalCount}</span>{' '}
                following
              </p>
            </div>
            <p className="text-gray-600">
              Joined:{' '}
              <span className="text-white">
                {new Date(createdAt).toLocaleDateString()}
              </span>
            </p>
          </div>
          <div className="custom__scrollbar max-h-36 max-w-36 overflow-hidden">
            <GitHubCalendarComponent username={params.userName} />
          </div>
        </div>
      </section>
      <section className="flex w-full flex-col items-start justify-center sm:pl-20 lg:items-center lg:pl-0">
        <h1 className="max-w-3xl bg-gradient-to-t from-blue-800 to-gray-300 to-90% bg-clip-text text-center text-4xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-4xl md:leading-tight">
          Time line
        </h1>
        <TimeLine user={data} />
      </section>
      <Link href={'/'} className="absolute right-0 top-0 m-4 sm:m-10 md:m-20">
        <House className="text-white hover:animate-shake" color="#ffffff" />
      </Link>
      <Link
        href={'https://github.com/Rohit-Singh-Rawat/GitHub-Timeline'}
        className="absolute right-0 top-14 m-4 sm:m-10 md:m-20"
      >
        <Github className="text-white hover:animate-shake" color="#ffffff" />
      </Link>
    </div>
  )
}

export default Page
