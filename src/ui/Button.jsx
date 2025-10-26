import React from 'react'

export default function Button({children}) {
  return (
    <button className='bg-yellow-500 px-4 py-1 text-yellow-50 rounded-sm'>
        {children}
    </button>
  )
}
