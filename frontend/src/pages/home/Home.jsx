import React from 'react'
import Banner from './Banner'
import TopSallers from './TopSallers'
import Recommended from './Recommended'
import News from './News'

const Home = () => {
  return (
    <>
        <Banner />
        <TopSallers />
        <Recommended />
        <News />
    </>
  )
}

export default Home