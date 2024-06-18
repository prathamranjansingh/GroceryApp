import Reac, { useContext } from "react";
import "./GroceryDisplay.css"; // Update the CSS file import
// import { grocery_list } from "../../assets/assets"; // Import the grocery list from the assets file
import GroceryItem from "../GroceryItem/GroceryItem"; // Update the component import
import { StoreContext } from "../../context/StoreContext";

const GroceryDisplay = ({ category }) => {
  const { grocery_list } = useContext(StoreContext);
  return (
    <div className="grocery-display" id="grocery-display">
      <div className="grocery-display-list">
        {grocery_list.map((item, index) => {
          if (category === "all" || category === item.category) {
            return (
              <GroceryItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default GroceryDisplay;
