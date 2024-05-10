import "./TinyCard.css"
import PropTypes from 'prop-types';



export const TinyCard = ({
    imgSrc,
    imgAlt,
    name,
    price,
}) => {
  return (
    <>
        <div className="tinycard-container">
            <div className="tinyimgbox">
            <img className="tinyImageChair" src={imgSrc} alt={imgAlt}></img>
            </div>
            
            <div className="tinyCard-text ">
                <p className="font-medium ">{name}</p>
                <p className="font-medium text-[#F4D03F]">{price}</p>
            </div>

        </div>





    </>
    
  )
}

TinyCard.propTypes = {

    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
  //   // imgSrc: PropTypes.string,
  //   // imgAlt: PropTypes.string,
  //   // title: PropTypes.string,
  //   // description: PropTypes.string,
   };