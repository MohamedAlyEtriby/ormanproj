import React from 'react'
import HeaderNav from './HeaderNav/HeaderNav'
import MainNav from './MainNav/MainNav'
import Footer from './Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className=''>
      <HeaderNav/>
      <MainNav/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
