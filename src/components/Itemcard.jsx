
import PropTypes from 'prop-types';
import "./Itemcars.css"


export const Itemcard = ({
   imgSrc,
  // imgAlt,
  // title,
  // description,
}) => {

  return(

    <>
      <div className="card-container">
        <div className="flex justify-center items-center bg-[#EEEEEE]"><img className="w-[75%]"src={imgSrc} alt=""></img></div>
        <div className="card-text">
          <div className="card-description"></div>
          <div className="card-star"></div>
          <div className="price">
            <div className="price-text"></div>
            <div className="add-icon"></div>
          </div>
        </div>
        
      </div>
    </>


  )
    
};

Itemcard.propTypes = {

  imgSrc: PropTypes.string,
//   // imgSrc: PropTypes.string,
//   // imgAlt: PropTypes.string,
//   // title: PropTypes.string,
//   // description: PropTypes.string,
 };


export default Itemcard;