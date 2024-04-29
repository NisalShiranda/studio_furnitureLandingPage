import "../Navbar/Navbar.css"

function Navbar() {
  return (
    <>
        <div className="navbar ">
            <div className="navbar-logo">
                <h1 className="font-bold text-2xl text-[#F4D03F]">
                <span className="text-[#2E4053]">S</span>tudio.
                </h1>
            </div>
            <div className = "navbar-item">
                <p>Home</p>
                <p>Products</p>
                <p>Sales</p>
                <p>Contacts</p>
            </div>
            <div className="navbar-signin"></div>

        </div>




    </>
  )
}

export default Navbar