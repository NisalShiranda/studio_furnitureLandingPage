import "./Blogs.css"
import {Blogcard} from "../../components/Blogcard"
import B1 from "../../../public/b1.jpg"
import B2 from "../../../public/b2.jpg"
import B3 from "../../../public/b3.jpg"

function Blogs() {
  return (
    <>
        <div className="blogs">
            <div>
                <p className="text-[3rem] font-bold text-center">Our Blogs</p>
                <p className="text-[1rem] font-medium text-center">Find a bright ideal to suit your taste with <br></br>our great selection</p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="flex justify-center ">
                    <Blogcard imgSrc={B1} imgAlt="Blog1" user="admin" date="August12,2022" description="Going all-in with millenical designs" />
                </div>
                <div className="flex justify-center ">
                    <Blogcard imgSrc={B2} imgAlt="Blog2" user="admin" date="January01,2023" description="Exploring new ways of decorating" />
                </div>
                <div className="flex justify-center ">
                    <Blogcard imgSrc={B3} imgAlt="Blog3" user="admin" date="May24,2024" description="Handmade pieces that took time to make" />
                </div>




            </div>

            


        </div>
    </>
  )
}

export default Blogs