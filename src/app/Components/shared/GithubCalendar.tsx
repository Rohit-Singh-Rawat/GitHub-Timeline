'use client'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'

interface Activity {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

type GitHubCalendarComponentProps = {
  username: string
}

const GitHubCalendarComponent: React.FC<GitHubCalendarComponentProps> = ({
  username,
}) => {
  const selectLast8Weeks = (data: Activity[]) => {
    const currentDate = new Date()
    const fiftySixDaysAgo = new Date()
    fiftySixDaysAgo.setDate(currentDate.getDate() - 56)

    return data.filter((activity) => {
      const date = new Date(activity.date)
      return date >= fiftySixDaysAgo && date <= currentDate
    })
  }

  return (
    <GitHubCalendar
      style={{ overflow: 'hidden' }}
      username={username}
      transformData={selectLast8Weeks}
      hideColorLegend
      hideMonthLabels
      hideTotalCount
    />
  )
}

export default GitHubCalendarComponent
