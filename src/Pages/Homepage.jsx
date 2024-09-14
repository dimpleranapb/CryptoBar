import React from 'react'
import Banner from "../components/Banner/Banner.jsx"
import CoinsTable from '../components/CoinsTable.jsx'
import SearchBar from '../components/SearchBar.jsx'
import JoinUs from '../components/JoinUs.jsx'

export default function Homepage() {
  return (
    <>
    <Banner />
    <SearchBar />
    <CoinsTable />
    <JoinUs />
    
    </>
  )
}
