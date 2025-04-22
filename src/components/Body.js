import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

  const [listOfRestaurant, setlistOfRestaurant] = useState(resList)

  return(
    <div className='body'>
      <div className='filter'>
        <button className="filter-btn" onClick={() => {
          let filteredList = listOfRestaurant.filter((res) => res.data.avgRating > 4);
          setlistOfRestaurant(filteredList)
          }}>Top Rated Restaurant</button>
      </div>

      <div className='rest-container'>
        {
          listOfRestaurant.map((restaurant) => <RestaurantCard key={restaurant.data.id} resData={restaurant}/>)
        }
      </div>

    </div>
  )
}

export default Body;