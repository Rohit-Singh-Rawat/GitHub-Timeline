'use client'
import React from 'react'
import { User } from '@/app/lib/actions/github.action'
import TImelinePoint from './TImelinePoint'

type Props = { user: User }

const TimeLine = ({ user }: Props) => {
  return (
    <div className="flex w-full flex-col items-start justify-center overflow-hidden py-10 lg:items-center">
      <div className="flex translate-x-0 items-center gap-5 lg:translate-x-[46%]">
        <div className="flex size-4 items-center justify-center rounded-full border border-white shadow-sm">
          <div className="size-2 rounded-full border border-blue-400 bg-blue-400" />
        </div>
        <div className="flex items-center gap-5 rounded-2xl bg-[#161921]/60 py-2 pl-4 pr-6 md:pr-20">
          <div className="h-10 w-3 rounded-xl bg-red-700"></div>
          <div>
            <div className="font-medium">Joined Github</div>
            <div className="text-sm text-gray-700">
              {new Date(user.createdAt).toLocaleDateString()}
            </div>
          </div>
        </div>
      </div>
      {user.repositories.nodes.map((repo, index) => (
        <TImelinePoint repo={repo} index={index} key={index} />
      ))}
    </div>
  )
}

export default TimeLine
