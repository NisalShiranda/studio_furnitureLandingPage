import './NavBarItems.css'

function NavBarItems() {
  return (
    <>
        <div className='navbaritems font-medium'>
            <a className="items pl-5 text-[1rem]" href='#home'>Home</a>
            <a className="items pl-5 text-[1rem]" href='#products'>Products</a>
            <a className="items pl-5 text-[1rem]" href='#sales'>Sales</a>
            <a className="items pl-5 text-[1rem]" href='#contacts'>Contacts</a>
        </div>
    </>
  )
}

export default NavBarItems