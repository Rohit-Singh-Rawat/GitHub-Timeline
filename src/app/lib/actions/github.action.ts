// 'use server'
import axios from 'axios'

export interface Repository {
  name: string
  description: string
  stargazerCount: number
  forkCount: number
  createdAt: string
  primaryLanguage: {
    name: string
  } | null
  url: string
}

interface PageInfo {
  endCursor: string | null
  hasNextPage: boolean
}

export interface User {
  login: string
  name: string
  bio: string
  avatarUrl: string
  twitterUsername: string
  websiteUrl: string
  followers: {
    totalCount: number
  }
  following: {
    totalCount: number
  }
  createdAt: string
  repositories: {
    nodes: Repository[]
    pageInfo: PageInfo
  }
}

interface GitHubResponse {
  data: {
    user: User
  }
}

export const fetchGithubData = async (
  username: string
): Promise<User | undefined> => {
  const token = process.env.GITHUB_TOKEN
  const query = `
    query GetUser($username: String!) {
      user(login: $username) {
        login
        name
        bio
        avatarUrl
        twitterUsername
        websiteUrl
        followers {
          totalCount
        }
        following {
          totalCount
        }
        createdAt
        repositories(first: 100) {
          nodes {
            name
            description
            stargazerCount
            forkCount
            createdAt
            primaryLanguage {
              name
            }
              url
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
  `

  try {
    const response = await axios.post<GitHubResponse>(
      'https://api.github.com/graphql',
      { query, variables: { username } },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const userData = response.data.data.user

    userData.repositories.nodes.sort(
      (a, b) =>
        new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
    )

    return userData
  } catch (error) {
    console.error('Error making GraphQL request', error)
  }
}
