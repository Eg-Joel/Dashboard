import React from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Dashboard from '../components/Dashboard'

function Home() {
  return (
    <div className='main-container'>
        <Header/>
        <Sidebar/>
        <Dashboard/>
    </div>
  )
}

export default Home