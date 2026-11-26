import React from "react";
import { assets } from "../../assets/assets";

const Add=()=>{
    return(
        <div className="add">
            <form className="flex-col">
                <div className="add-img-upload flex-col">
                    <p>Upload Image</p>
                    <img src={assets.upload_area} alt="" />
                </div> 
                <div className="add-product-name flex-col">
                    <p>Product name</p>
                    <input type="text" name="name" placeholder="Type here" />
                </div>
                <div className="add-product-description flex-col">
                    <p>Product description</p>
                    <textarea name="description" rows="6" placeholder="Write content here"></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <select >
                            <option value="Salad">Salad</option>
                            <option value="rolls">Rolls</option>
                            <option value="dessert">Dessert</option>
                            <option value="sandwich">Sandwich</option>
                            <option value="cake">Cake</option>
                            <option value="pure veg">Pure veg</option>
                            <option value="noddles">Noddles</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                    <div className="add-price">
                        <p>Product price</p>
                        <input type="Number" name="price" placeholder="$20" />
                    </div>
                </div>
                <button type="submit" className="add-btn">ADD</button>
            </form>
        </div>
    )
}
export default Add