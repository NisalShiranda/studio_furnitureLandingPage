import './signinbtn.css'
import Bag from '../../public/bag.svg'

function signinbtn() {
  return (
    <>
        <div className="signinbtn">
            
            <div className="signinbtn-logo pr-2">
                <img className="logo" src={Bag} alt="Bag Icon"></img>
            </div>
            <div className="signinbtn-text">
                <p className="text-[1rem]">signin</p>
            </div>
        </div>
    </>
  )
}

export default signinbtn