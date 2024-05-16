import { BrowserRouter } from 'react-router-dom'
import {HashLink as Link} from 'react-router-hash-link';
import './NavBarItems.css'

function NavBarItems() {
  return (
    <BrowserRouter>
        <div className='navbaritems font-medium'>
            
            <Link className="items pl-5 text-[1rem]" to="#home" smooth>Home</Link>

            <Link className="items pl-5 text-[1rem]" to="#products" smooth>Products</Link>

            <Link className="items pl-5 text-[1rem]" to="#sales" smooth>Sales</Link>

            <Link className="items pl-5 text-[1rem]" to="#blogs" smooth>Blogs</Link>
            
            
            
            
            
        </div>
    </BrowserRouter>
  )
}

export default NavBarItems