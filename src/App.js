import React from 'react'
import Header from './components/header'
import Reviews from './components/reviews'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap">
        <Reviews />
      </div>
    </div>
  )
}

export default App
