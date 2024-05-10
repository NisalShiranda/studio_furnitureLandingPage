import "./Blogcard.css"
import PropTypes from 'prop-types';


export const Blogcard = ({
    imgSrc,
    imgAlt,
    user,
    date,
    description,
}) => {
  return (
    <>
        <div className="blogcard">
            <img className="blog-img" src={imgSrc} alt={imgAlt}></img>
            <div className="blog-text">
                <div className="user-date">
                    <p>{user}</p>
                    <p>{date}</p>
                </div>
                <div className = "title">
                    <p className="font-semibold text-[1.2rem] pt-2 pl-4">{description}</p>
                </div>
            </div>
        </div>
    </>
  )
}

Blogcard.propTypes = {

    imgSrc: PropTypes.string,
    imgAlt: PropTypes.string,
    user: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
 
   };