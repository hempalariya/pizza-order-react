import React from 'react'
import { Link } from 'react-router-dom'

export default function CartOverview() {
  return (
    <div className='bg-stone-800 text-stone-300 flex justify-between py-3 px-4 font-semibold uppercase md:px-10'>
      <div>
        <span className='mr-6'>23 pizzas</span>
        <span>₹1400</span>
      </div>
      <Link>open cart</Link>
    </div>
  )
}
