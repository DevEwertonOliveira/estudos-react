import './App.css'

// config react router
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import Navbar from './components/Navbar'
import SearchForm from './components/SearchForm'

// pages
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Info from './pages/Info'
import NotFound from './pages/NotFound'
import Search from './pages/Search'



function App() {



  return (
    <div className="App">
      <h1>React Router</h1>
      <BrowserRouter>
        {/* Links com react router */}
        <Navbar />
        {/* Search */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* Rota dinâmica */}
          <Route path="/products/:id" element={<Product />} />
          {/* nested routes */}
          <Route path="/products/:id/info/" element={<Info />} />
          {/* Search */}
          <Route path="/search" element={<Search />} />
          {/* no match route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
