import "../Navbar/Navbar.css"
import NavbarItems from '../../components/NavBarItems'
import SigninBtn from '../../components/signinbtn'

function Navbar() {
  return (
    <>
        <div className="navbar ">
            <div className="navbar-logo">
                <h1 className="font-bold text-[2rem] text-[#F4D03F]">
                <span className="text-[#2E4053]">S</span>tudio.
                </h1>
            </div>
            <div className = "navbar-item">
                <NavbarItems />
            </div>
            <div className="navbar-signin">
                <SigninBtn />
            </div>

        </div>




    </>
  )
}

export default Navbar