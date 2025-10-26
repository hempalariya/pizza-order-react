import React from 'react'
import { useSelector } from 'react-redux'

export default function Header() {

  const userName = useSelector(store => store.user.userName)
  console.log(userName !== '', userName)
  return (
    <header className='flex justify-between items-center bg-yellow-400 text-stone-700 py-3 px-4'>
      <h1 className='text-2xl md:text-3xl md:px-2 font-semibold uppercase'>react pizza</h1>
      <input type="text" className='bg-yellow-100 h-8 outline-none px-1' placeholder='Search Order #' />
      {userName !== '' && <p className='hidden md:block uppercase text-stone-800 text-lg font-semibold'>{userName}</p>}
      
    </header>
  )
}
