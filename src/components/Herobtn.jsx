import './Herobtn.css'
import PlayBtn from '../../public/play-button.svg'
import User from '../components/UserCollage'

function Herobtn() {
  return (
    <>
        <div className="herobtn pt-10">
            <div className='discover'>
                <div className="discover-btn"><p className="text-[1.2rem]">Discover Now</p></div>
                <img className="play pl-5" src={PlayBtn} alt="play button"></img>
                <div><p className="text-[1.2rem] font-medium pl-1">Watch Video</p></div>
            </div>
            <div className="user pt-5">
                <User />
                
            </div>
        </div>
    </>
  )
}

export default Herobtn