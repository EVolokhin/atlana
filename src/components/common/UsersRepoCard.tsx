import React,{ FC } from 'react'
import  './usersRepoCard.scss'

export const UsersRepoCard: FC<{
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  repo: {__typename?: 'Repository' | undefined, name: string, stargazerCount: number, forkCount: number, url: any} | null
}> = ({ repo}) => {

  const handleCLick = () => {
    const downloadLink = window.document.createElement('a')
      downloadLink.setAttribute('target', '_blank')
      downloadLink.href = '' + repo?.url
      downloadLink.click()
    }

  return (
    <div className={'repo-card'} onClick={handleCLick}>
      <div>RepoName: {repo?.name}</div>
      <div>
        <div>Forks {repo?.forkCount}</div>
        <div>Stars {repo?.stargazerCount}</div>
      </div>
    </div>
  )
}