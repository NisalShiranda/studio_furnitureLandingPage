import '../components/UserCollage.css'
import User1 from "../../public/u1.jpeg"
import User2 from "../../public/u2.jpeg"

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
          Used by 300,000 people globaly
        </div>
      </div>
    </>
  )
}

export default UserCollage