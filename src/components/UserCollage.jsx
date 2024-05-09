import '../components/UserCollage.css'
import User1 from "../../public/u1.jpeg"
import User2 from "../../public/u2.jpeg"
import User3 from "../../public/u3.jpeg"
import User4 from "../../public/u4.jpeg"

function UserCollage() {
  return (
    <>
      <div className="collage">
        <div>
          <img className="userImg1" src={User1} alt="User" />
        </div>
        <div className=''>
          <img className="userImg2" src={User2} alt="User" />
        </div>
        <div>
          <img className="userImg3" src={User1} alt="User" />
        </div>
        <div className=''>
          <img className="userImg4" src={User2} alt="User" />
        </div>
        <div className="collageText">
          Nisal Shiranda
        </div>
      </div>
    </>
  )
}

export default UserCollage