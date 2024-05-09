import './Hero.css'
import HeroImage from '../../../public/herochair.png'
import HeroBtn from '../../components/Herobtn'
import Fire from '../../../public/fire.svg'
import Smallcard from "../../components/smallcard"

function Hero() {
  return (
    <>
        <div className="hero">
            <div className="hero-text ">
                <div className="flex flex-row  items-center">
                    <p>TRENDY COLLECTION</p>
                    <img className="fireImage"src={Fire} alt="Fire Image"></img>
                </div>
                <p className="text-[4rem] font-semibold">Make Your <span className=' text-[#F4D03F]'>Interior</span> Unique & Modern.</p>
                <p className='text-[1.5rem] font-medium pt-2'>Turn your room with panto into a lot more minimalist and modern.</p>
                <div><HeroBtn /></div>
            </div>
            <div className="hero-image">
                <img src={HeroImage} alt="hero-image"></img>
            </div>
        </div>
        <Smallcard />
    </>
  )
}

export default Hero