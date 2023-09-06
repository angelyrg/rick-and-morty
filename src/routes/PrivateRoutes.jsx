import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from '../pages/HomePage'
import { CharactersListPage } from '../pages/CharactersListPage'
import CharacterDetailPage from '../pages/CharacterDetailPage'
import { LocationListPage } from '../pages/LocationListPage'
import { EpisodesListPage } from '../pages/EpisodesListPage'

function PrivateRoutes() {
  return (
    <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='/character' element={ <CharactersListPage /> } />
        <Route path='/character/:characterId' element={ <CharacterDetailPage /> } />
        <Route path='/location' element={ <LocationListPage /> } />
        <Route path='/episode' element={ <EpisodesListPage /> } />
        <Route path='*' element={ <Navigate to='/' replace /> } />
    </Routes>
  )
}

export default PrivateRoutes