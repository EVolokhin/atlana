import React,{ FC } from 'react'
import {ListUsersQuery, User} from '../../graphql/generated'
import {Loader, UserCard} from '../common'

import './userList.scss'

export const UsersList: FC<{
    searchValue: string
    setSearchValue: React.Dispatch<string>
    data:  ListUsersQuery | undefined
    loading: boolean
}> = ({ searchValue, setSearchValue, data, loading }) => {


    const usersArr = data?.search?.nodes

  return (
    <section className={'list-container'}>
      <input
        className={'list-search'}
        type={'search'}
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value)
          }}
        placeholder={'Search for Users'}
      />
      {loading && <Loader/>}
      {!loading && usersArr?.map((user) => {
        return (
          <UserCard key={(user as User)?.id} userData={user as User} />
        )
      })}
    </section>
  )
}