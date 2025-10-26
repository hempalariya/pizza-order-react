import React from 'react'
import RegisterUser from '../feature/user/RegisterUser'
import { useSelector } from 'react-redux'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Home() {

  const userName = useSelector(store => store.user.userName)

  return (
    <div className='text-center mt-15'>
      <h2 className='text-2xl md:text-4xl'>The best pizza</h2>
      <p className='text-yellow-400 text-xl md:text-2xl mb-15'>Straight from the oven, straight to you</p>

      {userName === '' ? <RegisterUser /> : <Link to={'/menu'}>Continue Ordering</Link>}
      
    </div>
  )
}
