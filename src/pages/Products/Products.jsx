import "./Products.css"
import {Itemcard} from "../../components/Itemcard"
import Item1 from "../../../public/item1.png"
import Item2 from "../../../public/item2.png"
import Item3 from "../../../public/item3.png"
import Item4 from "../../../public/item4.png"
import Second from "../../components/SecondProduct"

function Products() {
  return (
    <div className="products" id="products">
        <div className="head-text">
            <p className="text-[2.5rem] text-center font-bold">Trending Products</p>
            <p className="text-[1rem] text-center">There are many variations of packages of sofas and other stufs.<br></br>but the majority have suffed.</p>
        </div>

        <div className="productCard pt-4 grid grid-cols-4 gap-2">
            <div className="card">
              <Itemcard imgSrc={Item1} alt="First-Item" title="Clean Cut Dining Chair" price="$299" />
            </div>
            <div className="card">
              <Itemcard imgSrc={Item2} alt="Second-Item" title="Afternoon Relax Chair" price="$270" />
            </div>
            <div className="card">
              <Itemcard imgSrc={Item3} alt="Third-Item" title="Reading Chair" price="$258" />
            </div>
            <div className="card">
              <Itemcard imgSrc={Item4} alt="Forth-Item" title="Circular Coffee Table" price="$399" />
            </div>

        </div>

        <Second />

        
    </div>
  )
}

export default Products