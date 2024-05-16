import Navbar from './pages/Navbar/Navbar'
import Hero from './pages/HeroSection/Hero'
import Products from "./pages/Products/Products"
import Sales from "./pages/Sales/Sales"
import Blogs from "./pages/Blogs/Blogs"
import Footer from "./pages/Footer/Footer"
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';

function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Sales />
      <Blogs />
      <Footer />
    </>
  )
}

export default App
