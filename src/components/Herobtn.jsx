import './Herobtn.css'
import PlayBtn from '../../public/play-button.svg'

function Herobtn() {
  return (
    <>
        <div className="herobtn pt-10">
            <div className='discover'>
                <div className="discover-btn"><p className="text-[1.2rem]">Discover Now</p></div>
                <img className="play pl-5" src={PlayBtn} alt="play button"></img>
                <div><p className="text-[1.2rem] font-medium pl-1">Watch Video</p></div>
            </div>
            <div className="watch">
                
            </div>
        </div>
    </>
  )
}

export default Herobtn