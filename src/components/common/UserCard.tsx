import React,{ FC } from 'react'
import {User} from '../../graphql/generated'
import './userCard.scss'
import {generatePath, useNavigate} from 'react-router-dom'

export const UserCard: FC<{ userData: User | null }> = ({ userData}) => {
  const navigate =useNavigate()

  const handleDetails = () => {
   navigate(generatePath('/detailed/:userId', { userId: userData?.login}))
  }

  return (
    <div className={'card-container'} onClick={handleDetails}>
      <img className={'card-image'} src={`${userData?.avatarUrl}`} alt={'users photo'}/>
      <div>{userData?.name}</div>
      <div>Repo: {userData?.repositories?.totalCount}</div>
    </div>
  )
}