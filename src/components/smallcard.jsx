import "./smallcard.css"
import Cardimg1 from "../../public/cardimg1.png"
import Cardimg2 from "../../public/cardimg2.png"

function smallcard() {
  return (
    <div className="smallCard grid grid-cols-2 gap-12">
        <div className="card1">
            <div className="card-text">
                <p className="text-[1.5rem] font-semibold">Long Sofa</p>
                <p className="pt-5">Structure element highlights</p>
                <p className="pt-16 font-semibold text-[#F4D03F]">SHOP NOW</p>
            </div>
            <div className="card-img">
            <img className="img1" src={Cardimg1} alt="Card Image"></img>
            </div>
        </div>
        <div className="card2">
            <div className="card-text">
                <p className="text-[1.5rem] font-semibold">Dining Chair</p>
                <p className="pt-5">Structure element highlights</p>
                <p className="pt-16 font-semibold text-[#F4D03F]">SHOP NOW</p>
            </div>
            <div className="card-img">
                <img className="img2" src={Cardimg2} alt="Card Image"></img>
            </div>
        </div>
    </div>
  )
}

export default smallcard