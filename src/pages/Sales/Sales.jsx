import "./Sales.css"
import Photo from "../../../public/photo.png"

function Sales() {
  return (
    <section className = "Sales-header" id="sales">
        <div className="Class-Container">
            <div className="fullbox flex flex-row">
                <div className="classBox1">
                    <p className="text-[1rem] font-semibold">World Best Sofas</p>
                    <p className="text-[2.5rem] font-bold tracking-wider pt-2 pb-5">SALES ENDS IN 1 DAY </p> 
                    <p className="Order ">Order Now</p>
                </div>
                <div className="classBox2">
                    <img className="Box2-Img" src={Photo} alt=""></img>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Sales