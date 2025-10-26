import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import CartOverview from '../feature/cart/CartOverview'

export default function AppLayout() {

  const navigation = useNavigation()
  console.log(navigation)

  const isLoading = navigation.state === "loading" 

  return (
    <div className='grid grid-rows-[auto_1fr_auto] h-screen'>
        {isLoading && <div>...Loading</div>}
        <Header />
        <main>
            <Outlet />
        </main>
        <CartOverview />
    </div>
  )
}
