import Home from './Home.jsx'
import React from 'react'
import Create from './Create.jsx'
import Update from './Update.jsx'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </Router>
  )
}

export default App
