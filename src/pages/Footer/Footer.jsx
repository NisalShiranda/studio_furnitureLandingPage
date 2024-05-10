import "./Footer.css"
import FB from "../../../public/fb.svg"
import EMAIL from "../../../public/mail.svg"
import TWITTER from "../../../public/twitter.svg"
import LINKED from "../../../public/linkedin.svg"

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="fullgrid">
                <div className="grid grid-cols-4 pt-5">
                    <div className="grid1">
                        <p className="text-[1.5rem] font-semibold ">S<span className="text-[#F4D03F] tracking-wide">tudio.</span></p>
                        <p className="pt-5 leading-8">There are many variations of passages of Lorem <br></br>Ipsum availbale, but the majority have suffered <br></br>
                        allternation in some rijection.</p>
                        <div className="logos">
                            <div className="pr-3"><img className="image" src={FB} alt="facebook"></img></div>
                            <div className="pr-3"><img className="image" src={EMAIL} alt="facebook"></img></div>
                            <div className="pr-3"><img className="image" src={TWITTER} alt="facebook"></img></div>
                            <div className="pr-3"><img className="image" src={LINKED} alt="facebook"></img></div>
                        </div>
                    </div>
                    <div className="grid2 leading-10">
                        <p className="font-medium text-[1.2rem]">Fiture</p>
                        <p className="">About</p>
                        <p>Product</p>
                        <p>Discover</p>
                        <p>Contact</p>
                    </div>
                    <div className="grid2 leading-10">
                        <p className="font-medium text-[1.2rem]">Support</p>
                        <p>Cart</p>
                        <p>Login</p>
                        <p>Condition</p>
                        <p>Privacy</p>
                    </div>
                    <div className="grid2 leading-10">
                        <p className="font-medium text-[1.2rem]">Categories</p>
                        <p>All Furniture</p>
                        <p>Fortune</p>
                        <p>Wallpaper</p>
                        <p>Additional</p>

                    </div>
                </div>

                <div className="pt-5">
                    <hr></hr>
                    <p className="text-center font-extralight text-[0.7rem] pt-2 tracking-widest">@ 2024Studio. Furniture Landing page. All Right Reserved. (Nisal Shiranda Solutions)</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer