import Navbar from './pages/Navbar/Navbar'
import Hero from './pages/HeroSection/Hero'
import Products from "./pages/Products/Products"
import Sales from "./pages/Sales/Sales"
import Blogs from "./pages/Blogs/Blogs"
import Footer from "./pages/Footer/Footer"
import BacktoTopButton from './components/BacktoTopButton';
import './App.css'


function App() {
  

  return (
    <>
      <Navbar />
      <Hero />
      <Products />
      <Sales />
      <Blogs />
      <Footer />
      <BacktoTopButton />
    </>
  )
}

export default App
