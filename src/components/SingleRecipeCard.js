import React, {useContext} from 'react';
import {useNavigate} from "react-router-dom";
import mainContext from "../context/mainContext";
import {Rating} from "@mui/material";


const SingleRecipeCard = ({item, index}) => {

    const {getFav, setFav, recipe, setRecipe, setValue} = useContext(mainContext)
    const nav = useNavigate()

    function viewSingleRec() {
        nav(`/recipe/${item.title}`)
    }
    function addToFav(item){
        if(!getFav.includes(item)){
            getFav.push(item)
            setFav([...getFav])
        }
        nav("/")
    }
    function deleteRecipe (item, index) {
        const newArr = recipe.filter((x, i) => i !== index)
        setRecipe([...newArr])
    }

    return (
        <div className="d-flex space-btw column border margin25">

            <img onClick={viewSingleRec} src={item.image[0]} alt=""/>
            <h1>{item.title}</h1>
            <Rating
                readOnly
                name="simple-controlled"
                value={item.avgRating}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            />
            <h2>Ingredients: {item.ingredients.length}</h2>
            <h2>Preparation time: {item.preparationTime.length} min</h2>
            <h2>Steps: {item.preparationSteps.length}</h2>
            <h2>Reviews: {item.reviews.length}</h2>
            <h2>Rating: {item.averageRating}</h2>
            <button onClick={()=>addToFav(item)}> Add to Fav</button>
            <button onClick={()=>deleteRecipe(item, index)}>Delete Recipe</button>

        </div>
    );
};

export default SingleRecipeCard;