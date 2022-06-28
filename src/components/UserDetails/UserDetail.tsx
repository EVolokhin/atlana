import React, {FC, useState} from 'react'
import {Loader, UsersRepoCard} from '../common'
import {useGetUserInfoQuery} from '../../graphql/generated'
import {useParams} from 'react-router-dom'

export const UserDetails: FC = () => {
  const [searchValue, setSearchValue]= useState<string>('')
  const { userId } = useParams()

  const { data, loading, error } = useGetUserInfoQuery({variables: { login: `${userId}`}})

  if (loading) return <Loader />
  if (error) return (<span> Error data loading...</span>)
  return (
    <section>
      <div>
        <img className={'card-image'} src={`${data?.user?.avatarUrl}`} alt={'users photo'}/>
        <div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <input
        // className={'list-search'}
        type={'search'}
        value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        placeholder={'Search for User`s Repositories'}
      />
      <UsersRepoCard />
    </section>
  )
}