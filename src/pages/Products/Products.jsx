import "./Products.css"
import Itemcard from "../../components/Itemcard"

function Products() {
  return (
    <div className="products">
        <div className="head-text">
            <p className="text-[2.5rem] text-center font-bold">Trending Products</p>
            <p className="text-[1rem] text-center">There are many variations of packages of sofas and other stufs.<br></br>but the majority have suffed.</p>
        </div>

        <div className="productCard grid grid-cols-4 gap-5">
            <div><Itemcard /></div>
            <div><Itemcard /></div>
            <div><Itemcard /></div>
            <div><Itemcard /></div>

        </div>
    </div>
  )
}

export default Products