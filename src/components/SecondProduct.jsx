import "./SecondProduct.css"
import {TinyCard} from "./TinyCard"
import C1 from "../../public/c1.png"
import C2 from "../../public/c2.png"
import C3 from "../../public/c3.png"
import C4 from "../../public/c4.png"
import C5 from "../../public/c5.png"
import C6 from "../../public/c6.png"
import Art from "../../public/art.jpg"

function SecondProduct() {
  return (

    <>
        <div className="SecondProductContainer pt-10">
            <div>
                <p className="first-text text-[3.5rem] font-bold tracking-[.5em]">PRODUCT</p>
                <p className="second-text font-bold text-[2.2rem] tracking-[.1em]">PRODUCT</p>
            </div>

            <div className="product-images flex flex-row pt-4">
                <div className="box1">
                    <img className="ArtImage" src={Art} alt="Art"></img>
                </div>
                <div className="box2">
                    <div className="box2-imagegrid grid grid-cols-3 gap-4">
                        <div className="imggrid ">
                            <TinyCard imgSrc={C1} imgAlt="Chair1" name="Slim Dining Chair" price="$240" />
                        </div>
                        <div className="imggrid">
                            <TinyCard imgSrc={C2} imgAlt="Chair2" name="Arm Chair" price="$235" />
                        </div>
                        <div className="imggrid">
                            <TinyCard imgSrc={C3} imgAlt="Chair3" name="Moddern Chair" price="$265" />
                        </div>
                        <div className="imggrid">
                            <TinyCard imgSrc={C4} imgAlt="Chair4" name="Moddern Chair" price="$234" />
                        </div>
                        <div className="imggrid">
                            <TinyCard imgSrc={C5} imgAlt="Chair5" name="Coffee Chair" price="$140" />
                        </div>
                        <div className="imggrid">
                            <TinyCard imgSrc={C6} imgAlt="Chair6" name="Arne Dining Chair" price="$440" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </>
    
  )
}

export default SecondProduct