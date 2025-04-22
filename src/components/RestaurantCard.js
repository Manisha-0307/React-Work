import {CDN_URL} from '../utils/constant' 
const RestaurantCard = (props) => {
  const {resData} = props;

  const{name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.data;
  return (
    <div className='res-card'>
      
      <img className="res-card-image" src={CDN_URL+ resData.data.cloudinaryImageId}/>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}stars</h4>
      <h4>₹ {costForTwo / 100} for two</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
    
  )
}

export default RestaurantCard;