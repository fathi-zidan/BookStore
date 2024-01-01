import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Search from './components/Search'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import BooksContextProvider from './components/BooksContext.jsx'
import Card from './components/Card.jsx'
import BooksList from './components/BooksList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <BooksContextProvider>

    
    <section className='max-w-[1440px] mx-auto bg-white' >
      <Header/>
      <Search/>
     <BooksList/>
    </section>
    </BooksContextProvider>
    </BrowserRouter>
  )
}

export default App
