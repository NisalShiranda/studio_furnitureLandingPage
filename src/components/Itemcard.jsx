
import PropTypes from 'prop-types';
import "./Itemcars.css"
import Star from "../../public/star.svg"
import Plus from "../../public/plus.svg"


export const Itemcard = ({
   imgSrc,
   imgAlt,
   title,
   price,
}) => {

  return(

    <>
      <div className="card-container">
        <div className="flex justify-center items-center bg-[#EEEEEE]"><img className="w-[75%]"src={imgSrc} alt={imgAlt}></img></div>
        <div className="card-text">
          <div className="card-description pt-2 pl-5 font-semibold">
            <p>{title}</p>
          </div>
          <div className="card-star pl-5 pt-3">
            <div className=""><img className="star" src={Star}></img></div>
            <div className=""><img className="star" src={Star}></img></div>
            <div className=""><img className="star" src={Star}></img></div>
            <div className=""><img className="star" src={Star}></img></div>
            <div className=""><img className="star" src={Star}></img></div>
          </div>
          <div className="price ">
            <div className="price-text pl-5 pt-5">
              <p className="font-semibold">{price}</p>
            </div>
            <div className="add-icon">
              <img className="plus" src={Plus}></img>
            </div>
          </div>
        </div>
        
      </div>
    </>


  )
    
};

Itemcard.propTypes = {

  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
//   // imgSrc: PropTypes.string,
//   // imgAlt: PropTypes.string,
//   // title: PropTypes.string,
//   // description: PropTypes.string,
 };


export default Itemcard;