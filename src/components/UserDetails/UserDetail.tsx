import React, {FC, useState} from 'react'
import {Loader, UsersRepoCard} from '../common'
import {useGetUserInfoQuery} from '../../graphql/generated'
import {useParams} from 'react-router-dom'

import './userdetail.scss'
export const UserDetails: FC = () => {
  const [searchValue, setSearchValue]= useState<string>('')
  const { userId } = useParams()

  const { data, loading, error } = useGetUserInfoQuery({variables: { login: `${userId}`}})

  const filteredArr = data?.user?.repositories?.nodes?.filter((repo) => repo?.name.includes(searchValue))

  if (loading) return <Loader />
  if (error) return (<span> Error data loading...</span>)

  return (
    <section className={'details'}>
      <div className={'details-info'}>
        <img className={'details-image'} src={`${data?.user?.avatarUrl}`} alt={'users photo'}/>
        <div className={'details-data'}>
          <span>UserName: {data?.user?.name}</span>
          <span>Location: {data?.user?.location}</span>
          <span>Join Date: {data?.user?.createdAt}</span>
          <span>{data?.user?.followers?.totalCount} Followers</span>
          <span>Following {data?.user?.following?.totalCount}</span>
        </div>
      </div>
      <input
        className={'details-search'}
        type={'search'}
        value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        placeholder={'Search for User`s Repositories'}
      />
        {filteredArr?.map((repo, index) => {
          return  <UsersRepoCard key={index} repo={repo} />
        })}
    </section>
  )
}