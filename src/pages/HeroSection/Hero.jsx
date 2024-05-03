import './Hero.css'
import HeroImage from '../../../public/herochair.png'

function Hero() {
  return (
    <>
        <div className="hero">
            <div className="hero-text ">
                <p>TRENDY COLLECTION</p>
                <p className="text-[4rem] font-semibold">Make Your Interior Unique & Modern.</p>
                <p className='text-[1.5rem] font-medium'>Turn your room with panto into a lot more minimalist and modern.</p>
            </div>
            <div className="hero-image">
                <img src={HeroImage} alt="hero-image"></img>
            </div>
        </div>
    </>
  )
}

export default Hero