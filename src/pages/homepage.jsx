import React from 'react'
import Directory from '../components/directory'
import Header from '../components/header'
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className='homepage'>
        <Header/>
        <Directory/>
    </div>
  )
}

export default Homepage